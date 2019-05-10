import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome5';
import LancamentoScreen from '../LancamentoScreen';  //Tab Nav
import RelatorioScreen from '../RelatorioScreen'; //Stack Nav

const HomeScreen = createBottomTabNavigator({
    Lancamento: {
        screen: LancamentoScreen,
        navigationOptions: {
            title: "Lançamentos",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="microchip"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Relatorio: {
        screen: RelatorioScreen,
        navigationOptions: {
            tabBarLabel: "Relatório",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="memory"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});
//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ HomeScreen }, { headerMode: "none" });