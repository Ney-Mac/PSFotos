import { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import LoginScreen from '../screens/LoginScreen';
import RegistoScreen from "../screens/RegistoScreen";
import MainRoute from "./MainRoute";

const Stack = createNativeStackNavigator();

const GeralRoute = () => {
    const [isLog, setIsLog] = useState(false);

    return (
        <Stack.Navigator
            initialRouteName={isLog ? 'MainRoute' : 'Start'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="MainRoute"
                component={MainRoute}
            />

            <Stack.Screen
                name="Start"
                component={StartScreen}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />

            <Stack.Screen
                name="Register"
                component={RegistoScreen}
            />
        </Stack.Navigator>
    )
}

export default GeralRoute;