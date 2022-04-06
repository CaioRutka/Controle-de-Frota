import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const W = Dimensions.get('window').width;
const w = -(1000 - W/2);

import { Container } from './style';


export default function QRCodeButtom(){ 
    const navigation = useNavigation();
        return (
            <Container>  
                   <Button icon= {({ color, size }) => (<MaterialCommunityIcons name="qrcode-scan" color={color} size={33} style = {{ margin: 5}} />)}  
                    mode = "contained" dark ={true} compact ={true} onPress={() => navigation.navigate('QRScanner')} color = "#2A6BAB" 
                    style = {{                          
                        position: 'absolute',
                        bottom:0,                        
                        justifyContent: 'center',

                        padding: 8,                         
                        width: W - 20,    
                        height: 60,                      
                        borderRadius: 5,
                        borderBottomWidth: 3,
                        borderEndWidth: 3,
                        borderColor: '#999'}}>                        
                    </Button>                  
                    
            </Container>
        );
    
}