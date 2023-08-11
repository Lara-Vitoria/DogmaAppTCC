import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const horizontal = Dimensions.get('window').width;
const vertical = Dimensions.get('window').height;

const styles = StyleSheet.create({
    coracaoImg: {
        top: 16,
        left: 60
    },
    coracaoMedioImg: {
        bottom: 245,
        left: 45
    },
    coracaoPequenoImg: {
        bottom: 370,
        left: 120
    },
    grafico: {
        position: 'absolute',
        top: 320,
    },
    infoTxtNum: {
        color: '#775B37',
        fontSize: 50
    },
    infoTxt: {
        color: '#CE9B59',
        letterSpacing: 3
    }

});

export default styles