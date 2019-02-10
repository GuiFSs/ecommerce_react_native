import React, { Component } from 'react';

import { Header } from 'react-native-elements';
import IconsRight from './IconsRight';

const iconSize = 26;

export default class MHeader extends Component {
  render() {
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', size: iconSize + 10 }}
        centerComponent={{
          text: 'MY LOGO',
          style: { color: '#fff', fontSize: 25, right: 30 }
        }}
        rightComponent={<IconsRight />}
      />
    );
  }
}
