import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import Contact from '../screens/Contact';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='home' component={HomeStack} options={{title: 'Home'}}></Drawer.Screen>
            <Drawer.Screen name='contact' component={ContactStack} options={{title: 'Contact'}}></Drawer.Screen>
        </Drawer.Navigator>
    );
}

// export default function Navigation() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name='home' component={HomeStack} options={{title: 'Home'}}></Tab.Screen>
//             <Tab.Screen name='contact' component={ContactStack} options={{title: 'Contact'}}></Tab.Screen>
//         </Tab.Navigator>
//     );
// }

