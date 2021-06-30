import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Contact from '../screens/Contact';
import Cursos from '../screens/Cursos';

const Stack = createStackNavigator();

export default function ContactStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='contact' component={Contact} options={{title: 'Contact'}}></Stack.Screen>
            <Stack.Screen name='cursos' component={Cursos} options={{title: 'Cursos'}}></Stack.Screen>
        </Stack.Navigator>
    )
}