import { 
    View, 
    StyleSheet,
    SafeAreaView,
    FlatList
} from 'react-native';
import Header from '../components/Header';
import PhotoButton from '../components/PhotoButton';
import { useRoute } from '@react-navigation/native';

import img1 from '../assets/mac.jpg';
import imgIsptec from '../assets/isptec.jpeg';
import imgAmigos from '../assets/amigos.jpeg';
import barbaBrancaImg from '../assets/barbabranca.jpeg';
import kaidoImg from '../assets/kaido.jpeg';
import narutoImg from '../assets/naruto.jpeg';
import onePieceImg from '../assets/onepiece.jpeg';
import painImg from '../assets/pain.jpeg';
import rogerImg from '../assets/roger.jpeg';

const data = [
    { key: 0, src: img1 },
    { key: 1, src: imgIsptec },
    { key: 2, src: imgAmigos },
    { key: 3, src: barbaBrancaImg },
    { key: 4, src: kaidoImg },
    { key: 5, src: narutoImg },
    { key: 6, src: onePieceImg },
    { key: 7, src: painImg },
    { key: 8, src: rogerImg },
    { key: 9, src: img1 },
    { key: 10, src: imgIsptec },
    { key: 11, src: imgAmigos },
    { key: 12, src: rogerImg },
    { key: 13, src: narutoImg },
    { key: 14, src: imgAmigos },
    { key: 15, src: onePieceImg },
    { key: 16, src: imgIsptec },
    { key: 17, src: barbaBrancaImg },
];

const AlbumScreen = ({ navigation }) => {
    const route = useRoute();
    const { albumTitle } = route?.params;

    return (
        <View style={styles.container}>
            <Header text={albumTitle} showButton={true} />

            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <PhotoButton source={item.src} />
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AlbumScreen;