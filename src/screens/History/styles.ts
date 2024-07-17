import {StyleSheet} from 'react-native';
import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {size} from '@assets/fonts/size';

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
      fontSize: size.typography_34,
      fontWeight: '700',
      marginLeft: 95,
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 20,
    },
  });

  return {
    styles,
  };
}
