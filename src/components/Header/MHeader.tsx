import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from 'react-native-elements';
import IconsRight from './IconsRight';
import IconsLeft from './IconsLeft';
import CenterComponent from './CenterComponent';
import { INavigationProps, IIcon } from '../../models/types/types';

interface IState {
  configIconLeft: IIcon;
  centerComponent: { type: string; value: string };
  configIconRight: IIcon[];
}

interface IOtherState {
  key: 'configIconLeft' | 'centerComponent' | 'configIconRight';
  value: {};
}

export default class MHeader extends Component<INavigationProps, IState> {
  state: IState = {
    configIconLeft: {
      show: true,
      name: 'bars',
    },
    centerComponent: {
      type: 'text',
      value: '',
    },
    configIconRight: [
      {
        show: true,
        name: 'search',
        style: { right: 40 },
      },
      {
        show: true,
        name: 'shopping-basket',
      },
    ],
  };

  handlerSearchBar = (text: string) => {
    const { centerComponent } = this.state;

    const newConfigIconRight = {
      name: 'times',
      show: text.length !== 0,
      style: { right: 40 },
    };

    const otherState: IOtherState = {
      key: 'centerComponent',
      value: { ...centerComponent, value: text },
    };
    this.setNewConfigRight(newConfigIconRight, 0, otherState);
  };

  setNewConfigRight = (
    config: IIcon,
    index: number,
    otherState: IOtherState,
  ) => {
    const { configIconRight } = this.state;
    const newConfigIconRight = [...configIconRight];

    newConfigIconRight[index] = config;

    if (otherState) {
      this.setState({
        configIconRight: newConfigIconRight,
      });
    } else {
      this.setState({
        configIconRight: newConfigIconRight,
      });
    }
  };

  onIconPress = (iconName: string) => {
    const { navigation } = this.props;
    if (iconName === 'bars') {
      navigation.toggleDrawer();
    }

    if (iconName === 'times') {
      const { centerComponent } = this.state;

      const newConfigIconRight = {
        name: 'times',
        show: false,
        style: { right: 40 },
      };

      const otherState: IOtherState = {
        key: 'centerComponent',
        value: { ...centerComponent, value: '' },
      };
      this.setNewConfigRight(newConfigIconRight, 0, otherState);
    }

    if (iconName === 'arrow-left') {
      this.setState({
        configIconLeft: {
          show: true,
          name: 'bars',
        },
        centerComponent: {
          type: 'text',
          value: '',
        },
        configIconRight: [
          {
            show: true,
            name: 'search',
            style: { right: 40 },
          },
          {
            show: true,
            name: 'shopping-basket',
          },
        ],
      });
    }

    if (iconName === 'search') {
      this.setState((prevState) => {
        const newIconRight = [...prevState.configIconRight];
        newIconRight[0] = { ...newIconRight[0], show: false };
        return {
          configIconLeft: { ...prevState.configIconLeft, name: 'arrow-left' },
          configIconRight: newIconRight,
          centerComponent: { ...prevState.centerComponent, type: 'input' },
        };
      });
    }
  };

  render() {
    const { configIconLeft, centerComponent, configIconRight } = this.state;

    return (
      <View style={{ marginTop: '-4%' }}>
        <Header
          leftComponent={(
            <IconsLeft
              configIcon={configIconLeft}
              onIconPress={this.onIconPress}
            />
)}
          centerComponent={(
            <CenterComponent
              type={centerComponent.type}
              onChangeText={this.handlerSearchBar}
              value={centerComponent.value}
            />
)}
          rightComponent={(
            <IconsRight
              configIcon={configIconRight}
              onPress={this.onIconPress}
            />
)}
        />
      </View>
    );
  }
}
