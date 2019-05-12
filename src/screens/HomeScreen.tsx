import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemeProvider, Image, Text } from 'react-native-elements';
import MHeader from '../components/Header/MHeader';
import Carousel from '../components/Carousel/Carousel';
import Adverts from '../components/Adverts/Adverts';
import Card from '../components/Card-Offers/Card';

import { INavigationProps } from '../models/types/types';

const theme = {
  Header: {
    backgroundColor: '#E60014'
  }
};

class HomeScreen extends Component<INavigationProps> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1 }}>
          <MHeader navigation={this.props.navigation} />
          <ScrollView>
            <Carousel />
            <Adverts />
            <Card />
          </ScrollView>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  }
});

export default HomeScreen;
