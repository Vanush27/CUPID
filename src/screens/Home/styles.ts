import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      flex: 1,

      backgroundColor: colors.backgroundMain,
    },
    wrapper: {
      marginLeft: 15,
      marginRight: 15,
    },

    boxTitile: {
      paddingTop: 40,
      alignItems: 'center',
    },
    text: {
      fontSize: 28,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '500',
      color: 'rgba(0, 0, 0, 1)',
    },
  });

  return {
    styles,
  };
}
