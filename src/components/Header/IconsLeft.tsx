import React from 'react';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { IIcon } from '../../models/types/types';

const iconSize = 26;

interface IProps {
  configIcon: IIcon;
  onIconPress: Function;
}

const IconsLeft: React.SFC<IProps> = ({ configIcon, onIconPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {configIcon.show && (
        <Icon
          name={configIcon.name}
          type='font-awesome'
          color='#fff'
          size={iconSize}
          onPress={() => onIconPress(configIcon.name)}
        />
      )}
    </View>
  );
};

export default IconsLeft;
