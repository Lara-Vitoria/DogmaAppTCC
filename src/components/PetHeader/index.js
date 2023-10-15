import { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
    ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from '../../../service/api';

import stylesGeral from "../styleGeral";
export default function PetHeader({ onSelectPet }) {
    const [pets, setPets] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(
        () => {
            getUsuario();
        }, []
    );

    async function getUsuario() {
        try {
            let user = await AsyncStorage.getItem("@user");
            userJson = JSON.parse(user)
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

    function handlePetSelection(petId) {
        onSelectPet(petId);
    }

    return (
        <View style={stylesGeral.opcoesGroup}>
            <View style={stylesGeral.container}>
                <ScrollView horizontal={true}>
                    {
                        pets.map((pet, index) => (
                            <View style={stylesGeral.opcao} key={index.toString()}>
                                <TouchableOpacity onPress={() => handlePetSelection(pet.id)}>
                                    <Text style={stylesGeral.opcaoTxt}>{pet.name}</Text>
                                </TouchableOpacity>
                            </View >
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
}