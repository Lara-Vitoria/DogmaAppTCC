import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    petPosition: {
        bottom: 16,
        flexDirection: 'row',
        height: 40,
        right: 60,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    ownPosition: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    positionTxt: {
        color: '#775B37',
        fontFamily: 'sans-serif-light',
        textAlign: 'center'
    },
    mapa: {
        top: 40,
        left: 32,
        width: '83%',
        height: '70%',
    },

});

export default styles