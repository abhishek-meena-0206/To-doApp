import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer } from 'react-navigation';
import HomeScreen from './src/homeScreen';
import Create from './src/screen/create';


const navigator = createStackNavigator(
  {
    Home: Create,
   
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
