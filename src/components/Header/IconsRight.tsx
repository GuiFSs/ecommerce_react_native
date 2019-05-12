import React from 'react';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { IIcon } from '../../models/types/types';

const iconSize = 26;

interface IProps {
  configIcon: IIcon[];
  onPress: Function;
}

const IconsRight: React.SFC<IProps> = ({ configIcon, onPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {configIcon.map((config, i) => {
        return (
          config.show && (
            <Icon
              key={i}
              name={config.name}
              type='font-awesome'
              color='#fff'
              containerStyle={config.style}
              size={iconSize}
              onPress={() => onPress(config.name)}
            />
          )
        );
      })}
    </View>
  );
};

export default IconsRight;
