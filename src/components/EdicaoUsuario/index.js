import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import stylesGeral from "../styleGeral";

export default function EdicaoUsuario({ navigation }) {
    return (
        <View style={styles.containerMain}>

            <View>
                <Text style={styles.username}>Usuario</Text>
            </View>

            <View style={stylesGeral.borderContainer}>
                <SafeAreaView style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario"
                        placeholderTextColor='#775B37' />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='#775B37' />

                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        placeholderTextColor='#775B37' />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar senha"
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