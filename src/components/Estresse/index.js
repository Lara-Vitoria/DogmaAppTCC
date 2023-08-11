import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from './styles';
import stylesGeral from "../styleGeral";

import EstresseSvgComponent from "../../../assets/svgImages/Estresse";
export default function Estresse({ navigation }) {

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

                <View style={styles.titulo}>
                    <Text style={styles.tituloTxt}> Seu cachorro está</Text>
                    <Text style={[styles.tituloTxt, styles.tituloDestaque]}>
                        estressado
                        <Text style={styles.tituloTxt}>?</Text>
                    </Text>

                </View>

                <View style={styles.resposta}>
                    <Text style={styles.respostaTxt}>Possivelmente não</Text>
                </View>

                <View style={styles.explicacao}>
                    <ScrollView>
                        <Text style={styles.explicacaoTxt}>
                            Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita
                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.img}>
                    <EstresseSvgComponent />
                </View>
            </View>
        </View>
    );
}