import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from 'react-native-elements';
import IconsRight from './IconsRight';
import IconsLeft from './IconsLeft';

export default class MHeader extends Component {
  state = {
    configIconLeft: {
      show: true,
      name: 'bars'
    },
    configIcon1: {
      show: true,
      name: 'search'
    },
    configIcon2: {
      show: true,
      name: 'shopping-basket'
    }
  };

  onIconLeftPress = () => {
    const iconName = this.state.configIconLeft.name;
    if (iconName === 'bars') {
      this.props.navigation.toggleDrawer();
    }
  };

  render() {
    return (
      <View>
        <Header
          leftComponent={
            <IconsLeft
              configIcon={this.state.configIconLeft}
              onIconLeftPress={this.onIconLeftPress}
            />
          }
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
      </View>
    );
  }
}
