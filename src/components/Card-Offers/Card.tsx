import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { ActivityIndicator, View } from 'react-native';

import { connect } from 'react-redux';
import Item from './Item';

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
    let listItems = <ActivityIndicator size="large" color="#E60014" />;
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
      <Card title="OFERTAS DO DIA" containerStyle={{ marginBottom: 20 }}>
        {listItems}
      </Card>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  produtos: state.produtos,
  getProdutos,
});
export default connect(
  mapStateToProps,
  { getProdutos },
)(CardOffers);
