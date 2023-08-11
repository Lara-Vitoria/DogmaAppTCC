import { Text, View } from 'react-native';

import styles from './styles';
export default function Title() {
    return (
        <View style={styles.containerMain}>
            <View >
                <Text style={styles.title}>
                    Dogma
                </Text>
                <Text style={styles.subtitle}>
                    O melhor para seu melhor amigo
                </Text>
            </View>
        </View>
    );
}
