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
    }
});

export default styles