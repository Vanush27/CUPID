import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

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
      fontSize: 24,
      fontWeight: 'bold',
    },
    content: {
      padding: 10,
    },
    tipButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.tipsPing,
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
    },
    tipText: {
      color: colors.primaryBlack,
      fontSize: 28,
      fontFamily: fonts.family.sfProBold,
      fontWeight: 700,
      flexShrink: 1,
    },
  });

  return {
    styles,
  };
}
