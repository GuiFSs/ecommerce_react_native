import React, { Component } from 'react';

import { ThemeProvider } from 'react-native-elements';
import MHeader from '../components/Header/MHeader';
import Carousel from '../components/Carousel/Carousel';

const theme = {
  Header: {
    backgroundColor: '#E60014'
  }
};

class HomeScreen extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MHeader navigation={this.props.navigation} />
        <Carousel />
        {/* <Test /> */}
      </ThemeProvider>
    );
  }
}

export default HomeScreen;
