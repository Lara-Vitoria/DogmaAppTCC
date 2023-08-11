import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { LineChart } from "react-native-chart-kit";

import CoracaoSvgComponent from '../../../../assets/svgImages/Coracao'

import styles from './styles';
import stylesGeral from "../../styleGeral";

export default function BPM({ navigation }) {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                data: [65, 80, 70, 50, 90, 75, 80],
            },
        ],
    };

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

                <View style={styles.coracaoImg}>
                    <CoracaoSvgComponent altura="290px" largura="290px" cor="#FFF2E2" />
                    <View style={styles.coracaoMedioImg}>
                        <CoracaoSvgComponent altura="200px" largura="200px" cor="#FFE9CD" style={styles.coracaoImg} />
                    </View>
                    <View style={styles.coracaoPequenoImg}>
                        <CoracaoSvgComponent altura="50px" largura="50px" cor="#EED7BB" />
                    </View>
                </View>

                <View style={styles.grafico}>
                    <LineChart
                        data={data}
                        width={390}
                        height={160}
                        withDots={false}
                        withInnerLines={false}
                        withOuterLines={false}
                        withShadow={false}
                        chartConfig={{
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(206, 155, 89, ${opacity})`,

                        }}
                    />
                </View>

            </View>

            <View style={stylesGeral.borderContainerDados}>
                <Text style={styles.infoTxtNum}>90</Text>
                <Text style={styles.infoTxt}>BPM</Text>
            </View>

        </View>
    );
}