import styled from 'styled-components/native';

export const Container = styled.View`    
    flex:1;
`;

export const DataContainer = styled.View`    
    flex:1;
`;

export const DataContainer1 = styled.ScrollView.attrs({
    horizontal: false,
    contentContainerStyle: { paddingTop: 10, paddingLeft: 8, paddingRight: 8 },
    showsHorizontalScrollIndicator: false,
})``;

export const DataItem = styled.View` 

    flex:1;
    paddingStart: 10px;
    paddingTop: 10px;  
    justifyContent: flex-start; 
    alignItems: center;
    flexDirection: column;
    
`;
