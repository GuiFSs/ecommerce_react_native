import React, { Component } from "react";
import { Card } from "react-native-elements";

import Item from "./item";
import { getList } from "./ItemAction";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CardOffers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getList();
    console.log("teste");
  }
  renderItem() {
    //props List esta vazio!!
    const list = this.props.list || [];
    console.log(list);
    return list.map(produto => {
      <Item
        img={produto.imagens[0]}
        title={produto.descricao}
        price={produto.preco}
      />;
    });
  }
  render() {
    return (
      <Card title={"OFERTAS DO DIA"} containerStyle={{ marginBottom: 20 }}>
        {this.renderItem()}
      </Card>
    );
  }
}
const mapStateToProps = state => ({ list: state.item.list });
const mapDipatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(CardOffers);
