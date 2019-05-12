import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions } from 'react-native';
import axios from 'axios';
import { IAnuncio } from '../../models/types/types';

export default class Adverts extends Component {
  state = {
    anuncios: []
  };
  async componentDidMount() {
    const { data } = await axios.get<IAnuncio[]>(
      'https://aux-ecommerce-api.herokuapp.com/api/anuncio'
    );

    this.setState({ anuncio: data });
  }

  render() {
    const dimensions = Dimensions.get('window');
    const width = dimensions.width - 20;
    const height = 90;
    return (
      <View>
        <Image
          source={{
            uri:
              'https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/9/2018/05/Warburtons-Royal-Wedding-620x330.png'
          }}
          style={{
            width: width,
            height: height,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5
          }}
        />
      </View>
    );
  }
}
