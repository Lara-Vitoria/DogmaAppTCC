import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';

import api from '../../../service/api';
import Header from '../Header';

import * as Validacao from '../../../Utils/ValidaCadastroUsuario'
import styles from './styles';
import stylesGeral from "../styleGeral";

export default function EdicaoUsuario({ navigation }) {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(
        () => {
            getUsuario();
        }, []
    );

    async function getUsuario() {
        try {
            let user = await AsyncStorage.getItem("@user");
            userJson = JSON.parse(user)
            setId(userJson.id);
            setName(userJson.name);
            setEmail(userJson.email);
            setPassword(userJson.password);

        }
        catch (e) {
            Alert.alert(e.toString());
        }
    }

    async function verificaCampos(email, senha, confirmSenha) {
        if (Validacao.verificaEmail(email)) {
            Alert.alert("Digite um email valido");
            return;
        }

        else if (Validacao.verificaSenha(senha)) {
            Alert.alert("Digite uma senha valida");
            return;
        }

        else if (Validacao.verificaSenhasIguais(senha, confirmSenha)) {
            Alert.alert("As senhas estão diferentes");
            return;
        }

        else {
            await atualiza();
        }
    }

    async function atualiza() {
        let objUsuario = {
            data: {
                name,
                email,
                password
            }
        };

        await api.put(`/users/${id}`, objUsuario)
            .then(async (response) => {
                var user = JSON.stringify(response.data);
                Alert.alert("Usuario atualizado com sucesso");
                navigation.navigate('Configuracao')
                await AsyncStorage.setItem("@user", user);
            })
            .catch(error => Alert.alert(error.response.data));
    }

    return (
        <View style={styles.containerMain}>

            <Header usuario={name} />

            <View style={stylesGeral.borderContainer}>
                <SafeAreaView style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario"
                        placeholderTextColor='#775B37'
                        onChangeText={(username) => setName(username)}
                        value={name} />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='#775B37'
                        onChangeText={(email) => setEmail(email)}
                        value={email} />

                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        placeholderTextColor='#775B37'
                        onChangeText={(senha) => setPassword(senha)}
                        value={password} />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar senha"
                        placeholderTextColor='#775B37'
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        value={confirmPassword} />
                </SafeAreaView>

                <TouchableOpacity style={styles.btn}
                    onPress={() => verificaCampos(email, password, confirmPassword)}>
                    <Ionicons style={styles.btnIcon} name="ios-save-sharp" size={36} color="#fff" />
                    <Text style={styles.btnTxt}>Salvar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rodape}></View>
        </View>
    );
}