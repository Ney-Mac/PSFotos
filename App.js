import React from "react";
import { View, StyleSheet } from 'react-native';
import MainRoute from "./src/routes/MainRoute";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer style={styles.container}>
            <MainRoute />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;