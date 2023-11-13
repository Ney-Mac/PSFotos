import * as React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image 
} from 'react-native';
import 'react-native-gesture-handler';
import Button from '../components/Button';
import welcomeImg from '../assets/welcome.png'

export default function StartScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image style={styles.imgBemVindo} source={welcomeImg} />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <View>
                    <Text style={styles.title}>Bem-Vindo ao PSFotos</Text>
                    <Text style={styles.subtitle}>Armazene, organize e compartilhe suas fotos de forma simples e segura.</Text>
                </View>
                <View>
                    <Button onPress={() => { navigation.navigate('Login') }}>Entrar</Button>
                    <Button mode="outlined" onPress={() => { navigation.navigate('Register') }}>Registar-se</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 48,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: "#1C1C1E",
    },
    subtitle: {
        fontSize: 18,
        color: "#777777",
        textAlign: 'center'
    },
    imgBemVindo: {
        width: '100%',
        height: '100%',
        paddingRight: 100
    }
});

