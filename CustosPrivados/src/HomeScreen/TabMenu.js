import React, {Component} from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LancamentoScreen from '../LancamentoScreen';  //Tab Nav
import RelatorioScreen from '../RelatorioScreen'; //Stack Nav

const TabNavigator = createBottomTabNavigator({
  Lancamento: {
    screen: LancamentoScreen,
    navigationOptions: {
      header: null,
      title: "Lançamentos",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          size={17}
          color={tintColor} />
      )
    }
  },
  Relatorio: {
    screen: RelatorioScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: "Relatório",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="poll"
          size={17}
          color={tintColor} />
      )
    }
  }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ TabNavigator }, { headerMode: "none" });

