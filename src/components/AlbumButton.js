import { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
    Dimensions
} from 'react-native';
import { Text } from "react-native-paper";

export default function AlbunButton({ label, imgUri, onPress }) {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('screen').width);

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({ screen }) => {
                setScreenWidth(screen.width);
            }
        );

        return () => subscription?.remove();
    });

    return (
        <View style={{ margin: 8 }}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image
                    source={imgUri}
                    style={{
                        width: (screenWidth / 2) - 18,
                        height: (screenWidth / 2),
                    }}
                />
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
    text: {
        width: '100%',
        color: '#777777',
        fontSize: 18,
        marginVertical: 8
    }
})