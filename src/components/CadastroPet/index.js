import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Svg, { Circle } from "react-native-svg";
import { Ionicons } from '@expo/vector-icons';

import api from '../../../service/api';
import * as Validacao from '../../../Utils/ValidaCadastroUsuario'

import styles from './styles';
import stylesGeral from "../styleGeral";
import PetImg from '../../../assets/svgImages/PetImg';
export default function CadastroPet({ route, navigation }) {

    const { mode, pet } = route.params;

    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState('');
    const [sexNum, setSexNum] = useState();
    const [token, setToken] = useState('');

    const sexOptions = [
        { label: 'M', value: 0 },
        { label: 'F', value: 1 },
    ];


    useEffect(
        () => {
            getIdUsuario();
            if (mode === 'edit') {
                setName(pet.name);
                setAge(pet.age);
                setBreed(pet.breed);
                setToken(pet.token);
            }
        }, []
    );

    async function getIdUsuario() {
        try {
            let user = await AsyncStorage.getItem("@user");
            userJson = JSON.parse(user)
            setUserId(userJson.id);
        }
        catch (e) {
            Alert.alert(e.toString());
        }
    }

    async function verificaCampos(age) {
        if (Validacao.verificaIdade(age)) {
            Alert.alert("Digite uma idade valida");
            return;
        }

        else {
            await salva();
        }
    }

    async function salva() {
        var sex = sexNum === 0 ? false : true;
        var idade = parseInt(age)

        let objPet = {
            userId,
            name,
            age: idade,
            breed,
            sex,
            token
        };

        console.log(objPet)

        await api.post('/pets', objPet)
            .then((res) => {
                Alert.alert("Animal cadastrado com seucesso!");
                navigation.navigate('Menu')
                console.log(res)
            })
            .catch(error => console.log(error.response.data));
    }

    return (
        <View style={styles.containerMain}>

            <View style={styles.iconPet}>
                <PetImg />
            </View>

            <View style={stylesGeral.borderContainer}>
                <SafeAreaView style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor='#775B37'
                        onChangeText={(name) => setName(name)}
                        value={name} />
                    <TextInput
                        style={styles.input}
                        placeholder="Idade"
                        placeholderTextColor='#775B37'
                        onChangeText={(age) => setAge(age)}
                        value={age !== 0 ? age.toString() : null} />

                    <TextInput
                        style={styles.input}
                        placeholder="Raça"
                        placeholderTextColor='#775B37'
                        onChangeText={(breed) => setBreed(breed)}
                        value={breed} />

                    <RadioForm formHorizontal={true} animation={true} >
                        {
                            sexOptions.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i} >
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        isSelected={sexNum === i}
                                        onPress={(sex) => setSexNum(sex)}
                                        borderWidth={1}
                                        buttonInnerColor={'#775B37'}
                                        buttonOuterColor={sexNum === i ? '#775B37' : '#000'}
                                        buttonWrapStyle={{ marginLeft: 88 }}
                                    />
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelHorizontal={true}
                                        labelStyle={{ fontSize: 16, color: '#775B37' }}
                                    />
                                </RadioButton>
                            ))
                        }
                    </RadioForm>

                    <TextInput
                        style={styles.input}
                        placeholder="Coleira"
                        placeholderTextColor='#775B37'
                        onChangeText={(token) => setToken(token)}
                        value={token} />
                </SafeAreaView>


                <TouchableOpacity style={styles.btn} onPress={() => verificaCampos(age)}>
                    <Ionicons style={styles.btnIcon} name="ios-save-sharp" size={36} color="#fff" />
                    <Text style={styles.btnTxt}>Salvar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rodape}></View>
        </View>
    );
}