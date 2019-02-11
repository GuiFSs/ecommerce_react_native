import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import configStore from './configStore';

const app = () => (
  <Provider store={configStore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
