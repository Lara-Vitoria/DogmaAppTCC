import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#FFF2E2',
        alignItems: 'center',
    },
    inputGroup:{
        marginTop: 56
    },
    input: {
        backgroundColor: '#FFF',
        height: 48,
        width: 320,
        margin: 24,
        borderRadius: 90,
        padding: 16,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    btn: {
        backgroundColor: '#FFF2E2',
        position: 'absolute', 
        top: vertical * .78, 
        left: horizontal * 0.1,
        width: "80%",
        height: "6%",
        justifyContent: 'center',
        borderColor: '#FCBE6B',
        borderWidth: 1,
        borderRadius: 90,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    textBtn: {
        color: '#FCBE6B',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'sans-serif-light'
    },
});

export default styles