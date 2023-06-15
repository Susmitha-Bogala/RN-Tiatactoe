import Snackbar from 'react-native-snackbar';

const SnackBar = (text, textColor, backgroundColor) => {
  return Snackbar.show({
    text,
    textColor,
    backgroundColor,
  });
};

export {SnackBar};
