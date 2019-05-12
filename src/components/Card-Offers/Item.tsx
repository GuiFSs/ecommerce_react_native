import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface IProps {
  imagem: string;
  descricao: string;
  preco: number;
}

const Item: React.SFC<IProps> = ({ imagem, descricao, preco }) => (
  <View>
    <Image style={styles.imagem} source={{ uri: imagem }} />
    <Text numberOfLines={1} style={styles.txtTitle}>
      {descricao}
    </Text>
    <Text style={styles.txtOldPrice}>{preco - 100}</Text>
    <Text style={styles.txtNewPrice}>{preco}</Text>
  </View>
);

const styles = StyleSheet.create({
  imagem: {
    flex: 1,
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginBottom: 10
  },
  txtTitle: {
    fontWeight: 'bold'
  },
  txtOldPrice: {
    fontSize: 15
  },
  txtNewPrice: {
    fontSize: 21
  }
});

export default Item;
