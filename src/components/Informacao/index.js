import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import stylesGeral from "../styleGeral";
import Info from '../../../assets/svgImages/Info';

const informacoes = [
    { id: '1', name: 'Item 1', descricao: 'Lorem ipsum dolor sit amet. Et perferendis laborum est dolorem quasi aut Quis consectetur. In aliquam praesentium est doloribus nostrum aut molestiae veniam quo magnam commodi quo eius sunt est blanditiis saepe!' },
    { id: '2', name: 'Item 2', descricao: 'Lorem ipsum dolor sit amet. Et perferendis laborum est dolorem quasi aut Quis consectetur. In aliquam praesentium est doloribus nostrum aut molestiae veniam quo magnam commodi quo eius sunt est blanditiis saepe!' },
    { id: '3', name: 'Item 3', descricao: 'Lorem ipsum dolor sit amet. Et perferendis laborum est dolorem quasi aut Quis consectetur. In aliquam praesentium est doloribus nostrum aut molestiae veniam quo magnam commodi quo eius sunt est blanditiis saepe!' },
    { id: '4', name: 'Item 4', descricao: 'Lorem ipsum dolor sit amet. Et perferendis laborum est dolorem quasi aut Quis consectetur. In aliquam praesentium est doloribus nostrum aut molestiae veniam quo magnam commodi quo eius sunt est blanditiis saepe!' },
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