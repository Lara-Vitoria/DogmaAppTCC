import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import Svg, { Circle } from "react-native-svg";

import styles from './styles';
import stylesGeral from "../../styleGeral";

import PlaySvgComponent from "../../../../assets/svgImages/Play";

export default function Atividade({ navigation }) {

    return (
        <View style={stylesGeral.container}>

            <View style={stylesGeral.opcoesGroup}>
                <ScrollView
                    horizontal={true}>

                    <TouchableOpacity style={stylesGeral.opcao}>
                        <Text style={stylesGeral.opcaoTxt}>Dog 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesGeral.opcao}>
                        <Text style={stylesGeral.opcaoTxt}>Dog 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesGeral.opcao}>
                        <Text style={stylesGeral.opcaoTxt}>Dog 3</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>

            <View style={stylesGeral.borderContainerFooter}>
                <Svg viewBox="0 0 32 32" style={styles.circuloPosicao}>
                    <Circle style={styles.circulo}
                        cx={16} cy={16} r={13} />
                </Svg>

                <View style={styles.txt}>
                    <Text style={styles.txtDistancia}>
                        0,90
                    </Text>

                    <Text style={styles.txtKM}>
                        KM
                    </Text>

                    <Text style={styles.txtTempo}>
                        10 min
                    </Text>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity>
                        <PlaySvgComponent />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={stylesGeral.borderContainerDados}>
                <View style={styles.infoGroup}>
                    <View style={styles.infoBack}>
                        <Text style={styles.infoTxt}>Hoje</Text>
                        <Text style={styles.infoTxtNum}>51:35 min</Text>
                    </View>

                    <View style={styles.infoBack}>
                        <Text style={styles.infoTxt}>Semana</Text>
                        <Text style={styles.infoTxtNum}>51:35 min</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}