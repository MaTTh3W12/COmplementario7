import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Perros') {
                        iconName = focused ? 'dog' : 'dog';
                    } else if (route.name === 'Gatos') {
                        iconName = focused ? 'cat' : 'cat';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Perros" component={Home} />
            <Tab.Screen name="Gatos" component={Contact}/>
        </Tab.Navigator>
    );
}
