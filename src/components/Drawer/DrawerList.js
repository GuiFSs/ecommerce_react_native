import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import { ListItem, Icon, Text } from 'react-native-elements';

import { NavigationActions } from 'react-navigation';
import LoginModal from '../LoginModal/LoginModal';

export default class DrawerList extends Component {
  state = {
    showLoginModal: false,
    list: [
      {
        title: 'destaques',
        icon: 'home',
        routeName: 'home'
      },
      {
        title: 'departamentos',
        icon: 'list-ul',
        routeName: 'departamentos'
      }
    ]
  };
  onPressItem = route => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  handlerLoginModal = () => {
    console.log('pressed');

    this.setState(prevState => ({
      showLoginModal: !prevState.showLoginModal
    }));
  };

  render() {
    const { list, showLoginModal } = this.state;

    return (
      <View>
        <View style={styles.userView} onTouchEnd={this.handlerLoginModal}>
          <Icon
            name='person'
            type='material'
            color='#DADADA'
            size={60}
            containerStyle={{ left: 20, top: 10 }}
          />
          <View>
            <Text style={{ ...styles.textUser, ...styles.textLogin }}>
              Faça seu login
            </Text>

            <Text style={{ ...styles.textUser, ...styles.textCadastro }}>
              ou cadastre-se.
            </Text>
          </View>
        </View>

        <LoginModal
          isVisible={showLoginModal}
          handlerLoginModal={this.handlerLoginModal}
        />

        <ScrollView>
          <View>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, type: 'font-awesome' }}
                onPress={() => this.onPressItem(item.routeName)}
                titleStyle={{ color: '#000' }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userView: {
    backgroundColor: '#E60014',
    height: 80,
    flexDirection: 'row'
  },
  textUser: {
    top: 10,
    left: 30
  },
  textLogin: {
    color: '#fff',
    fontSize: 22
  },
  textCadastro: {
    color: '#DADADA',
    fontSize: 16
  }
});
