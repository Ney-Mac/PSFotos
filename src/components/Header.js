import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Text, IconButton } from 'react-native-paper';

export default function Header({ showButton, text }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold' }} variant='headlineMedium'>{text}</Text>
            {showButton && <TouchableOpacity>
                <IconButton
                    size={24}
                    iconColor='#fff'
                    icon='plus'
                    mode='outlined'
                    containerColor='#202020'
                    onPress={() => { console.log('Pressed') }}
                />
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
    }
})