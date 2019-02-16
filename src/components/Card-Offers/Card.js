import React, { Component } from "react";
import { Card } from "react-native-elements";
import Item from "./item";
export default class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card title={"OFERTAS DO DIA"} containerStyle={{ marginBottom: 20 }}>
        <Item />
      </Card>
    );
  }
}
