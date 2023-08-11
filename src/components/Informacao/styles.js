import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#FCBE6B',
    },
    iconPetBack: {
        height: vertical * 0.06,
        left: horizontal * 0.1,
        top: vertical * 0.08,
        flexDirection: 'row'
    },
    iconPetTxt: {
        color: '#fff',
        fontSize: 38,
        left: horizontal * 0.08,
        top: vertical * 0.01,
    },
    lista: {
        flex: 1,
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#FFF2E2',
        borderRadius: 40,
        elevation: 2,
        marginTop: 40,
        marginBottom: 2
    },
    btnPergunta: {
        height: vertical * .1,
        alignContent: 'center',
        justifyContent: "center",
    },
    perguntaTxt: {
        fontSize: 16,
        color: '#775B37',
        borderBottomWidth: 1,
        borderBottomColor: '#775B37',
    },
    iconPergunta: {
        position: 'absolute',
        left: horizontal * .3
    },
    descricao: {
        fontSize: 16,
        color: '#775B37',
        width: horizontal * 0.85,
        padding: 16,
        marginBottom: 24,
        fontFamily: 'sans-serif-light',
    },

});

export default styles