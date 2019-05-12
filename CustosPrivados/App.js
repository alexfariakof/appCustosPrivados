import { SwitchNavigator, StackNavigator } from 'react-navigation';
import SignInScreen from './src/SignInScreen';
import PrimeiroAcessoScreen from './src/PrimeiroAcesso'
import HomeScreen from './src/HomeScreen/DrawerMenu';
import AuthLoadingScreen from './src/SignInScreen/AuthLoadingScreen'

const AppStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null }
  },
  
});

const AuthStack = StackNavigator({ 
  SignIn: SignInScreen,
  PrimeiroAcesso: { screen: PrimeiroAcessoScreen},
});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    
  },
  {
    initialRouteName: 'AuthLoading',
  }
);