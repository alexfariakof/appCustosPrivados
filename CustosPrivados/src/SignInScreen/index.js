import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class SignInScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => { this.props.navigation.navigate('Home') }}
                    title="Iniciar"
                    color="#841584"
                    accessibilityLabel="Entrar"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
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
