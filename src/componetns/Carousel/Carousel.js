import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions } from 'react-native';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const dimensions = Dimensions.get('window');
    const width = dimensions.width;
    const height = Math.round((dimensions.width * 9) / 16);
    return (
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={10}
          pagingEnabled
        >
          <Image
            source={require('./jokenpo.png')}
            style={{ width: width, height: height }}
          />
          <Image
            source={require('./anuncio.jpg')}
            style={{ width: width, height: height }}
          />
          <Image
            source={require('./anuncio2.jpg')}
            style={{ width: width, height: height }}
          />
        </ScrollView>
      </View>
    );
  }
}
