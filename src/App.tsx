import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DrawerList from './components/Drawer/DrawerList';
import Departamentos from './screens/Departamentos';

const App = createDrawerNavigator(
  {
    home: {
      screen: HomeScreen,
    },
    departamentos: {
      screen: Departamentos,
    },
  },

  { contentComponent: DrawerList },
);

export default createAppContainer(App);
