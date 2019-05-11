import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import masterStyles from '../Styles/Master'

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        setTimeout(this._signIn, 3000);
    };

    _signIn = async () => {
        const userToken = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    render() {
        return (
            <View style={masterStyles.containerCentralizar} >
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}