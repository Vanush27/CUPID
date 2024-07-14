import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 55,
      backgroundColor: colors.backgroundMain,
    },

    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
    },
    menu: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      fontFamily: fonts.family.syncopateRegular,
      fontSize: fonts.size.typography_48,
      fontWeight: '700',
      // fontSize: 20,
    },
  });

  return {
    styles,
  };
}
