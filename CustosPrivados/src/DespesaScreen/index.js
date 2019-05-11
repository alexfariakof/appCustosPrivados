import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DespesaScreen extends Component {

  render() {
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
            <Icon name="bars" style={{ color: 'white', padding: 10, marginLeft: 10, fontSize: 20 }} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Despesas</Text>
        </View>
      </View>
    )
  }
};
