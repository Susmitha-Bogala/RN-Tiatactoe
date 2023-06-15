import {StyleSheet} from 'react-native';
import colors from './colors';

const {white, black} = colors;

const commonStyles = StyleSheet.create({
  whiteBGV: {
    backgroundColor: white,
  },
  padding16: {
    padding: 16,
  },
  shadowEffect: {
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowColor: black,
    shadowOpacity: 0.4,
  },
  borderRadius5: {
    borderRadius: 5,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  height50: {
    height: 50,
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
});

export default commonStyles;
