import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCBE6B',
    },
    header: {
        position: 'absolute',
        height: vertical * 0.4,
        width: horizontal,
        top: 0,
        backgroundColor: '#FCBE6B',
    },
    username: {
        top: 60,
        textAlign: 'center',
        fontSize: 32,
        color: '#fff'
    },
    btnGroup: {
        top: -90,
        justifyContent: 'space-between',
    },
    btnSensor: {
        backgroundColor: '#FFF2E2',
        marginHorizontal: 12,
        top: 32,
        marginBottom: 56,
        borderRadius: 50,
        width: 160,
        height: 140,
    },
    btnSensorText: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#775B37',
        fontFamily: 'sans-serif-light',
        marginTop: -36
    },
    btn: {
        backgroundColor: '#775B37',
        width: "88%",
        height: "34%",
        top: 80,
        padding: 16,
        alignSelf: 'center',
        borderRadius: 90,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'sans-serif-light'
    },
    navBar: {
        top: vertical * 0.96,
    }
});

export default styles