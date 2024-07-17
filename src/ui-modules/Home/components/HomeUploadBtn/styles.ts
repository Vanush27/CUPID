import {StyleSheet} from 'react-native';
import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      flexDirection: 'row',
    },
    box: {
      width: 65,
      height: 65,
      borderRadius: 35,
      backgroundColor: colors.primaryBlack,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
    },

    uploadBtn: {
      width: 275,
      height: 65,
      borderRadius: 50,
      backgroundColor: colors.primaryBlack,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: colors.white,
      fontSize: fonts.size.typography_28,
    },
  });

  return {
    styles,
  };
}
