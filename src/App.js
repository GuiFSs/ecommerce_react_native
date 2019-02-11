import React, { Component } from 'react';

import { ThemeProvider } from 'react-native-elements';
import MHeader from './componetns/Header/MHeader';
import Test from './componetns/Testing/Test';

const theme = {
  Header: {
    backgroundColor: '#E60014'
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MHeader />
        <Test />
      </ThemeProvider>
    );
  }
}

export default App;
