import { createAppContainer, createStackNavigator } from 'react-navigation';
import SignInScreen from './src/SignInScreen';
import HomeScreen from './src/HomeScreen/DrawerMenu';

import Icon from './node_modules/react-native-vector-icons/FontAwesome5';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: { header: null }
  },
}, {
    initialRouteName: 'SignIn'
  });

export default AppNavigator;