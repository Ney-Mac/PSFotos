import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-paper';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <BackButton goBack={() => { navigation.goBack() }} />
            <View style={styles.cirlce}>
                <Text variant='headlineMedium' style={{ color: '#fff' }}>PSFotos</Text>
            </View>
            <Text style={styles.title} variant='headlineMedium'>
                Criar Conta
            </Text>


            <View style={{ paddingBottom: 24, width: '100%', paddingHorizontal: 32, gap: 24 }}>
                <TextInput
                    label='Nome'
                    placeholder="Nome de Usuário"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    label='Senha'
                    placeholder="********"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />

                <Button onPress={() => { navigation.navigate('MainRoute', { screen: 'Fotos' }) }}>
                    Registar-se
                </Button>

                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 4 }}>
                    <Text style={{ color: '#777777' }} variant='bodyMedium'>
                        Já tem uma conta?
                    </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={{ fontWeight: 'bold' }}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cirlce: {
        width: 152,
        height: 152,
        backgroundColor: '#1C1C1E',
        borderRadius: 100,
        marginVertical: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 8
    }
});

export default RegisterScreen;