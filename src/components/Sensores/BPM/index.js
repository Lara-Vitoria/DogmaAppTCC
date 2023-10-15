import { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LineChart } from "react-native-chart-kit";

import api from '../../../../service/api';
import PetHeader from '../../PetHeader';

import CoracaoSvgComponent from '../../../../assets/svgImages/Coracao'

import styles from './styles';
import stylesGeral from "../../styleGeral";

export default function BPM({ navigation }) {

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
                    ? (<View style={stylesGeral.borderContainerFooter}>

                        <View style={styles.coracaoImg}>
                            <CoracaoSvgComponent altura="290px" largura="290px" cor="#FFF2E2" />
                            <View style={styles.coracaoMedioImg}>
                                <CoracaoSvgComponent altura="200px" largura="200px" cor="#FFE9CD" style={styles.coracaoImg} />
                            </View>
                            <View style={styles.coracaoPequenoImg}>
                                <CoracaoSvgComponent altura="50px" largura="50px" cor="#EED7BB" />
                            </View>
                        </View>

                        <View style={styles.grafico}>
                            <LineChart
                                data={data}
                                width={390}
                                height={160}
                                withDots={false}
                                withInnerLines={false}
                                withOuterLines={false}
                                withShadow={false}
                                chartConfig={{
                                    backgroundGradientFrom: '#fff',
                                    backgroundGradientTo: '#fff',
                                    decimalPlaces: 0,
                                    color: (opacity = 1) => `rgba(206, 155, 89, ${opacity})`,

                                }}
                            />
                        </View>

                    </View>)
                    :
                    (<View style={stylesGeral.borderContainerFooter}>
                        <Text style={stylesGeral.textDefault}>Selecione um pet</Text>
                    </View>)
            }

            {
                petId
                    ? (<View style={stylesGeral.borderContainerDados}>
                        <Text style={styles.infoTxtNum}>90</Text>
                        <Text style={styles.infoTxt}>BPM</Text>
                    </View>)
                    :
                    (<View style={stylesGeral.borderContainerDados}>
                        <Text style={stylesGeral.textDefaultFooter}>Selecione um pet</Text>
                    </View>)
            }
        </View>
    );
}