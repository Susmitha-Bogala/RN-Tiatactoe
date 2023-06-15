import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import constants from '../constants';
import colors from '../colors';

const {cirlce, pencil, close, empty, cross, circle} = constants;
const {green, dimGrey, yellow} = colors;

const Icons = ({name}) => {
  const getName = name => {
    switch (name) {
      case empty:
        return {iconName: pencil, color: dimGrey};
      case cross:
        return {iconName: close, color: green};
      case circle:
        return {iconName: cirlce, color: yellow};
      default:
        return {iconName: pencil, color: dimGrey};
    }
  };

  return (
    <View style={{padding: 1}}>
      <Icon
        name={getName(name).iconName}
        size={28}
        color={getName(name).color}
      />
    </View>
  );
};

export default Icons;
