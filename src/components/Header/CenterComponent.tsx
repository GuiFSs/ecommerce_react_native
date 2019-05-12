import React from 'react';
import { View, TextInput } from 'react-native';
import { Text } from 'react-native-elements';

interface IProps {
  type: string;
  onChangeText(text: string): void;
  value: string;
}

const CenterComponent: React.SFC<IProps> = ({ type, onChangeText, value }) => {
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
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    );
  }

  return <View style={{ right: 30 }}>{component}</View>;
};

export default CenterComponent;
