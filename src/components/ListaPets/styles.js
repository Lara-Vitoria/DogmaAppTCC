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
    backPet: {
        backgroundColor: '#FFF2E2',
        width: horizontal * .8,
        height: vertical * .25,
        borderRadius: 20,
        bottom: vertical * 0.3,
        elevation: 2,
        flexDirection: 'row',
    },
    imgPet: {
        width: horizontal * .4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C1C1C1',
    },
    infoPet: {
        width: horizontal * .4,
        alignItems: 'center'
    },
    petTxt: {
        color: '#775B37',
        fontSize: 28,
        marginTop: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnIcon: {
        marginTop: 16,
        marginBottom: 16
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