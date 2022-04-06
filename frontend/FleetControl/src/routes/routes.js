import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginPage from '../pages/LoginPage';
import Main from '../pages/Main'; 
import CidaTempCheck from '../pages/CidadaoTempCheck'; 
import NewCidadao from '../pages/NewCidadao';
import PreNew from '../pages/PreNew - QRScanner'
import QRScanner from '../components/QRCode Scanner';
import QRScannerNP from '../components/QRCodeScannerNewP';
import NewLoja from '../pages/NewLoja';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TempCheckStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="Main" component={Main} />        
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="CidaTempCheck" component={CidaTempCheck} />
      </Stack.Navigator>
  );
}

function RegistroLojaStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}>
        <Tab.Screen name = "NewLoja" component = {NewLoja} /> 
      </Stack.Navigator>
  );
}

function RegistroCidaStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="PreNew" component={PreNew} /> 
        <Stack.Screen name="NewCidadao" component={NewCidadao} />        
        <Stack.Screen name="QRScannerNP" component={QRScannerNP} />
      </Stack.Navigator>
  );
}

function FronteiraTab() {
  return (
      <Tab.Navigator screenOptions = {{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: 'white',       
        }}
        tabBarOptions={{  

          keyboardHidesTabBar:true,    
          tabStyle: {
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
          },          
        }}
        >
          <Tab.Screen name = "Check Temp" component = {TempCheckStack}
          options={{
            tabBarLabel: 'Checar Temperatura',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="coolant-temperature" color={color} size={size} />
            ),
          }}          
          />   
          <Tab.Screen name = "Registrar Loja" component = {RegistroLojaStack} 
          options={{
            tabBarLabel: 'Registrar Loja',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="store" color={color} size={size} />
            ),
          }} 
          />
          <Tab.Screen name = "Registrar Cidadao" component = {RegistroCidaStack} 
          options={{
            tabBarLabel: 'Registrar Cidadao',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-plus" color={color} size={size} />
            ),
          }} 
          />         
      </Tab.Navigator>       
  );
}

function LojaStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="TempCheck" component={TempCheckStack} /> 
      </Stack.Navigator>
  );
}

export default function Routes() {
  return (
      <Stack.Navigator screenOptions={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: 'white',
          headerLeft: null,
        }}>
          <Stack.Screen name="LoginPage" component={LoginPage} /> 
          <Stack.Screen name="LojaLogin" component={LojaStack} /> 
          <Stack.Screen name="FronteiraLogin" component={FronteiraTab} /> 
      </Stack.Navigator>       
  );
} 

/*
function MainStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="Main" component={Main} />        
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="CidaTempCheck" component={CidaTempCheck} />
      </Stack.Navigator>
  );
}

function NewCidaStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="PreNew" component={PreNew} /> 
        <Stack.Screen name="NewCidadao" component={NewCidadao} />        
        <Stack.Screen name="QRScannerNP" component={QRScannerNP} />
      </Stack.Navigator>
  );
}

function LoginStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="LoginPage" component={LoginPage} /> 
      </Stack.Navigator>
  );
}

export default function Routes() {
    return (
        <Tab.Navigator screenOptions={{
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: 'white',
          }}>
            <Tab.Screen name = "Main" component = {MainStack} />   
            <Tab.Screen name = "Login Page" component = {LoginStack} />
            <Tab.Screen name = "New Cidadao" component = {NewCidaStack} />   
            <Tab.Screen name = "NewLoja" component = {NewLoja} />           
        </Tab.Navigator>       
    );
}
*/
