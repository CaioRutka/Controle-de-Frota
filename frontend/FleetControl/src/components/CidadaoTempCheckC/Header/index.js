import React from 'react';
import { HeaderBall, Fullscreen, HeaderContainer, Mundo } from './style';
import { Dimensions } from 'react-native';
import mundo from '../../../assets/mundo.png';

const W = Dimensions.get('window').width;
const w = -(1000 - W/2);

const Header = () => {    
    return (
        <Fullscreen>   
            <HeaderBall top = {w}>    
                <HeaderContainer width = {300}> 
                    <Mundo source = {mundo}/>                   
                </HeaderContainer>
            </HeaderBall>                 
        </Fullscreen>              
    );  
}

export default Header;