import React, { Component } from 'react';
import { StyleSheet, Button, View, AsyncStorage } from 'react-native';

export default class SignInScreen extends Component {
    static navigationOptions = { header: null   }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => { this.signInAsync(); }}
                    title="Iniciar"
                    color="#841584"
                    accessibilityLabel="Entrar"
                />
            </View>
        );
    }

    signInAsync = async () => {
        await AsyncStorage.setItem('token', 'abc');
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
