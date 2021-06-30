import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function HomeStack(props) {
    const { navigation } = props;
    return(
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} options={{title: 'Home', headerLeft: () => <Text onPress={navigation.openDrawer}>Menu</Text>}}></Stack.Screen>
            <Stack.Screen name='about' component={About} options={{title: 'About'}}></Stack.Screen>
        </Stack.Navigator>
    )
}