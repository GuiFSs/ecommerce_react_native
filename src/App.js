import React, { Component } from 'react';

import { ThemeProvider } from 'react-native-elements';
import MHeader from './componetns/Header/MHeader';

const theme = {
  Header: {
    backgroundColor: '#E60014'
  }
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MHeader />
      </ThemeProvider>
    );
  }
}
