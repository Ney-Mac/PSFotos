import { 
    TouchableOpacity, 
    StyleSheet, 
    Image,
    View
} from 'react-native';
import { Text } from "react-native-paper";

export default function AlbunButton({ label, imgUri, onPress }) {
    return (
        <View style={{ margin: 8 }}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={imgUri} style={styles.img} />
            </TouchableOpacity>

            <Text variant='labelLarge' style={styles.text}>{label}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        overflow: 'hidden'
    },
    img: {
        height: 166,
        width: 182,
    },
    text: {
        width: '100%',
        color: '#777777',
        fontSize: 18,
        marginVertical: 8
    }
})