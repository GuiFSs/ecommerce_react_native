import React, { Component } from 'react';

import { Header } from 'react-native-elements';
import IconsRight from './IconsRight';

const iconSize = 26;

export default class MHeader extends Component {
  state = {
    configIcon1: {
      show: true,
      name: 'search'
    },
    configIcon2: {
      show: true,
      name: 'shopping-basket'
    }
  };

  render() {
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', size: iconSize + 10 }}
        centerComponent={{
          text: 'MY LOGO',
          style: { color: '#fff', fontSize: 25, right: 30 }
        }}
        rightComponent={
          <IconsRight
            configIcon1={this.state.configIcon1}
            configIcon2={this.state.configIcon2}
          />
        }
      />
    );
  }
}
