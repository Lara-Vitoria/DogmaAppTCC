import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Circle } from "react-native-svg";
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import stylesGeral from "../styleGeral";
import PetImg from '../../../assets/svgImages/PetImg';
export default function CadastroPet({ navigation }) {
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
                        placeholderTextColor='#775B37' />
                    <TextInput
                        style={styles.input}
                        placeholder="Idade"
                        placeholderTextColor='#775B37' />

                    <TextInput
                        style={styles.input}
                        placeholder="Raça"
                        placeholderTextColor='#775B37' />

                    <TextInput
                        style={styles.input}
                        placeholder="Coleira"
                        placeholderTextColor='#775B37' />
                </SafeAreaView>


                <TouchableOpacity style={styles.btn}>
                    <Ionicons style={styles.btnIcon} name="ios-save-sharp" size={36} color="#fff" />
                    <Text style={styles.btnTxt}>Salvar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rodape}></View>
        </View>
    );
}