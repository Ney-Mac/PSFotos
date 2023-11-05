import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';

const AlbumScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <BackButton goBack={navigation.goBack} />
            <Text>ALBUM</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AlbumScreen;