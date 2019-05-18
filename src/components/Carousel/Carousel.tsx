import React, { Component } from 'react';
import {
  View, ScrollView, Dimensions, ActivityIndicator,
} from 'react-native';
import { Image } from 'react-native-elements';
import axios from 'axios';
import { IAnuncio } from '../../models/types/types';

interface IState {
  anuncios: IAnuncio[];
}

const { width } = Dimensions.get('window');
const height = Math.round((width * 9) / 16);

export default class Carousel extends Component<{}, IState> {
  state: IState = {
    anuncios: [],
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get<IAnuncio[]>(
        'https://aux-ecommerce-api.herokuapp.com/api/anuncio',
      );
      this.setState({ anuncios: data });
    } catch (err) {
      console.log(err.response.data);
    }
  }

  render() {
    const a = <ActivityIndicator />;
    const { anuncios } = this.state;
    return (
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator
          scrollEventThrottle={10}
          pagingEnabled
        >
          {anuncios.map(anuncio => (
            <View key={anuncio._id}>
              <Image
                source={{ uri: anuncio.imagem }}
                style={{ width, height }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
