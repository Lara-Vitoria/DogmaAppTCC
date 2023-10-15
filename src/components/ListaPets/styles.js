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
        height: vertical * .2,
        borderRadius: 20,
        bottom: vertical * 0.2,
        elevation: 2,
        flexDirection: 'row',
        marginBottom: 40
    },
    imgPet: {
        width: horizontal * .4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C1C1C1',
    },
    petTxt: {
        color: '#775B37',
        fontSize: 20,
        marginTop: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    opcao: {
        flex: 1,
        alignItems: 'center',
    },
    btnIcon: {
        marginTop: 16,
        marginBottom: 8
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