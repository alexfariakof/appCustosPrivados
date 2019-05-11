import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,  
} from 'react-native';

export default class SignOutLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  
  _bootstrapAsync = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}