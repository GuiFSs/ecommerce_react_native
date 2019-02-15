import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const iconSize = 26;

const IconsLeft = props => {
  const { configIcon, onIconLeftPress } = props;

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
          onPress={onIconLeftPress}
        />
      )}
    </View>
  );
};

IconsLeft.propTypes = {
  configIcon: PropTypes.object.isRequired
};

export default IconsLeft;
