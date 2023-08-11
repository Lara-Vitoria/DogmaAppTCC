import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    grafico: {
        top: vertical * .1,
    },
    infoGroup: {
        flexDirection: 'row',
        right: horizontal * .05
    },
    infoBack: {
        backgroundColor: '#CE9B59',
        justifyContent: 'center',
        width: 90,
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
    }

});

export default styles