import { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView, } from "react-native";
import { LineChart } from "react-native-chart-kit";

import PetHeader from '../../PetHeader';
import api from '../../../../service/api';

import styles from './styles';
import stylesGeral from "../../styleGeral";

export default function Som({ navigation }) {

    const [som, setSom] = useState([]);
    const [petId, setPetId] = useState('');
    const [media, setMedia] = useState(0);
    const [valorMinimo, setValorMinimo] = useState(0);
    const [valorMaximo, setValorMaximo] = useState(0);
    const [latidos, setLatidos] = useState(0);

    function handlePetSelection(petId) {
        setPetId(petId);
        getDados(petId);
        calculaDados();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (petId) getDados(petId);
        }, 30000);

        return () => clearInterval(interval);

    }, [petId]);

    async function getDados(id) {
        try {
            const response = await api.get(`/collar/collar/${id}`);
            let token = response.data.token;

            if (!response.data) {
                Alert.alert('Pet não possui dados de som');
                return;
            }

            const dados = await api.get(`/sound/collar/${token}`);
            setSom(dados.data);
            preparaDados();
        } catch (error) {
            console.log(error)
            Alert.alert('Erro ao obter dados de som do pet');
        }
    }

    useEffect(() => {
        preparaDados();
        calculaDados();
    }, [som]);

    function calculaDados() {
        const values = Object.values(latidos);
        const mediaAcc = (values.reduce((acc, curr) => acc + curr, 0) / values.length).toFixed(2);
        const min = Math.min(...values);
        const max = Math.max(...values);

        setMedia(mediaAcc);
        setValorMinimo(min);
        setValorMaximo(max);

    }

    function preparaDados() {
        const horas = som.map(item => new Date(item.created_at).getHours());
        const latidosPorHora = horas.reduce((acc, curr) => {
            if (acc[curr]) acc[curr]++;
            else acc[curr] = 1;

            return acc;
        }, {});

        setLatidos(latidosPorHora)
    }

    const data = {
        labels: Object.keys(latidos),
        datasets: [{
            data: Object.values(latidos),
        }],
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
                                    <Text style={styles.infoTxtNum}>{valorMaximo}</Text>
                                </View>

                                <View style={styles.infoBack}>
                                    <Text style={styles.infoTxt}>Min</Text>
                                    <Text style={styles.infoTxtNum}>{valorMinimo}</Text>
                                </View>

                                <View style={styles.infoBack}>
                                    <Text style={styles.infoTxt}>Média</Text>
                                    <Text style={styles.infoTxtNum}>{media}</Text>
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