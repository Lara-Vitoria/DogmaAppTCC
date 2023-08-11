import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    titulo: {
        alignItems: 'center',
        top: vertical * 0.05
    },
    tituloTxt: {
        color: '#775B37',
        fontSize: 30,
        fontFamily: 'sans-serif-light'
    },
    tituloDestaque: {
        fontWeight: 'bold'
    },
    resposta: {
        alignItems: 'center',
        marginTop: vertical * 0.08
    },
    respostaTxt: {
        color: '#FCBE6B',
        fontSize: 30,
        fontWeight: 'bold'
    },
    explicacao: {
        alignSelf: 'center',
        width: horizontal * 0.8,
        height: vertical * 0.36,
        marginTop: vertical * 0.04
    },
    explicacaoTxt: {
        textAlign: 'center',
        color: '#775B37',
        fontSize: 18,
        fontFamily: 'sans-serif-light'
    },
    img: {
        position: 'relative',
        bottom: vertical * 0.14,
        left: horizontal * 0.05
    }

});

export default styles