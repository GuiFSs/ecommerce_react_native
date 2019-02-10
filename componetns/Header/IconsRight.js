import React from 'react';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const iconSize = 26;

const IconsRight = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <Icon
      name='search'
      type='font-awesome'
      color='#fff'
      containerStyle={{ right: 40 }}
      size={iconSize}
    />
    <Icon
      name='shopping-basket'
      type='font-awesome'
      color='#fff'
      size={iconSize}
    />
  </View>
);

export default IconsRight;
