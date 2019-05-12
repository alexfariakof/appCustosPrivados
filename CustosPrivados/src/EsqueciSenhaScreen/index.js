import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import assets from '../Services/Assets'
import styles from '../Services/Styles'

import apiServices from '../Services/ApiServices'

class EsqueciSenhaScreen extends Component {
    static navigationOptions = { header: null }

    state = {
        isLoading: false,
        email: null,
        errors: {
            email: null,
        }
    }

    render() {
        const { isLoading } = this.state;
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View><TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()} ><Text>Voltar</Text></TouchableWithoutFeedback></View>
                <View style={styles.container}>
                    <TextInput style={styles.text} maxLength={30} placeholder='Digite o email cadastrado.' keyboardType='email-address'
                        onChangeText={(email) => this.setState({ email })} value={this.state.email}>
                    </TextInput>
                    <View style={styles.ViewCentralizar} >
                        <Text style={{ color: 'red' }}> {this.state.errors.email} </Text>
                    </View>
                </View>
                <View style={styles.ViewCentralizar} >
                    {isLoading ? (
                        <ActivityIndicator
                            style={styles.btnIniciar}
                            color="green"
                            size="large"
                        />
                    ) :
                        (
                            <View style={styles.ViewCentralizar} >
                                <TouchableOpacity style={styles.btnIniciar} onPress={() => { this.recuperarSenha(); }} >
                                    <Text style={styles.btnIniciarText} >Recuperar Senha</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
            </ImageBackground>
        );
    }

    componentDidMount() {
        this.clearRecuperarSenha();
    }

    clearRecuperarSenha = () => {
        this.setState({
            email: null,
            isLoading: false,
            errors: {
                email: null,
            }

        });
    }

    recuperarSenha = async () => {
        if (!this.isValid(this.state))
            return;

        const body =  this.state.email;
        
        try {
            api = new apiServices();
            this.setState({ isLoading: true });
            await api.post('/api/controleacesso/recoverypassword', body, (json) => {
                if (json.message === true) {
                    alert('Caso o email esteja cadastrado, instruções para recuperação da senha seram enviadas.');
                    this.clearRecuperarSenha();
                    this.props.navigation.goBack();
                }
                else
                    alert(json.message);
                this.setState({ isLoading: false });
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    isValid = (body) => {
        var result = true;

        if ((body.email === null) || (body.email === undefined) || (body.email === 0)) {
            body.errors.email = 'Email não pode ser nulo!';
            result = false;
        }
        else
            body.errors.email = null;


        this.setState({ errors: body.errors });
        return result;
    }
}
export default EsqueciSenhaScreen;