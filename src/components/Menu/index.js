import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import {
    GPSSvgComponent,
    BPMSvgComponent,
    SomSvgComponent,
    AtividadeSvgComponent
} from "../../../assets/svgImages";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons, AntDesign } from '@expo/vector-icons';

import Informacao from '../Informacao';
import Configuracao from '../Configuracao';
import Cadastro from '../Cadastro';
import styles from './styles';
import stylesGeral from "../styleGeral";

const Tab = createBottomTabNavigator();

const BtnCadastro = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <AntDesign style={{ bottom: 32 }} name="pluscircle" size={64} color="#FCBE6B" />
    </TouchableOpacity>
);

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

    return (
        <View >
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.user}></View>
                    <Text style={styles.username}> Usuário</Text>
                </View>

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