import React from "react";
import GeralRoute from "./src/routes/GeralRoute";
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from "react-native-paper";

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer style={{ flex: 1 }}>
                <GeralRoute />
            </NavigationContainer>
        </PaperProvider>
    )
}

export default App;