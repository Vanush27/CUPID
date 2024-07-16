import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {size} from '@assets/fonts/size';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      flex: 1,
      backgroundColor: colors.backgroundMain,
    },
    text: {
      color: 'rgba(0, 0, 0, 1)',
      fontFamily: fonts.family.sfProBold,
      fontSize: size.typography_36,
      fontWeight: '700',
    },
    wrapper: {
      marginLeft: 15,
      marginRight: 15,
    },
  });

  return {
    styles,
  };
}
