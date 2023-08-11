import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#FCBE6B',

    },
    username: {
        top: 70,
        textAlign: 'center',
        fontSize: 32,
        color: '#fff'
    },
    btn: {
        bottom: vertical * 0.15,
        backgroundColor: '#FFF2E2',
        height: vertical * 0.1,
        width: horizontal * .8,
        borderRadius: 60,
        elevation: 3,
        marginBottom: 48,
        justifyContent: 'center'
    },
    btnIcon: {
        top: 12,
        left: 32,
    },
    btnTxt: {
        fontFamily: 'sans-serif-light',
        color: '#775B37',
        bottom: 16,
        left: 72,
        textAlign: 'left',
        fontSize: 20
    }

});

export default styles