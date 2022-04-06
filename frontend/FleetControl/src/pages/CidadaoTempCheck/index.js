import React from 'react';
import { Text, Dimensions, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput, Button  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

import Header from '../../components/CidadaoTempCheckC/Header';
import api from '../../pages/services/api';
import { Container, DataContainer, DataItem} from './style';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;


export default class CidadaoTempCheck extends React.Component {    
    state = {
        feed: [],
        temperature: '',   
        code: '',
    };  

    handleSubmit = async () => {
        if (this.state.temperature != ''){
          const data = new FormData();      
          
          data.append('temperature', this.state.temperature);
          data.append('code', this.state.code);
      
          await api.post('cidadao/findCidadaoByCode', data);
      
          Alert.alert('Done', 'Temperature Updated!');
          this.props.navigation.navigate('Main');
      
        } else {
          Alert.alert('Erro','Temperatura Invalida!');
        }
      }
    
    handleChange(temp, code) {
        this.setState({ temp })
        this.setState({ code })
    }

    async getPacients(){         
        const response = await api.get('cidadao');   
        this.setState({feed: response.data});
    }

    async componentDidMount(){
        this.getPacients();
    } 

    render(){
        const { code } = this.props.route.params;
        var dataNow = new Date();

        const result = this.state.feed.filter(function(a) {
            return a.codePulseira == code;          
        });   

        console.log(result.lastTempUpdate)

        this.state.feed.forEach(function(item) {
            if (item.statusColor == 0){
                item.statusColor = '#adebad';
            } else if (item.statusColor == 1){
                item.statusColor = '#ffc266';
            }else if (item.statusColor == 2){
                item.statusColor = '#ff9999';
            }            
        });
        
        return(   
            <Container>    
            <Header/>                          
            <FlatList  
            scrollEnabled = {false} 
            data={result}             
            keyExtractor ={cida => cida._id}            
            renderItem={({ item }) => (        
            <DataContainer>                                         
                    <DataItem inputColor = {item.statusColor} height = {H} width = {W}>                                                 
                        <Icon 
                            name="account-circle" size = {80} color = {item.statusColor}
                            style={{ paddingBottom: 10 }}
                        />  
                        <Text style={{ fontSize: 40, color: '#555', paddingBottom: 5 }}>                            
                            Nome: {item.name}                          
                        </Text>   
                        <Text style={{fontSize: 20, color: '#555', paddingBottom: 5, alignSelf: 'flex-start',}}>                              
                        - Last Temperature: {item.temperature} ° 
                        </Text>  
                        <Text style={{ fontSize: 20, color: '#555', alignSelf: 'flex-start',}}>                             
                        - ID: {item.codePulseira}                             
                        </Text>     
                        <Text style={{ fontSize: 20, color: '#555', alignSelf: 'flex-start',}}>                             
                        - Date: {item.lastTempUpdate}                             
                        </Text>  
                        <Text style={{ fontSize: 20, color: '#555', alignSelf: 'flex-start',}}>                             
                        - Maximo de Dias: {item.maxDays}                             
                        </Text>                                         
                    </DataItem>
                                     
            </DataContainer>                    
                )}                               
            />
        
            <TextInput
            style = {{padding: 8,  borderRadius: 5,}}
            label='New Temperatura'
            mode = 'outlined'
            theme={{ colors: { 
                text: '#000',
                primary: '#31c1b0',
                underlineColor:'transparent',                         
            } }}
            value = {this.state.temperature}
            onChangeText={temperature => this.setState({ temperature, code })}
            />
        

        <Button icon="snowflake-alert" mode="contained" onPress={this.handleSubmit} color = "#458ED8" style = {{padding: 8, margin: 10, borderRadius: 5,}}>
            Nova Temperatura
        </Button>  

        </Container>   
        );    
    }
}
