import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";

const TabNavigation = createBottomTabNavigator();

const MainRoute = () => {

    return (
        <TabNavigation.Navigator
            initialRouteName="Home"
        >
            <TabNavigation.Screen
                name="Home"
                component={HomeScreen}
            />

            <TabNavigation.Screen
                name="Albuns"
                component={AlbumScreen}
                options={{
                    tabBarItemStyle: {
                        display: 'none',
                    }
                }}
            /> 
        </TabNavigation.Navigator>
    );
}

export default MainRoute;