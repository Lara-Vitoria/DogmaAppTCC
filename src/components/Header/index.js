import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";

import styles from './styles';
import stylesGeral from "../styleGeral";
export default function Header({ usuario }) {

    return (
        <View >
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.user}></View>
                    <Text style={styles.username}> {usuario} </Text>
                </View>
            </View>
        </View>
    );
}