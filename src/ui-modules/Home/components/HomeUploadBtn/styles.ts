import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      paddingTop: 35,

      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: colors.primaryBlack,
      alignItems: 'center',
      justifyContent: 'center',
    },

    heart: {
      // position: 'absolute',
      // top: 10,
      // left: 10,
      // zIndex: 1,
    },
    uploadBtn: {
      width: 310,
      height: 70,
      borderRadius: 50,
      // textAlign: 'center',
      backgroundColor: colors.primaryBlack,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 26,
      textAlign: 'center',
      alignItems: 'center',
    },
  });

  return {
    styles,
  };
}
