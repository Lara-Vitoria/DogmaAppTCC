import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import stylesGeral from "../styleGeral";
export default function Configuracao({ navigation }) {
    return (
        <View style={styles.containerMain}>

            <View>
                <Text style={styles.username}>Usuario</Text>
            </View>

            <View style={stylesGeral.borderContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EdicaoUsuario')} >
                    <Ionicons name="newspaper-outline" style={styles.btnIcon} color="#775B37" size={24} />
                    <Text style={styles.btnTxt}>Meus dados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ListaPets')}>
                    <Ionicons style={styles.btnIcon} name="paw" size={24} color="#775B37" />
                    <Text style={styles.btnTxt}>Pets</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}