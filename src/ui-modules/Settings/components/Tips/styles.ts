import {StyleSheet} from 'react-native';
import {size} from '@assets/fonts/size';
import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 55,
      backgroundColor: colors.primaryBlack,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      color: colors.white,
      fontSize: size.typography_44,
      fontWeight: '700',
      fontFamily: fonts.family.syncopateBold,
    },
    content: {
      padding: 10,
    },
    tipButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.tipsPing,
      padding: 30,
      borderRadius: 25,
      marginBottom: 15,
    },
    tipText: {
      color: colors.primaryBlack,
      fontSize: 28,
      // fontFamily: fonts.family.sfProBold,
      fontWeight: '700',
      flexShrink: 1,
    },
  });

  return {
    styles,
  };
}
