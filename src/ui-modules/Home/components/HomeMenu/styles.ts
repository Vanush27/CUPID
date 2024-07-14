import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {},

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
