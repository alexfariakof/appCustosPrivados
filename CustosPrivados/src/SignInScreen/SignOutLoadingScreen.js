import React, { Component } from 'react';
import { ImageBackground, ActivityIndicator, StatusBar, View } from 'react-native';
import asset from '../Services/Assets'
import styles from '../Services/Styles'
import AsyncStorage from '@react-native-community/async-storage'

export default class SignOutLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        setTimeout(this._signOut, 3000);
    };

    _signOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={styles.containerCentralizar}>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                </View>
            </ImageBackground>
        );
    }
}