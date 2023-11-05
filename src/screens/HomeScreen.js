import {
    View,
    StyleSheet,
    FlatList,
    SafeAreaView,
} from 'react-native';
import AlbunButton from '../components/AlbumButton';
import Header from '../components/Header';

import img1 from '../assets/mac.jpg';
import imgIsptec from '../assets/isptec.jpeg';
import imgAmigos from '../assets/amigos.jpeg';

const data = [
    { key: 0, src: img1, label: 'Todas as fotos' },
    { key: 1, src: imgIsptec, label: 'ISPTEC' },
    { key: 2, src: imgAmigos, label: 'Amigos' }
]

const HomeScreen = ({ navigation }) => {
    const onAlbumPress = (albumTitle) => {
        navigation.navigate('AlbumScreen', { albumTitle });
    }

    return (
        <View style={styles.container}>
            <Header text="Albuns" showButton={true} />

            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <AlbunButton
                            label={item.label}
                            imgUri={item.src}
                            onPress={() => { onAlbumPress(item.label) }}
                        />
                    )}
                    keyExtractor={item => item.key}
                />
            </SafeAreaView>

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

export default HomeScreen;