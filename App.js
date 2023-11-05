import React from "react";
import { View, StyleSheet } from 'react-native';
import MainRoute from "./src/routes/MainRoute";
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from "react-native-paper";

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer style={styles.container}>
                <MainRoute />
            </NavigationContainer>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;