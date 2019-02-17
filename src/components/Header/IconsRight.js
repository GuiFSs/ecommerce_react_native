import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const iconSize = 26;

const IconsRight = props => {
  const { configIcon, onPress } = props;

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
              containerStyle={config.style || {}}
              size={iconSize}
              onPress={() => onPress(config.name)}
            />
          )
        );
      })}
    </View>
  );
};

IconsRight.propTypes = {
  configIcon: PropTypes.array.isRequired
};

export default IconsRight;
