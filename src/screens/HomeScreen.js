import { View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import AlbunButton from '../components/AlbumButton';
import { Text, IconButton } from 'react-native-paper';

import img1 from '../assets/mac.jpg';
import imgIsptec from '../assets/isptec.jpeg';
import imgAmigos from '../assets/amigos.jpeg';

const data = [
    { key: 0, src: img1, label: 'Todas as fotos' },
    { key: 1, src: imgIsptec, label: 'ISPTEC' },
    { key: 2, src: imgAmigos, label: 'Amigos' }
]

const HomeScreen = ({ navigation }) => {
    const onAlbumPress = () => {
        navigation.navigate('AlbumScreen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{ fontWeight: 'bold' }} variant='headlineMedium'>Albuns</Text>
                <TouchableOpacity>
                    <IconButton
                        size={24}
                        iconColor='#fff'
                        icon='plus'
                        mode='outlined'
                        containerColor='#202020'
                        onPress={() => { console.log('Pressed') }}
                    />
                </TouchableOpacity>
            </View>

            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <AlbunButton
                            label={item.label}
                            imgUri={item.src}
                            onPress={onAlbumPress}
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
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
    }
});

export default HomeScreen;