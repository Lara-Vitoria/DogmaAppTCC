import { View, Text, TouchableOpacity, ScrollView, } from "react-native";
import { LineChart } from "react-native-chart-kit";

import styles from './styles';
import stylesGeral from "../../styleGeral";

export default function Som({ navigation }) {

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
                <View style={styles.grafico}>
                    <LineChart
                        data={data}
                        width={390}
                        height={480}
                        withDots={false}
                        withOuterLines={false}
                        withShadow={false}
                        chartConfig={{
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            decimalPlaces: 0,
                            color: () => `rgba(119, 91, 55, 1)`,
                            labelColor: (opacity = 1) => `rgba(206, 155, 89, ${opacity})`,

                        }}
                        bezier
                    />
                </View>
            </View>

            <View style={stylesGeral.borderContainerDados}>
                <View style={styles.infoGroup}>
                    <View style={styles.infoBack}>
                        <Text style={styles.infoTxt}>Max</Text>
                        <Text style={styles.infoTxtNum}>99</Text>
                    </View>

                    <View style={styles.infoBack}>
                        <Text style={styles.infoTxt}>Min</Text>
                        <Text style={styles.infoTxtNum}>99</Text>
                    </View>

                    <View style={styles.infoBack}>
                        <Text style={styles.infoTxt}>Média</Text>
                        <Text style={styles.infoTxtNum}>99</Text>
                    </View>

                </View>

            </View>

        </View>
    );
}