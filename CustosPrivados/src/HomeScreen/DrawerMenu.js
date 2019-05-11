import React from 'react'
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DespesaScreen from '../DespesaScreen';  //Stack Nav
import ReceitaScreen from '../ReceitaScreen'; //Stack Nav
import LancamentoScreen from './TabMenu'; //Tab Nav
import SignOutLoadingScreen from '../SignInScreen/SignOutLoadingScreen'; //Stack Nav


export default createDrawerNavigator({
    Despesa: {
        screen: DespesaScreen,
        navigationOptions: {
            drawerLabel: 'Despesa',
            drawerIcon: ({ tintColor }) => <Icon name="minus" size={17} />,
        }
    },
    Receita: {
        screen: ReceitaScreen,
        navigationOptions: {
            drawerLabel: 'Receita',
            drawerIcon: ({ tintColor }) => <Icon name="plus" size={17} />,
        }
    },
    Lancamento: {
        screen: LancamentoScreen,
        navigationOptions: {
            drawerLabel: 'Lançamento',
            drawerIcon: ({ tintColor }) => <Icon name="th-list" size={17} />,
        }
    },
    Sair: {
        screen: SignOutLoadingScreen,
        navigationOptions: {
            drawerLabel: 'Sair',
            drawerIcon: ({ tintColor }) => <Icon name="sign-out-alt" size={17} />,
        }
    }
}, {
        initialRouteName: 'Lancamento'
    }
);



