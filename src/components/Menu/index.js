import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    GPSSvgComponent,
    BPMSvgComponent,
    SomSvgComponent,
    AtividadeSvgComponent
} from "../../../assets/svgImages";
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons, AntDesign } from '@expo/vector-icons';

import Header from '../Header';
import Informacao from '../Informacao';
import Configuracao from '../Configuracao';
import Cadastro from '../Cadastro';
import styles from './styles';
import stylesGeral from "../styleGeral";

const Tab = createBottomTabNavigator();

function NavegacaoTab({ navigation }) {
    return (
        <Tab.Navigator
            initialRouteName="Menu"
            screenOptions={{
                showLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#FFF2E2',
                    borderRadius: 15,
                    height: 80,
                    top: 0,
                },
            }}
        >
            <Tab.Screen name="Configuracao" component={Configuracao}
                options={{
                    title: 'Configuracao',
                    tabBarIcon: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
                            <Octicons name="gear" size={32} color="#775B37" />
                        </TouchableOpacity>
                    ),

                }} />

            <Tab.Screen name="CadastroPet" component={Cadastro}
                options={{
                    title: 'CadastroPet',
                    tabBarButton: () => (<TouchableOpacity onPress={() => navigation.navigate('CadastroPet')}>
                        <AntDesign style={{ bottom: 32 }} name="pluscircle" size={64} color="#FCBE6B" />
                    </TouchableOpacity>)

                }} />

            <Tab.Screen name="Informacao" component={Informacao}
                options={{
                    title: 'Informacao',
                    tabBarIcon: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Informacao')}>
                            <Ionicons name="information-circle-outline" size={32} color="#775B37" />
                        </TouchableOpacity>
                    ),

                }} />
        </Tab.Navigator >
    );
}

export default function Menu({ navigation }) {

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
            Alert.alert(Alert.alert(e.toString()));
        }
    }
    return (
        <View >
            <View style={styles.container}>

                <Header usuario={username} />

                <View style={stylesGeral.borderContainer}>

                    <View style={styles.btnGroup}>
                        <View style={styles.btnGroupSensor}>

                            <TouchableOpacity style={styles.btnSensor}
                                onPress={() => navigation.navigate('GPS')}>
                                <GPSSvgComponent />
                                <Text style={styles.btnSensorText}> GPS </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnSensor}
                                onPress={() => navigation.navigate('BPM')}>
                                <BPMSvgComponent />
                                <Text style={styles.btnSensorText}> BPM </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btnGroupSensor}>

                            <TouchableOpacity style={styles.btnSensor}
                                onPress={() => navigation.navigate('Som')}>
                                <SomSvgComponent />
                                <Text style={styles.btnSensorText}> Som </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnSensor}
                                onPress={() => navigation.navigate('Atividade')}>
                                <AtividadeSvgComponent />
                                <Text style={styles.btnSensorText}> Atividade </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btnGroup}>

                            <TouchableOpacity style={styles.btn}
                                onPress={() => navigation.navigate('Estresse')}>
                                <Text style={styles.btnText}> Verificar estresse </Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>

            </View>

            <View style={styles.navBar}>
                <NavegacaoTab navigation={navigation} />
            </View>

        </View>

    );
}