import styled from 'styled-components/native';

export const Fullscreen = styled.View`
    width: 100%;
    height: 180px;
`;

export const HeaderBall = styled.View`
    position: absolute;
    width: 1000px;
    height: 1000px;
    top: ${props => props.top}px;
    alignSelf: center;
    borderRadius: 1000px;
    background: #458ED8;
    overflow: hidden;
    borderWidth: 3px;
    borderColor: #2A6BAB;
`;


export const HeaderContainer = styled.View`  
    position: absolute;
    bottom: 0px;
    alignSelf: center;   
    width: ${props => props.width}px;
    height: 300px;   
`;

export const Mundo = styled.Image`   
    top: 145px;
    left: 20px;
    height: 207px;
    width: 332px;
    resizeMode = contain;
`;
