import React from 'react';

import { Dimensions, View } from 'react-native';
import {
  Overlay,
  Text,
  Button,
  Icon,
  Divider,
  Input
} from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginModal = ({ isVisible, handlerLoginModal }) => (
  <Overlay
    isVisible={isVisible}
    onBackdropPress={handlerLoginModal}
    width={width}
    height={height / 1.5}
  >
    <View style={{ padding: 15 }}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          marginBottom: 30
        }}
      >
        login ecommerce.com
      </Text>
      <Button
        buttonStyle={{ backgroundColor: '#4267B2' }}
        icon={
          <Icon
            name='facebook'
            type='font-awesome'
            size={20}
            color='#4267B2'
            containerStyle={{
              right: 65,
              backgroundColor: 'white',
              width: 20
            }}
          />
        }
        title='Continue with Facebook'
      />
      <View style={{ flexDirection: 'row', top: 25 }}>
        <Divider
          style={{
            backgroundColor: 'grey',
            height: 1,
            top: 13,
            width: '40%',
            flex: 3
          }}
        />
        <Text style={{ flex: 1, fontSize: 20, left: 10 }}>ou</Text>
        <Divider
          style={{
            backgroundColor: 'grey',
            height: 1,
            top: 13,
            width: '40%',
            flex: 3
          }}
        />
      </View>

      <View style={{ marginTop: 25 }}>
        <Input placeholder='e-mail' />
        <Input placeholder='senha' />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 25 }}>
        <Text style={{ top: 10, flex: 5, fontSize: 17 }}>RECUPERAR SENHA</Text>
        <Button
          buttonStyle={{ backgroundColor: 'grey', padding: 10 }}
          title='FAZER LOGIN'
        />
      </View>
      <Button
        type='clear'
        containerStyle={{ marginTop: 25 }}
        title='CRIAR MINHA CONTA'
      />
    </View>
  </Overlay>
);

export default LoginModal;
