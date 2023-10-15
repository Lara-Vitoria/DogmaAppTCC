import { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import Svg, { Circle } from "react-native-svg";

import api from '../../../../service/api';

import MiniColeiraSvgComponent from "../../../../assets/svgImages/MiniColeira";
import PetHeader from '../../PetHeader';

import styles from './styles';
import stylesGeral from "../../styleGeral";

export default function GPS({ navigation }) {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [id, setId] = useState('');
    const [petId, setPetId] = useState('');

    function handlePetSelection(petId) {
        setPetId(petId);
    }

    useEffect(
        () => {
            //getDados();
        }, []
    );

    async function getDados() {
        await api.get(`/gps/user/${id}`)
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error.response.data));
    }

    return (
        <View style={stylesGeral.container}>

            <View style={stylesGeral.opcoesGroup}>
                <PetHeader onSelectPet={handlePetSelection} />
            </View>


            <View style={stylesGeral.borderContainerFooter}>
                {
                    petId
                        ? <MapView style={styles.mapa} />
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