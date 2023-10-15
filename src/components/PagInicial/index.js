import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

import Title from '../Title';
import { Home } from '../../../assets/svgImages';

import styles from './style.js';
export default function PagInicial({ navigation }) {


    return (
        <View style={styles.containerMain}>
            <Title />

            <Home />

            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}> Iniciar </Text>
            </TouchableOpacity>
        </View>
    );
}
