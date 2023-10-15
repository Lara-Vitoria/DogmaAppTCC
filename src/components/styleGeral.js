import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const stylesGeral = StyleSheet.create({
    container: {
        backgroundColor: '#775B37',
        position: 'relative',
    },
    opcoesGroup: {
        flexDirection: 'row',
        top: 48,
        marginLeft: 16
    },
    opcao: {
        flex: 1,
        marginRight: 32,
        borderRadius: 60,
        backgroundColor: '#FCBE6B',
        padding: 8,
        paddingLeft: 32,
        paddingRight: 32
    },
    opcaoTxt: {
        color: '#fff',
        textAlign: 'center'
    },
    borderContainer: {
        height: vertical,
        borderRadius: 60,
        backgroundColor: '#fff',
        top: 120,

        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: .4,
        shadowRadius: 2,

        alignItems: 'center',
        justifyContent: 'center'
    },
    borderContainerFooter: {
        height: vertical - 150,
        borderTopEndRadius: 60,
        borderTopStartRadius: 60,
        backgroundColor: '#fff',
        top: 140,

        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: .4,
        shadowRadius: 2,
    },
    borderContainerDados: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: '#FFF2E2',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: .4,
        shadowRadius: 2,
    },
    textDefault: {
        top: 240,
        fontSize: 40,
        color: '#775B37',
        fontFamily: 'sans-serif-light',
        textAlign: 'center'
    },
    textDefaultFooter: {
        color: '#775B37',
    }

});

export default stylesGeral