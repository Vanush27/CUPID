import {StyleSheet} from 'react-native';
import {fonts} from '@assets/fonts';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {paddingTop: 10},
    menu: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      fontFamily: fonts.family.syncopateRegular,
      fontSize: fonts.size.typography_44,
      fontWeight: '700',
    },
    subText: {
      fontFamily: fonts.family.sfProRegular,
      fontSize: fonts.size.typography_25,
      textAlign: 'center',
    },
  });

  return {
    styles,
  };
}
