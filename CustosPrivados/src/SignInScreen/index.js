import React, { Component } from 'react';
import { ImageBackground, ScrollView, View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import apiServices from '../Services/ApiServices'
import assets from '../Services/Assets'
import styles from '../Services/Styles'

export default class SignInScreen extends Component {
    static navigationOptions = { header: null }
    state = {
        erroMessage: null,
        login: null,
        senha: null,
        errors: {
            login: null,
            senha: null
        }
    }

    render() {
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.ViewCentralizar} >
                            <Text style={styles.textBenVindo} >Entrar</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PrimeiroAcesso')} >
                                <Text style={styles.linkButton}>Primeiro acesso</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput style={styles.text} placeholder='Digite seu email' maxLength={20} keyboardType='email-address' onChangeText={txt => this.setState({ login: txt })} />
                            <View style={styles.ViewCentralizar} >
                                <Text style={{ color: 'red' }}> {this.state.errors.login} </Text>
                            </View>

                            <TextInput style={styles.text} placeholder='Digite sua senha' maxLength={8} secureTextEntry onChangeText={txt => this.setState({ senha: txt })} />
                            <View style={styles.ViewCentralizar} >
                                <Text style={{ color: '#F00' }}> {this.state.errors.senha} </Text>
                            </View>
                        </View>
                        <View style={styles.ViewCentralizar} >
                            <Text style={{ color: 'red' }}> {this.state.erroMessage} </Text>
                        </View>
                        <View style={styles.ViewCentralizar} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EsqueciSenha')} >
                                <Text style={styles.linkButton}>Esqueci minha senha</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ViewCentralizar} >
                            <TouchableOpacity style={styles.btnIniciar} onPress={() => { this.signInAsync(); }} >
                                <Text style={styles.btnIniciarText} >Iniciar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }

    signInAsync = () => {
        //if (!this.isValid(this.state))
        //  return;

        const body = {
            login: 'admin@admin',
            senha: 'admin'
            //login: this.state.login,
            //senha: this.state.senha
        };

        api = new apiServices();
        try {
            this.setState({ isLoading: true });
               api.post('/api/controleacesso/signin', body, (json) => {
                if (json.autenticated === true) {
                    AsyncStorage.setItem('@dpApiAccess', JSON.stringify(json));
                    this.props.navigation.navigate('App');            
                }
                else
                    this.setState({ erroMessage: json.message });
                this.setState({ isLoading: false });
            });
        }
        catch (error) {
            this.setState({ isLoading: false });
            this.setState({ erroMessage: 'Erro de conexão, tente novamente mais tarde.' });
            //console.error(error);
        }
        
    };

    isValid = (body) => {
        var result = true;

        if ((body.login === null) || (body.login === undefined) || (body.login === 0)) {
            body.errors.login = 'O email de acesso não pode ser nulo!';
            result = false;
        }
        else
            body.errors.login = null;

        if ((body.senha === null) || (body.senha === undefined) || (body.senha.trim() === '')) {
            body.errors.senha = 'Senha não pode ser nula!';
            result = false;
        }
        else
            body.errors.senha = null;

        this.setState({ errors: body.errors });
        return result;
    }

}
