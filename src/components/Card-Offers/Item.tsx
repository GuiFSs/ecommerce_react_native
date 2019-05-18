import * as React from 'react';
import {
  View, Image, Text, StyleSheet,
} from 'react-native';

interface IProps {
  imagem: string;
  descricao: string;
  preco: number;
}

const Item: React.SFC<IProps> = ({ imagem, descricao, preco }: IProps) => (
  <View>
    <Image style={styles.imagem} source={{ uri: imagem }} />
    <Text numberOfLines={1} style={styles.txtTitle}>
      {descricao}
    </Text>
    <Text style={styles.txtOldPrice}>
      {`de R$: ${(preco + (20 / 100) * preco).toFixed(2)}`}
    </Text>
    <Text style={styles.txtNewPrice}>
      {`R$: ${preco.toFixed(2)}`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  imagem: {
    flex: 1,
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  txtTitle: {
    fontWeight: 'bold',
  },
  txtOldPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  txtNewPrice: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Item;
