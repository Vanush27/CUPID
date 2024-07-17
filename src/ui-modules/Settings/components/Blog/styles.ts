import {StyleSheet} from 'react-native';
import {lineHeight, size} from '@assets/fonts/size';
import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      padding: 9,
      backgroundColor: '#000',
    },
    header: {
      fontSize: size.typography_34,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '700',
      color: colors.white,
      marginTop: 15,
      marginBottom: 8,
    },
    subHeader: {
      fontSize: 25,
      fontWeight: '400',
      fontFamily: fonts.family.sfProBold,
      color: '#fff',
      marginBottom: 30,
    },
    paragraph: {
      fontFamily: fonts.family.sfProRegular,
      fontWeight: '400',
      fontSize: 20,
      lineHeight: lineHeight.lineHeight_18,
      color: '#fff',
      marginBottom: 20,
    },
  });

  return {
    styles,
  };
}
