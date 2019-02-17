import React from 'react';
import { View, TextInput } from 'react-native';
import { Text } from 'react-native-elements';

const CenterComponent = props => {
  const { type, onChangeText, value } = props;

  let component = (
    <Text h3 style={{ color: '#fff' }}>
      MY LOGO
    </Text>
  );

  if (type === 'input') {
    component = (
      <TextInput
        placeholderTextColor='#fff'
        placeholder='tem tuuudo, pode procurar :)'
        style={{ color: '#fff', fontSize: 18 }}
        autoFocus={true}
        onChangeText={onChangeText}
        value={value}
      />
    );
  }

  return <View style={{ right: 30 }}>{component}</View>;
};

export default CenterComponent;
