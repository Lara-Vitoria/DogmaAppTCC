import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';

import Header from '../Header';
import styles from './styles';
import stylesGeral from "../styleGeral";
export default function Configuracao({ navigation }) {

    const [username, setUsername] = useState('');

    useEffect(
        () => {
            getNome();
        }, []
    );

    async function getNome() {
        try {
            let user = await AsyncStorage.getItem("@user");
            userJson = JSON.parse(user)
            setUsername(userJson.name);
        }
        catch (e) {
            Alert.alert(e.toString());
        }
    }

    return (
        <View style={styles.containerMain}>

            <Header usuario={username} />

            <View style={stylesGeral.borderContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EdicaoUsuario')} >
                    <Ionicons name="newspaper-outline" style={styles.btnIcon} color="#775B37" size={24} />
                    <Text style={styles.btnTxt}>Meus dados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ListaPets')}>
                    <Ionicons style={styles.btnIcon} name="paw" size={24} color="#775B37" />
                    <Text style={styles.btnTxt}>Pets</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}