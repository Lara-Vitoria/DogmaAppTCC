import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    circulo: {
        fill: "none",
        stroke: "#775B37",
        strokeWidth: 0.3,
    },
    circuloPosicao: {
        bottom: vertical * .15,
        position: 'absolute',
    },
    txt: {
        position: 'relative',
        top: vertical * 0.18,
        alignItems: 'center',
    },
    txtDistancia: {
        fontSize: 70,
        textAlign: 'center',
        color: '#775B37'
    },
    txtKM: {
        fontSize: 15,
        color: '#CE9B59',
        marginTop: -10
    },
    txtTempo: {
        fontSize: 30,
        color: '#775B37',
        marginTop: 30
    },
    btn: {
        top: vertical * .28,
        left: horizontal * 0.39
    },
    infoGroup: {
        flexDirection: 'row',
        right: horizontal * .05
    },
    infoBack: {
        backgroundColor: '#CE9B59',
        justifyContent: 'center',
        width: horizontal * .6,
        height: 80,
        borderRadius: 20,
        marginLeft: 40,
    },
    infoTxtNum: {
        fontFamily: 'sans-serif-light',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },
    infoTxt: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    scroll: {
        minHeight: vertical * 3,
    },
    tabela: {
        bottom: 90,
        left: 40
    },
    cabecalho: {
        height: 60,
        width: horizontal * .25,
        backgroundColor: '#775b37',
        borderRadius: 20,
        marginRight: 24
    },
    cabecalhoRow: {
        flexDirection: 'row'
    },
    dadosRow: {
        flexDirection: 'row'
    },
    cabecalhoTexto: {
        textAlign: 'center',
        margin: 6,
        color: '#fff',
        marginTop: 18
    },
    dados: {
        left: 2,
        height: 48,
        width: horizontal * .25,
        marginRight: 24,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 32,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dadosTexto: {
        color: '#775b37',
        textAlign: 'center',
        marginTop: 12
    }

});

export default styles