import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import masterStyles from '../Styles/Master'

export default class SignOutLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        setTimeout(this._signOut, 3000);
    };

    _signOut = async  () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={masterStyles.containerCentralizar}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}