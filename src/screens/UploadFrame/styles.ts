import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundMain,
    },

    buttonStyle: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 30,
      right: 15,
    },

    box: {
      width: 55,
      height: 55,
      borderRadius: 35,
      backgroundColor: colors.primaryBlack,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,

      zIndex: 1,
    },

    rizzButton: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
      padding: 13,
      borderRadius: 50,
      alignItems: 'center',

      width: 290,
      zIndex: 1,
    },
    rizzButtonText: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: fonts.size.typography_28,
    },
  });

  return {
    styles,
  };
}
