import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './homeScreen';
import LoginScreen from './LoginScreen';
import CreateAccount from './createAccount';
import FriendScreen from './friendScreen';
import MenuScreen from './menu';
import NotificationScreen from './notificationScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    create: CreateAccount,
    Friend: FriendScreen,
    Menu: MenuScreen,
    Notification: NotificationScreen,
  },
  {
    headerShown: false,
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
