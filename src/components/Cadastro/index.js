import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import Title from '../Title';
import styles from './styles';

export default function Cadastro({ navigation }) {
    return (
        <View style={styles.containerMain}>
            <Title />

            <SafeAreaView style={styles.inputGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    placeholderTextColor='#FCBE6B' />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='#FCBE6B' />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor='#FCBE6B' />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    placeholderTextColor='#FCBE6B' />
            </SafeAreaView>


            <TouchableOpacity style={styles.btn} 
            onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.textBtn}>
                    Entrar
                </Text>
            </TouchableOpacity>

        </View>
    );
}