import React, {Component} from 'react';
import {Text} from 'react-native'
import { Paragraph } from 'react-native-paper';

import { Container, TextView } from './style';


export default class AlgumaCoisa extends Component{    
    render(){
        

        return(  
                
             <Container>

                <Text style={{ fontSize: 25, color: '#666', paddingBottom: 5, fontWeight: 'bold' }}>
                     Medição de Temperatura
                 </Text>
                 
                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                     Faça o a medição e a atualizção da temperatura:
                 </Text>                 

                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                    - Clique no botao abaixo e escaneie o QRCode;
                 </Text>

                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                     - Verifique qual foi a ultima medição;
                 </Text>

                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                     - Meça a nova temperatura do individuo;
                 </Text>

                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                    - Atualize a temperatura;
                 </Text>
  
             </Container>    
             
        );    
    }
}
