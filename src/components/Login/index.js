import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import Title from '../Title';
import { ColeiraSvgComponent } from '../../../assets/svgImages';

import styles from './styles';

import api from '../../../service/api';
import * as Validacao from '../../../Utils/ValidaCadastroUsuario'
export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function realizaLogin() {
        let objUsuario = {
            usuario: {
                email,
                password
            }
        };

        await api.post('/users/login', objUsuario)
            .then(async (response) => {
                var user = JSON.stringify(response.data);
                navigation.navigate('Menu')
                await AsyncStorage.setItem("@user", user);
            })
            .catch(error => Alert.alert(error.response.data));
    }

    function verificaDados() {
        if (Validacao.verificaDadosLogin(email, password)) {
            Alert.alert("Preencha os campos");
            return;
        }

        realizaLogin();
    }

    return (
        <View style={styles.containerMain}>
            <Title />

            <SafeAreaView style={styles.inputGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    placeholderTextColor='#FCBE6B'
                    onChangeText={(nome) => setEmail(nome)} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor='#FCBE6B'
                    onChangeText={(senha) => setPassword(senha)} />
            </SafeAreaView>

            <Text style={styles.small}>
                Esqueceu a senha?
            </Text>

            <ColeiraSvgComponent />

            <TouchableOpacity style={styles.btn}
                onPress={() => verificaDados()}>
                <Text style={styles.textBtn}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <View style={styles.textGoup}>
                <Text style={styles.text}>
                    Não possui cadastro?
                </Text>

                <View style={styles.textGoupAlign}>
                    <Text style={styles.textDestaque} onPress={() => navigation.navigate('Cadastro')}>
                        Clique aqui
                    </Text>
                    <Text style={styles.text}>
                        para se cadastrar
                    </Text>
                </View>

            </View>
        </View>
    );
}