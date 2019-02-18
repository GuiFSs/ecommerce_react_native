import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

import Item from './item';
import { connect } from 'react-redux';

import { getProdutos } from '../../actions/produtos';

class CardOffers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProdutos();
  }

  render() {
    const { loading, produtos } = this.props.produtos;

    let listItems = <ActivityIndicator size='large' color='#E60014' />;

    if (loading === false) {
      listItems = produtos.map(produto => (
        <Item
          key={produto._id}
          img={produto.imagens[0]}
          title={produto.descricao}
          price={produto.preco}
        />
      ));
    }

    return (
      <Card title={'OFERTAS DO DIA'} containerStyle={{ marginBottom: 20 }}>
        {listItems}
      </Card>
    );
  }
}
const mapStateToProps = state => ({
  produtos: state.produtos
});
export default connect(
  mapStateToProps,
  { getProdutos }
)(CardOffers);
