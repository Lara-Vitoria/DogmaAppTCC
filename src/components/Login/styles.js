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
        height: 60,
        width: 320,
        margin: 12,
        borderRadius: 90,
        padding: 20,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    small:{
        color: '#FCBE6B',
        fontSize: 12,
        left:horizontal*.24
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
    textGoup:{
        position: 'absolute', 
        top: vertical * .88, 
        alignItems: 'center',

    },
    textGoupAlign: {
        flexDirection: 'row',
    },
    text:{
        color: '#8B8B8B',
        fontFamily: 'sans-serif-light'
    },
    textDestaque:{
        color: '#FCBE6B',
        fontWeight: 'bold'
    }
});

export default styles