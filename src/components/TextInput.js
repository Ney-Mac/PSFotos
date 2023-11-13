import {
    StyleSheet,
    View
} from 'react-native';
import { Text, TextInput as Input } from 'react-native-paper';

export default function TextInput({ label, errorText, ...props }) {
    return (
        <View style={{ gap: 8 }}>
            <Text variant='headlineSmall' style={styles.label} >{label}</Text>
            <Input
                style={styles.input}
                mode="outlined"
                {...props}
            />
            {errorText && <Text variant='labelLarge' style={styles.errorText}>{errorText}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: '#777777',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    errorText: {
        color: '#dc242c'
    }
});