import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from '../../../service/api'

import Header from '../Header';
import PetImgSvgComponent from '../../../assets/svgImages/PetImg';
import styles from './styles';
import stylesGeral from "../styleGeral";
export default function ListaPets({ navigation }) {

    const [pets, setPets] = useState([]);
    const [load, setLoad] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(
        () => {
            getUsuario();
        }, []
    );

    async function getUsuario() {
        try {
            let user = await AsyncStorage.getItem("@user");
            userJson = JSON.parse(user)
            setUsername(userJson.name)
            const userId = userJson.id

            getPet(userId);
        }
        catch (e) {
            Alert.alert(e.toString());
        }
    }

    async function getPet(userId) {
        try {
            const res = await api.get(`/pets/userId/${userId}`)
            setPets(res.data);
        } catch (error) {
            console.log(error.response.data)
        }
    }

    async function excluiPet(id) {
        Alert.alert('Atenção', 'Confirma a remoção do pet?',
            [{
                text: 'Sim',
                onPress: async () => {
                    try {
                        const res = await api.delete(`/pets/${id}`)
                        Alert.alert("Excluido com sucesso: ", res.data);

                        getUsuario()
                    } catch (e) {
                        console.log(e)
                        Alert.alert(e.toString());
                    }
                },
            },
            {
                text: 'Não',
                style: 'cancel',
            }]);

    }

    return (
        <View style={styles.containerMain}>

            <View>
                <Header usuario={username} />
            </View>

            <ScrollView>
                <View style={stylesGeral.borderContainer} >
                    {pets.map((pet, index) => (
                        <View style={styles.backPet} key={index.toString()}>

                            <View style={styles.imgPet}>
                                <PetImgSvgComponent />
                            </View>

                            <View style={styles.opcao} >
                                <Text style={styles.petTxt}>{pet.name}</Text>

                                <TouchableOpacity onPress={() => navigation.navigate('CadastroPet', { mode: 'edit', pet: pet })}>
                                    <Foundation style={styles.btnIcon} name="pencil" size={32} color="#775B37" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => excluiPet(pet.id)}>
                                    <Ionicons style={styles.btnIcon} name="trash" size={32} color="#775B37" />
                                </TouchableOpacity>
                            </View >
                        </View>
                    ))
                    }
                </View>

            </ScrollView>
            <View style={styles.rodape}></View>
        </View>
    );
}