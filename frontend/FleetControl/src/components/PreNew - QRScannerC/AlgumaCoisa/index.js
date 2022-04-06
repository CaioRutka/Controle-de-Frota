import React, {Component} from 'react';
import {Text} from 'react-native'
import { Paragraph } from 'react-native-paper';

import { Container, TextView } from './style';


export default class AlgumaCoisa extends Component{    
    render(){
        

        return(  
                
             <Container>

                <Text style={{ fontSize: 25, color: '#666', paddingBottom: 5, fontWeight: 'bold' }}>
                     Registro de Cidadões
                 </Text>
                 
                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                     Faça o registro de Cidadões:
                 </Text>

                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                     - Coloque uma das pulseiras no cidadão;
                 </Text>

                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                    - Clique no botao abaixo e escaneie o QRCode;
                 </Text>

                 <Text style={{ fontSize: 20, color: '#555', paddingBottom: 5 }}>
                    - Preencha os dados;
                 </Text>
  
             </Container>    
             
        );    
    }
}
