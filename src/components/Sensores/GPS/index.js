import { useState, useEffect } from 'react';
import {
    View,
    Text,
    Alert
} from "react-native";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Svg, { Circle } from "react-native-svg";

import api from '../../../../service/api';

import MiniColeiraSvgComponent from "../../../../assets/svgImages/MiniColeira";
import PetHeader from '../../PetHeader';

import styles from './styles';
import stylesGeral from "../../styleGeral";

export default function GPS({ navigation }) {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [deviceLatitude, setDeviceLatitude] = useState(0);
    const [deviceLongitude, setDeviceLongitude] = useState(0);
    const [petId, setPetId] = useState('');

    useEffect(() => {
        obterLocalizacao();
    }, []);

    useEffect(() => {
        if (petId) getDados(petId);

        const interval = setInterval(() => {
            if (petId) getDados(petId);
        }, 30000);

        return () => clearInterval(interval);
    }, [petId]);

    async function handlePetSelection(petId) {
        setPetId(petId);
        getDados(petId);
    }
    async function getDados(id) {
        console.log("id gets: ", id)
        try {
            const response = await api.get(`/collar/collar/${id}`);
            let token = response.data.token;

            if (!response.data) {
                Alert.alert('Pet não possui dados de geolocalização');
                return;
            }

            const dados = await api.get(`/gps/collar/${token}`);

            var tamanho = dados.data.gps.length - 1

            setLatitude(parseFloat(dados.data.gps[tamanho].latitude))
            setLongitude(parseFloat(dados.data.gps[tamanho].longitude))
        } catch (error) {
            Alert.alert('Erro ao obter a localização do pet');
        }
    }
    const obterLocalizacao = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão de localização não concedida!');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            setDeviceLatitude(latitude);
            setDeviceLongitude(longitude)
        } catch (error) {
            Alert.alert('Erro ao obter a localização do celular');
        }
    };

    useEffect(() => {
        obterLocalizacao();
    }, [latitude, longitude]);

    return (
        <View style={stylesGeral.container}>

            <View style={stylesGeral.opcoesGroup}>
                <PetHeader onSelectPet={handlePetSelection} />
            </View>

            <View style={stylesGeral.borderContainerFooter}>
                {
                    petId && latitude !== 0 && longitude !== 0
                        ? <MapView style={styles.mapa}
                            initialRegion={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                            <Marker
                                coordinate={{
                                    latitude: latitude,
                                    longitude: longitude,
                                }}
                                title="Localização"
                                description="Local recebido da API"
                                pinColor="green"
                            />
                            <Marker
                                coordinate={{
                                    latitude: deviceLatitude,
                                    longitude: deviceLongitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                title="Localização"
                                description="Local recebido da API"
                                pinColor="blue"
                            />
                        </MapView>
                        : <Text style={stylesGeral.textDefault}>Selecione um pet</Text>
                }
            </View>

            <View style={stylesGeral.borderContainerDados}>
                {
                    petId
                        ? (
                            <View>
                                <View style={styles.petPosition}>
                                    <MiniColeiraSvgComponent />
                                    <Text style={[styles.positionTxt, { marginRight: -20 }]}>Informações sobre a posição do pet</Text>
                                </View>

                                <View style={styles.ownPosition}>
                                    <Svg height="20" width="20" style={{ marginRight: 20 }}>
                                        <Circle cx="10" cy="10" r="10" fill="#8AC6DD" />
                                    </Svg>
                                    <Text style={[styles.positionTxt]}>Informações sobre a posição do dono</Text>
                                </View>
                            </View>
                        )
                        : <Text style={stylesGeral.textDefault}>Selecione um pet</Text>
                }
            </View>
        </View>
    );
}