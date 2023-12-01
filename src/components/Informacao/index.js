import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import stylesGeral from "../styleGeral";
import Info from '../../../assets/svgImages/Info';

const informacoes = [
    {
        id: '1',
        name: 'Comprei a coleira para o meu cachorro. O que devo fazer agora?',
        descricao: `Você deve realizar o cadastro de seu pet. No campo "token" você deve colocar o numero de identificação que veio acompanhado da coleira. Agora é só acompanhar os dados do seu pet!`
    },
    {
        id: '2',
        name: 'Como sei aonde o meu cachorro está?',
        descricao: 'Acessando a tela do gps, você recebe os ultimos dados de localização do seu pet!'
    },
    {
        id: '3',
        name: 'Como sei se o meu cachorro está latindo muito?',
        descricao: 'Acessando a tela de monitoramento do som, você recebe os ultimos dados de contagem de latidos do seu pet!'
    },
    {
        id: '4',
        name: 'Como sei se o meu cachorro está com os níveis de atividade física adequados?',
        descricao: 'Acessando a tela de monitoramento de atividade, você recebe o status de atividade do seu pet!'
    },
];


const Informacao = () => {
    const [itemExpandido, setItemExpandido] = useState({});

    const abrirItem = (id) => {
        setItemExpandido((prevItemExpandido) => ({
            ...prevItemExpandido,
            [id]: !prevItemExpandido[id],
        }));
    };

    const itemsFAQ = ({ item }) => {

        const isItemExpandido = itemExpandido[item.id] || false;

        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity style={styles.btnPergunta} onPress={() => abrirItem(item.id)}>
                    <Text style={styles.perguntaTxt}>{item.name}</Text>
                    <MaterialIcons style={styles.iconPergunta} name="keyboard-arrow-down" size={40} color="#775B37" />
                </TouchableOpacity>
                <Collapsible collapsed={!isItemExpandido}>
                    <Text style={styles.descricao}>{item.descricao}</Text>
                </Collapsible>
            </View>
        );
    };

    return (
        <View style={styles.containerMain}>

            <View style={styles.iconPetBack}>
                <Info style={styles.iconPet} />
                <Text style={styles.iconPetTxt}>F A Q</Text>
            </View>

            <View style={stylesGeral.borderContainer}>

                <FlatList
                    style={styles.lista}
                    data={informacoes}
                    keyExtractor={item => item.id}
                    renderItem={itemsFAQ}
                />


            </View>
        </View>
    );
}

export default Informacao;