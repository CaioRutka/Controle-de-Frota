
import React, { Component } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Alert } from 'react-native';

import { Fullscreen, Mundo, InputContainer, MundoContainer } from './style';
import mundo from '../../assets/mundo.png';
import api from '../../pages/services/api';

export default class LoginPage extends Component {
    state = {
        feed: [],
        username: '',
        password: '',
        userKind: '',
        lojachecked: false,
        AFchecked: false,
    }

    handleSubmit = async () => {
        if (this.state.user != '') {
            if (this.state.lojachecked == false && this.state.AFchecked == false) {
                    
            } else if (this.state.lojachecked == true && this.state.AFchecked == false) {
                const data = new FormData();

                data.append('username', this.state.username);
                data.append('password', this.state.password);

                const response = await api.post('loja/login', data);

                if (response.data.status == 'NAOACHOU') {                      
                    Alert.alert('Error', 'Combinaçaõ de usuario e senha invalidas!');    
                } else if (response.data.status == 'ACHOU'){
                    this.props.navigation.navigate('LojaLogin');     
                }               

            } else if (this.state.lojachecked == false && this.state.AFchecked == true) {
                const data = new FormData();

                data.append('username', this.state.username);
                data.append('password', this.state.password);

                const response = await api.post('fronteira/login', data);

                if (response.data.status == 'NAOACHOU') {                      
                    Alert.alert('Error', 'Combinaçaõ de usuario e senha invalidas!');    
                } else if (response.data.status == 'ACHOU'){
                    this.props.navigation.navigate('FronteiraLogin');     
                }    

            } else if (this.state.lojachecked == true && this.state.AFchecked == true) {
                Alert.alert('Error', 'Selecione somente UMA opção! ');
            }
        } else {
            Alert.alert('Erro', 'Nome invalido..');
        }
    }

    render() {
        return (
            <Fullscreen>

                <MundoContainer>
                    <Mundo source={mundo} />
                </MundoContainer>

                <InputContainer>
                    <TextInput
                        label='User:'
                        mode='outlined'
                        theme={{
                            colors: {
                                text: '#000',
                                primary: '#fff',
                                underlineColor: 'transparent',
                            }
                        }}
                        value={this.state.username}
                        onChangeText={username => this.setState({ username })}
                    />
                </InputContainer>

                <InputContainer>
                    <TextInput
                        label='Password:'
                        mode='outlined'
                        theme={{
                            colors: {
                                text: '#000',
                                primary: '#fff',
                                underlineColor: 'transparent',
                            }
                        }}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </InputContainer>

                <CheckBox
                    containerStyle={{
                        borderColor: "black",
                        marginLeft: 25,
                        marginRight: 25,
                    }}
                    title='Loja'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.lojachecked}
                    onPress={() => this.setState({ lojachecked: !this.state.lojachecked })}
                />

                <CheckBox
                    containerStyle={{
                        borderColor: "black",
                        marginLeft: 25,
                        marginRight: 25,
                    }}
                    title='Agente de Fronteira'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.AFchecked}
                    onPress={() => this.setState({ AFchecked: !this.state.AFchecked })}
                />

                <Button onPress={this.handleSubmit} icon="account-plus" mode="contained" color="#3366cc" style={{ padding: 8, margin: 10, borderRadius: 5, }}>
                    Log In!
                </Button>
            </Fullscreen>
        );
    }
}

