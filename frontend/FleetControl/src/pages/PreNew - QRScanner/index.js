import React from 'react';

import { Container } from './style';
import Header from '../../components/PreNew - QRScannerC/Header';
import QRCodeButtom from '../../components/PreNew - QRScannerC/QRCodeButtom';
import AlgumaCoisa from '../../components/PreNew - QRScannerC/AlgumaCoisa';


export default function PreNew(){       
    return(        
        <Container>  
            <Header/>
            <AlgumaCoisa>                
            </AlgumaCoisa>
            <QRCodeButtom/>  
        </Container>            
    );    
}
