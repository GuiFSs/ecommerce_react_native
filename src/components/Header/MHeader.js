import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from 'react-native-elements';
import IconsRight from './IconsRight';
import IconsLeft from './IconsLeft';
import CenterComponent from './CenterComponent';

export default class MHeader extends Component {
  state = {
    configIconLeft: {
      show: true,
      name: 'bars'
    },
    centerComponent: {
      type: 'text',
      value: ''
    },
    configIconRight: [
      {
        show: true,
        name: 'search',
        style: { right: 40 }
      },
      {
        show: true,
        name: 'shopping-basket'
      }
    ]
  };

  handlerSearchBar = text => {
    const { centerComponent } = this.state;

    const newConfigIconRight = {
      name: 'times',
      show: text.length !== 0,
      style: { right: 40 }
    };

    const otherState = {
      key: 'centerComponent',
      value: { ...centerComponent, value: text }
    };
    this.setNewConfigRight(newConfigIconRight, 0, otherState);
  };

  setNewConfigRight = (config, index, otherState) => {
    const { configIconRight } = this.state;
    const newConfigIconRight = [...configIconRight];
    newConfigIconRight[index] = config;

    if (otherState) {
      this.setState({
        configIconRight: newConfigIconRight,
        [otherState.key]: otherState.value
      });
    } else {
      this.setState({
        configIconRight: newConfigIconRight
      });
    }
  };

  onIconPress = iconName => {
    if (iconName === 'bars') {
      this.props.navigation.toggleDrawer();
    }

    if (iconName === 'times') {
      const { centerComponent } = this.state;

      const newConfigIconRight = {
        name: 'times',
        show: false,
        style: { right: 40 }
      };

      const otherState = {
        key: 'centerComponent',
        value: { ...centerComponent, value: '' }
      };
      this.setNewConfigRight(newConfigIconRight, 0, otherState);
    }

    if (iconName === 'arrow-left') {
      this.setState({
        configIconLeft: {
          show: true,
          name: 'bars'
        },
        centerComponent: {
          type: 'text'
        },
        configIconRight: [
          {
            show: true,
            name: 'search',
            style: { right: 40 }
          },
          {
            show: true,
            name: 'shopping-basket'
          }
        ]
      });
    }

    if (iconName === 'search') {
      this.setState(prevState => {
        const newIconRight = [...prevState.configIconRight];
        newIconRight[0] = { ...newIconRight, show: false };
        return {
          configIconLeft: { ...prevState.configIconLeft, name: 'arrow-left' },
          configIconRight: newIconRight,
          centerComponent: { ...prevState, type: 'input' }
        };
      });
    }
  };

  render() {
    const { configIconLeft, centerComponent, configIconRight } = this.state;

    return (
      <View style={{ top: 0 }}>
        <Header
          leftComponent={
            <IconsLeft
              configIcon={configIconLeft}
              onIconPress={this.onIconPress}
            />
          }
          centerComponent={
            <CenterComponent
              type={centerComponent.type}
              onChangeText={this.handlerSearchBar}
              value={centerComponent.value}
            />
          }
          rightComponent={
            <IconsRight
              configIcon={configIconRight}
              onPress={this.onIconPress}
            />
          }
        />
      </View>
    );
  }
}
