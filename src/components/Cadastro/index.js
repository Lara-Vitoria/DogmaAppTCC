import { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

import api from '../../../service/api';
import * as Validacao from '../../../Utils/ValidaCadastroUsuario'

import Title from '../Title';
import styles from './styles';

export default function Cadastro({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

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
            await salva();
        }
    }

    async function salva() {
        let objUsuario = {
            name,
            email,
            password
        };

        await api.post('/users', objUsuario)
            .then(async () => {
                navigation.navigate('Menu')
            })
            .catch(error => console.log(error.response.data));
    }

    return (
        <View style={styles.containerMain}>
            <Title />

            <SafeAreaView style={styles.inputGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    placeholderTextColor='#FCBE6B'
                    onChangeText={(username) => setName(username)} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='#FCBE6B'
                    onChangeText={(email) => setEmail(email)} />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor='#FCBE6B'
                    onChangeText={(senha) => setPassword(senha)} />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    placeholderTextColor='#FCBE6B'
                    onChangeText={(confirmSenha) => setConfirmSenha(confirmSenha)} />
            </SafeAreaView>

            <TouchableOpacity style={styles.btn}
                onPress={() => verificaCampos(email, password, confirmSenha)}>
                <Text style={styles.textBtn}>
                    Entrar
                </Text>
            </TouchableOpacity>

        </View>
    );
}