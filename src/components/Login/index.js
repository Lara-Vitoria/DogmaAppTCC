import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import Title from '../Title';
import { ColeiraSvgComponent } from '../../../assets/svgImages';

import styles from './styles';
export default function Login({ navigation }) {
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
                    placeholder="Senha"
                    placeholderTextColor='#FCBE6B' />
            </SafeAreaView>

            <Text style={styles.small}>
                Esqueceu a senha?
            </Text>

            <ColeiraSvgComponent />

            <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.textBtn}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <View style={styles.textGoup}>
                <Text style={styles.text}>
                    Não possui cadastro?
                </Text>

                <View style={styles.textGoupAlign}>
                    <Text style={styles.textDestaque} onPress={() => navigation.navigate('Cadastro')}>
                        Clique aqui
                    </Text>
                    <Text style={styles.text}>
                           para se cadastrar
                    </Text>
                </View>

            </View>
        </View>
    );
}