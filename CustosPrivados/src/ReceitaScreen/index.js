import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Services/Styles'
import asset from '../Services/Assets'

export default class ReceitaScreen extends Component {

  render() {
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
            <Icon name="bars" style={styles.menuButton} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Receitas</Text>
        </View>
      </View>
    )
  }
};

