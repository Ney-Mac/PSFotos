import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";
import Icon from 'react-native-vector-icons/Feather';

const TabNavigation = createBottomTabNavigator();

const MainRoute = () => {
    return (
        <TabNavigation.Navigator
            initialRouteName="Home"
            tabBar={(props) => (<MyTabBar {...props} />)}
            sceneContainerStyle={{ 
                backgroundColor: '#fff'
            }}
            screenOptions={{
                headerShown: false
            }}
        >
            <TabNavigation.Screen
                name="Fotos"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="image"
                            size={24}
                            color={focused ? "#1C1C1E" : '#999999'}
                        />
                    )
                }}
            />

            <TabNavigation.Screen
                name="AlbumScreen"
                component={AlbumScreen}
                options={{
                    tabBarItemStyle: {
                        display: 'none'
                    }
                }}
            />
        </TabNavigation.Navigator>
    );
}

const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingVertical: 12,
                position: 'relative'
            }}
        >
            <View 
                style={{ 
                    width: '100%', 
                    height: 1, 
                    position: 'absolute', 
                    backgroundColor: '#E0E0E6', 
            }}></View>

            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                        ? options.title
                        : route.name;
                    //
                //
                const TabBarIcon = options.tabBarIcon;
                const isFocused = state.index === index;
                const style = options.tabBarItemStyle;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                }

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTesteID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...style
                        }}
                    >
                        {TabBarIcon && <TabBarIcon focused={isFocused} />}
                        <Text style={{ color: isFocused ? "#1C1C1E" : '#999999', fontSize: 16 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default MainRoute;