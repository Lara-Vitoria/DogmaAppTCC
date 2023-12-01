import { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView } from "react-native";

import PetHeader from '../../PetHeader';
import api from '../../../../service/api';

import styles from './styles';
import stylesGeral from "../../styleGeral";

import PlaySvgComponent from "../../../../assets/svgImages/Play";

export default function Atividade({ navigation }) {

    const [atividade, setAtividade] = useState([]);
    const [horario, setHorario] = useState([]);
    const [petId, setPetId] = useState('');


    function handlePetSelection(petId) {
        setPetId(petId);
        getDados(petId);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getDados(petId);

        }, 30000);

        return () => clearInterval(interval);
    }, [petId]);

    async function getDados(id) {
        try {
            const response = await api.get(`/collar/collar/${id}`);
            let token = response.data.token;

            if (!response.data) {
                Alert.alert('Pet não possui dados de atividade');
                return;
            }

            const dados = await api.get(`/acelerometer/collar/${token}`);
            setAtividade(dados.data);
            preparaDados();
        } catch (error) {
            console.log(error)
            Alert.alert('Erro ao obter a atividade do pet');
        }
    }

    function preparaDados() {
        const horarioFormat = atividade.map(item => {
            const data = new Date(item.created_at);

            const hora = data.getHours();
            const minuto = data.getMinutes();

            return `${hora}:${minuto}`
        });

        setHorario(horarioFormat)
    }

    useEffect(() => {
        preparaDados();
    }, [atividade]);

    return (
        <View style={stylesGeral.container}>

            <View style={stylesGeral.opcoesGroup}>
                <PetHeader onSelectPet={handlePetSelection} />
            </View>

            <View style={stylesGeral.borderContainerFooter}>
                {
                    petId && atividade.length > 0
                        ? (
                            <View style={stylesGeral.borderContainerFooter}>
                                <View style={styles.tabela}>

                                    <View style={styles.cabecalhoRow}>
                                        <View style={styles.cabecalho}>
                                            <Text style={styles.cabecalhoTexto}>Hora</Text>
                                        </View>
                                        <View style={[styles.cabecalho, { width: 200 }]}>
                                            <Text style={styles.cabecalhoTexto}>Status da atividade</Text>
                                        </View>
                                    </View>

                                    <ScrollView contentContainerStyle={[styles.scroll, { marginBottom: 20 }]}>
                                        {
                                            atividade.map((item, index) => (
                                                <View style={styles.dadosRow} key={index.toString()}>
                                                    <View style={styles.dados}>
                                                        <Text style={styles.dadosTexto}>{horario[index]}</Text>
                                                    </View>
                                                    <View style={[styles.dados, { width: 200 }]}>
                                                        <Text style={styles.dadosTexto}>{item.status}</Text>
                                                    </View>
                                                </View>

                                            ))
                                        }
                                    </ScrollView>
                                </View>
                            </View>
                        )
                        : <Text style={stylesGeral.textDefault}>Selecione um pet</Text>
                }
            </View>

            <View style={stylesGeral.borderContainerDados}>
                {
                    petId && atividade.length > 0
                        ? (<View style={styles.infoGroup}>
                            <View style={styles.infoBack}>
                                <Text style={styles.infoTxt}>Status atual</Text>
                                <Text style={styles.infoTxtNum}>
                                    {atividade[atividade.length - 1].status}
                                </Text>
                            </View>
                        </View>)
                        : <Text style={stylesGeral.textDefaultFooter}>Selecione um pet</Text>
                }
            </View>
        </View>
    );
}