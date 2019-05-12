import React, { Component } from 'react';
import { ImageBackground, ActivityIndicator, StatusBar, View } from 'react-native';
import asset from '../Services/Assets'
import styles from '../Services/Styles'
import AsyncStorage from '@react-native-community/async-storage'

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
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={styles.containerCentralizar} >
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                </View>
            </ImageBackground>
        );
    }
}