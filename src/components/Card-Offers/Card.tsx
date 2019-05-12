import React, { Component, ReactElement } from 'react';
import { Card, Text } from 'react-native-elements';
import { ActivityIndicator, View } from 'react-native';

import Item from './Item';
import { connect } from 'react-redux';

import { getProdutos } from '../../actions/produtos';
import { AppState } from '../../reducers';
import { IProdutoState } from '../../reducers/produtos';

interface IProps {
  produtos: IProdutoState;
  getProdutos: typeof getProdutos;
}

class CardOffers extends Component<IProps> {
  componentDidMount() {
    this.props.getProdutos();
  }

  render() {
    const { loading, produtos } = this.props.produtos;
    let listItems = <ActivityIndicator size='large' color='#E60014' />;
    if (!loading) {
      listItems = (
        <View>
          {produtos.map(produto => (
            <Item
              key={produto._id}
              imagem={produto.imagens[0]}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          ))}
        </View>
      );
    }

    return (
      <Card title={'OFERTAS DO DIA'} containerStyle={{ marginBottom: 20 }}>
        {listItems}
      </Card>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  produtos: state.produtos,
  getProdutos: getProdutos
});
export default connect(
  mapStateToProps,
  { getProdutos }
)(CardOffers);
