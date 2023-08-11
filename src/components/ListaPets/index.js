import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';

import PetImgSvgComponent from '../../../assets/svgImages/PetImg';
import styles from './styles';
import stylesGeral from "../styleGeral";
function Pet() {
    return (
        <View style={stylesGeral.borderContainer}>

            <View style={styles.backPet}>

                <View style={styles.imgPet}>
                    <PetImgSvgComponent />
                </View>

                <View style={styles.infoPet}>
                    <Text style={styles.petTxt}>Rocky</Text>

                    <Foundation style={styles.btnIcon} name="pencil" size={40} color="#775B37" />

                    <Ionicons style={styles.btnIcon} name="trash" size={40} color="#775B37" />
                </View>
            </View>
        </View>
    );

}
export default function ListaPets({ navigation }) {
    return (
        <View style={styles.containerMain}>

            <View>
                <Text style={styles.username}>Usuario</Text>
            </View>

            <Pet />

            <View style={styles.rodape}></View>
        </View>
    );
}