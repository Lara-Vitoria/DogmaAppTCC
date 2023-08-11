import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    PermissionsAndroid
} from "react-native";
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import Svg, { Circle } from "react-native-svg";

import MiniColeiraSvgComponent from "../../../../assets/svgImages/MiniColeira";

import styles from './styles';
import stylesGeral from "../../styleGeral";

export default function GPS({ navigation }) {

    const latitude = -23.550520; // Latitude da localização desejada
    const longitude = -46.633308; // Longitude da localização desejada

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
                <MapView style={styles.mapa} />
            </View>


            <View style={stylesGeral.borderContainerDados}>
                <View style={styles.petPosition}>
                    <MiniColeiraSvgComponent />
                    <Text style={[styles.positionTxt, { marginRight: -20 }]}>Informações sobre a posição do pet</Text>
                </View>

                <View style={styles.ownPosition}>
                    <Svg height="20" width="20" style={{ marginRight: 20 }}>
                        <Circle cx="10" cy="10" r="10" fill="#8AC6DD" />
                    </Svg>
                    <Text style={[styles.positionTxt]}>Informações sobre a posição do dono</Text>
                </View>



            </View>

        </View>
    );
}