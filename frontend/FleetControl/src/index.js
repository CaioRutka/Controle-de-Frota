import React from 'react';
import { YellowBox, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

import Routes from './routes/routes';

export default function App(){
    return (
       <NavigationContainer>         
            <StatusBar barStyle = "light-content" backgroundColor = "#458ED8"/>
            <Routes />
      </NavigationContainer>
    );
}