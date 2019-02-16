import React, { Component } from "react";
import { View, ScrollView, Image, Dimensions } from "react-native";
import axios from "axios";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { anuncio: [] };
  }

  componentDidMount() {
    axios
      .get("https://aux-ecommerce-api.herokuapp.com/api/anuncio")
      .then(res => {
        this.setState({ anuncio: res.data.anuncios });
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  }

  render() {
    const dimensions = Dimensions.get("window");
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
          {this.state.anuncio.map(res => {
            return (
              <Image
                key={res._id}
                source={{ uri: res.imagem }}
                style={{ width: width, height: height }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
