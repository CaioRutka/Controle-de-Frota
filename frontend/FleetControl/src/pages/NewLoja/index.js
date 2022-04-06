import Header from '../../components/NewCidadaoC/Header';
import React, { Component } from 'react';
import { TextInput, Button  } from 'react-native-paper';
import { Alert, Text } from 'react-native';
import { ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';

import api from '../../pages/services/api';
import { Container, ContainerList, InputContainer } from './style';

export default class NewLoja extends Component {
  state = {
    name: '', 
    location: '',     
    maxClients: '',
    username: '',
    password: '',
} 

handleSubmit = async () => {
  if (this.state.name != ''){
    const data = new FormData();

    data.append('name', this.state.name);
    data.append('temperlocationature', this.state.location);
    data.append('maxClients', this.state.maxClients);
    data.append('username', this.state.username);
    data.append('password', this.state.password);

    await api.post('loja', data);

    Alert.alert('Done','Loja adicionada!');

  } else {
    Alert.alert('Erro','Nome invalido..');
  }
}


render(){
  return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <ScrollView>
        <Container>      
            <Header/>  
            <ContainerList>
            <Text style={{ fontSize: 22, color: '#555', textAlign: 'center', }}> Registrar Loja: </Text> 
                <InputContainer>
                    <TextInput
                        style = {{height: 50,}}
                        label='Nome da Loja'
                        mode = 'outlined'
                        theme={{ colors: { 
                            text: '#000',
                            primary: '#31c1b0',
                            underlineColor:'transparent',                         
                        } }}
                        value = {this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />  

                    <TextInput
                        style = {{height: 50,}}
                        label='Localização'
                        mode = 'outlined'
                        theme={{ colors: { 
                            text: '#000',
                            primary: '#31c1b0',
                            underlineColor:'transparent',                         
                        } }}
                        value = {this.state.location}
                        onChangeText={location => this.setState({ location })}
                    />

                    <TextInput
                        style = {{height: 50,}}
                        label='Maximo de Clientes'
                        mode = 'outlined'
                        theme={{ colors: { 
                            text: '#000',
                            primary: '#31c1b0',
                            underlineColor:'transparent',                         
                        } }}
                        value = { this.state.maxClients }
                        onChangeText={maxClients => this.setState({ maxClients })}
                    />  

                    <TextInput
                        style = {{height: 50,}}
                        label='Username'
                        mode = 'outlined'
                        theme={{ colors: { 
                            text: '#000',
                            primary: '#31c1b0',
                            underlineColor:'transparent',                         
                        } }}
                        value = { this.state.username }
                        onChangeText={username => this.setState({ username })}
                    />  

                    <TextInput
                        style = {{height: 50,}}
                        label='Password'
                        mode = 'outlined'
                        theme={{ colors: { 
                            text: '#000',
                            primary: '#31c1b0',
                            underlineColor:'transparent',                         
                        } }}
                        value = { this.state.password }
                        onChangeText={password => this.setState({ password })}
                    />   
              </InputContainer>   
        </ContainerList>  
            
        <Button icon="account-plus" mode="contained" onPress={this.handleSubmit} color = "#458ED8" style = {{padding: 8, margin: 10, marginTop: 0, marginBottom: 0, borderRadius: 5,}}>
            Adicionar
        </Button>  

        </Container>   
        </ScrollView>
        </KeyboardAvoidingView>  
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
      paddingHorizontal: 0,
    },
  });

/*
export default function NewCidadao(){       
    return(        
        <Container>              
            <Header/>    
            <New/>                
        </Container>            
    );    
}
*/