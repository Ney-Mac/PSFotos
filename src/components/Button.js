import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export default function Button({ children, mode = 'contained', onPress }) {
    return (
        <TouchableOpacity style={styles[mode]} onPress={onPress}>
            <Text style={{ color: (mode === 'contained') ? '#fff' : '#000' }}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contained: {
        marginTop: 24,
        height: 56,
        width: '100%',
        backgroundColor: "#1C1C1E",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    outlined: {
        marginTop: 12,
        height: 56,
        width: '100%',
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});