import { createAppContainer, createStackNavigator } from 'react-navigation';
import SignInScreen from './src/SignInScreen';
import HomeScreen from './src/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { drawerLabel: () => null }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: { drawerLabel: () => null }
  },
}, {
    initialRouteName: 'SignIn'
  });

export default createAppContainer(AppNavigator)