import React from 'react';

import { Container } from './style';
import Header from '../../components/MainC/Header';
import QRCodeButtom from '../../components/MainC/QRCodeButtom';
import AlgumaCoisa from '../../components/MainC/AlgumaCoisa';

export default function Main(){       
    return(        
        <Container>              
            <Header/> 
            <AlgumaCoisa/>
            <QRCodeButtom/>      
        </Container>            
    );    
}
