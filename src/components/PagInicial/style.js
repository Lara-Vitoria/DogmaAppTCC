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
    imgHome: {
        position: 'absolute',
        top: vertical * .7,
    },
    text: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'sans-serif-light'
    },
    btn: {
        backgroundColor: '#FCBE6B',
        position: 'absolute',
        top: vertical * .7,
        left: horizontal * 0.1,
        width: "80%",
        height: "12%",
        justifyContent: 'center',
        borderRadius: 90,
    },
});

export default styles