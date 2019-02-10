import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const iconSize = 26;

const IconsRight = props => {
  const { configIcon1, configIcon2 } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {configIcon1.show && (
        <Icon
          name={configIcon1.name}
          type='font-awesome'
          color='#fff'
          containerStyle={{ right: 40 }}
          size={iconSize}
        />
      )}

      {configIcon2.show && (
        <Icon
          name={configIcon2.name}
          type='font-awesome'
          color='#fff'
          size={iconSize}
        />
      )}
    </View>
  );
};

IconsRight.propTypes = {
  configIcon1: PropTypes.object.isRequired,
  configIcon2: PropTypes.object.isRequired
};

export default IconsRight;
