import React, { Component } from 'react';

import { ThemeProvider } from 'react-native-elements';
import MHeader from './componetns/Header/MHeader';
import Test from './componetns/Testing/Test';
import Carousel from './componetns/Carousel/Carousel'
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
        <Carousel />
      </ThemeProvider>
    );
  }
}

export default App;
