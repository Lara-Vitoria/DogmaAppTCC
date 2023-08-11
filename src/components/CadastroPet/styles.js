import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#FCBE6B',
    },
    iconPet: {
        top: vertical * 0.09,
        left: horizontal * 0.38,
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    inputGroup: {
        bottom: vertical * 0.2
    },
    input: {
        backgroundColor: '#FFF2E2',
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
        bottom: vertical * 0.15,
        backgroundColor: '#FCBE6B',
        height: vertical * 0.1,
        width: horizontal * .5,
        borderRadius: 60,
        elevation: 3,
    },
    btnIcon: {
        top: 20,
        left: 32,
    },
    btnTxt: {
        color: '#fff',
        fontSize: 28,
        bottom: 20,
        left: 80,
    },
    rodape: {
        position: 'absolute',
        backgroundColor: '#FFF2E2',
        top: vertical * .98,
        width: horizontal,
        height: 50
    }
});

export default styles