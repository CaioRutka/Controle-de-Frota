import React, {Component} from 'react';
import { TextInput, Button  } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from 'react-native-elements'

import { Fullscreen, Mundo, InputContainer, MundoContainer} from './style';
import mundo from '../../../assets/mundo.png';

export default function Header() { 
    const navigation = useNavigation();

    return (
        <Fullscreen>  
            
            <MundoContainer> 
                <Mundo source = {mundo}/> 
            </MundoContainer>
                
            <InputContainer>
                <TextInput
                    label='User:'
                    mode = 'outlined'
                    theme={{ colors: { 
                        text: '#000',
                        primary: '#fff',
                        underlineColor:'transparent',                         
                    } }}                    
                /> 
            </InputContainer>

            <InputContainer>
                <TextInput
                    label='Password:'
                    mode = 'outlined'
                    theme={{ colors: { 
                        text: '#000',
                        primary: '#fff',
                        underlineColor:'transparent',                         
                    } }}                    
                /> 
            </InputContainer> 

            <CheckBox
                    containerStyle={{
                        borderColor: "black", 
                        marginLeft: 25,
                        marginRight: 25,                       
                    }}
                    title='Loja'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'                    
                />

                <CheckBox
                    containerStyle={{
                        borderColor: "black",   
                        marginLeft: 25,
                        marginRight: 25,                     
                    }}
                    title='Agente de Fronteira'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'                    
                />

            <Button icon="account-plus" mode="contained" color = "#3366cc" style = {{marginTop: 5, marginBottom: 5,marginRight: 25, padding: 8, marginLeft: 25, borderRadius: 5,}}>
            Log In!
            </Button>              
        </Fullscreen>              
    ); 
} 

