import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

const App = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(App);
