import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Svg, { Circle } from "react-native-svg";

import PetHeader from '../../PetHeader';
import api from '../../../../service/api';

import styles from './styles';
import stylesGeral from "../../styleGeral";

import PlaySvgComponent from "../../../../assets/svgImages/Play";

export default function Atividade({ navigation }) {

    const [atividade, setAtividade] = useState(0);
    const [id, setId] = useState('');
    const [petId, setPetId] = useState('');

    function handlePetSelection(petId) {
        setPetId(petId);
    }

    useEffect(
        () => {
            //getDados();
        }, []
    );

    async function getDados() {
        await api.get(`/acelerometer/user/${id}`)
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error.response.data));
    }

    return (
        <View style={stylesGeral.container}>

            <View style={stylesGeral.opcoesGroup}>
                <PetHeader onSelectPet={handlePetSelection} />
            </View>

            <View style={stylesGeral.borderContainerFooter}>
                {
                    petId
                        ? (<View style={stylesGeral.borderContainerFooter}>
                            <Svg viewBox="0 0 32 32" style={styles.circuloPosicao}>
                                <Circle style={styles.circulo}
                                    cx={16} cy={16} r={13} />
                            </Svg>

                            <View style={styles.txt}>
                                <Text style={styles.txtDistancia}>
                                    0,90
                                </Text>

                                <Text style={styles.txtKM}>
                                    KM
                                </Text>

                                <Text style={styles.txtTempo}>
                                    10 min
                                </Text>
                            </View>

                            <View style={styles.btn}>
                                <TouchableOpacity>
                                    <PlaySvgComponent />
                                </TouchableOpacity>
                            </View>

                        </View>)
                        : <Text style={stylesGeral.textDefault}>Selecione um pet</Text>
                }
            </View>

            <View style={stylesGeral.borderContainerDados}>
                {
                    petId
                        ? (<View style={styles.infoGroup}>
                            <View style={styles.infoBack}>
                                <Text style={styles.infoTxt}>Hoje</Text>
                                <Text style={styles.infoTxtNum}>51:35 min</Text>
                            </View>

                            <View style={styles.infoBack}>
                                <Text style={styles.infoTxt}>Semana</Text>
                                <Text style={styles.infoTxtNum}>51:35 min</Text>
                            </View>
                        </View>)
                        : <Text style={stylesGeral.textDefaultFooter}>Selecione um pet</Text>
                }
            </View>
        </View>
    );
}