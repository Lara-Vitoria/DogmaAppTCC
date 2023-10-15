import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LineChart } from "react-native-chart-kit";

import PetHeader from '../../PetHeader';
import api from '../../../../service/api';

import styles from './styles';
import stylesGeral from "../../styleGeral";

export default function Som({ navigation }) {

    const [bpm, setBpm] = useState('');
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
        await api.get(`/heart-rate/user/${id}`)
            .then((res) => {
                console.log(res)
            })
            .catch(error => console.log(error.response.data));
    }

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                data: [65, 80, 70, 50, 90, 75, 80],
            },
        ],
    };

    return (
        <View style={stylesGeral.container}>

            <View style={stylesGeral.opcoesGroup}>
                <PetHeader onSelectPet={handlePetSelection} />
            </View>

            {
                petId
                    ? (
                        <View style={stylesGeral.borderContainerFooter}>
                            <View style={styles.grafico}>
                                <LineChart
                                    data={data}
                                    width={390}
                                    height={480}
                                    withDots={false}
                                    withOuterLines={false}
                                    withShadow={false}
                                    chartConfig={{
                                        backgroundGradientFrom: '#fff',
                                        backgroundGradientTo: '#fff',
                                        decimalPlaces: 0,
                                        color: () => `rgba(119, 91, 55, 1)`,
                                        labelColor: (opacity = 1) => `rgba(206, 155, 89, ${opacity})`,

                                    }}
                                    bezier
                                />
                            </View>
                        </View>
                    )
                    :
                    (
                        <View style={stylesGeral.borderContainerFooter}>
                            <Text style={stylesGeral.textDefault}>Selecione um pet</Text>
                        </View>
                    )
            }

            {
                petId
                    ? (
                        <View style={stylesGeral.borderContainerDados}>
                            <View style={styles.infoGroup}>
                                <View style={styles.infoBack}>
                                    <Text style={styles.infoTxt}>Max</Text>
                                    <Text style={styles.infoTxtNum}>99</Text>
                                </View>

                                <View style={styles.infoBack}>
                                    <Text style={styles.infoTxt}>Min</Text>
                                    <Text style={styles.infoTxtNum}>99</Text>
                                </View>

                                <View style={styles.infoBack}>
                                    <Text style={styles.infoTxt}>Média</Text>
                                    <Text style={styles.infoTxtNum}>99</Text>
                                </View>

                            </View>

                        </View>
                    )
                    :
                    (
                        <View style={stylesGeral.borderContainerDados}>
                            <Text style={stylesGeral.textDefaultFooter}>Selecione um pet</Text>
                        </View>
                    )
            }
        </View>
    );
}