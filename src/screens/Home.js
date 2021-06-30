import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home(props) {
    const { navigation } = props;
    return(
        <View>
            <Text>Estamos en el HOME</Text>
            <Button title='Ir a about' onPress={() => navigation.navigate('about')}></Button>
            <Button title='Ir a contact' onPress={() => navigation.navigate('contact')}></Button>
            <Button title='Ir a cursos' onPress={() => navigation.navigate('contact', {screen: 'cursos'})}></Button>
        </View>
    );
}