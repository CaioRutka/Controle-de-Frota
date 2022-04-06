import Header from '../../components/NewCidadaoC/Header';
import React, { Component } from 'react';
import { TextInput, Button  } from 'react-native-paper';
import { Alert, Text } from 'react-native';
import { ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';

import api from '../../pages/services/api';
import { Container, ContainerList, InputContainer } from './style';

export default class NewCidadao extends Component {
  state = {
    name: '', 
    temperature: '',     
    codePulseira: '',
} 

handleSubmit = async () => {
  if (this.state.name != ''){
    const data = new FormData();

    data.append('name', this.state.name);
    data.append('temperature', this.state.temperature);
    data.append('codePulseira', this.state.codePulseira);

    await api.post('cidadao', data);

    Alert.alert('Done','Pessoa adicionada!');
    this.props.navigation.navigate('PreNew');

  } else {
    Alert.alert('Erro','Nome invalido..');
  }
}


render(){
  const { code } = this.props.route.params;

  return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <ScrollView>
        <Container>      
            <Header/>  
            <ContainerList>
            <Text style={{ fontSize: 22, color: '#555', textAlign: 'center', }}> Registrar Pessoa: </Text> 
                <InputContainer>
                    <TextInput
                        label='Nome'
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
                        label='Temperatura'
                        mode = 'outlined'
                        theme={{ colors: { 
                            text: '#000',
                            primary: '#31c1b0',
                            underlineColor:'transparent',                         
                        } }}
                        value = {this.state.temperature}
                        onChangeText={temperature => this.setState({ temperature })}
                    />

                    <TextInput
                        label='Code Pulseira'
                        mode = 'outlined'
                        theme={{ colors: { 
                            text: '#000',
                            primary: '#31c1b0',
                            underlineColor:'transparent',                         
                        } }}
                        value = { this.state.codePulseira }
                        onChangeText={codePulseira => this.setState({ codePulseira })}
                    />     
                    <Text>
                    QRCode - {code}    
                    </Text>  
              </InputContainer>   
        </ContainerList>  
            
            <Button icon="account-plus" mode="contained" onPress={this.handleSubmit} color = "#458ED8" style = {{padding: 8, margin: 10, borderRadius: 5,}}>
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