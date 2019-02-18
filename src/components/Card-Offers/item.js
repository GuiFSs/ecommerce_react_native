import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class item extends Component {
  render() {
    return (
      <View>
        <Image style={styles.imagem} source={this.props.img} />
        <Text style={styles.txtTitle}>{this.props.title}</Text>
        <Text style={styles.txtOldPrice}>{this.props.price - 100}</Text>
        <Text style={styles.txtNewPrice}>{this.props.price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagem: {
    flex: 1,
    alignSelf: "center",
    width: 200,
    height: 200,
    marginBottom: 10
  },
  txtTitle: {
    fontWeight: "bold",
    fontSize: 20
  },
  txtOldPrice: {
    fontSize: 15
  },
  txtNewPrice: {
    fontSize: 21
  }
});

{
  /* <View>
        <Image style={styles.imagem} source={require("./teste.png")} />
        <Text style={styles.txtTitle}>
          Smartphone Motorola Moto G7 play, 32GB Dual Chip Android Pie - 9.0
          Tela 5.7" 1.8 GHz Octa-Core 4G Câmera 13MP - Indigo
        </Text>
        <Text style={styles.txtOldPrice}>De: R$ 999,90</Text>
        <Text style={styles.txtNewPrice}>Por: R$ 899,90</Text>
      </View> */
}
