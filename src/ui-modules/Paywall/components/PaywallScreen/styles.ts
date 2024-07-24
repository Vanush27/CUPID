import {StyleSheet} from 'react-native';
import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {size} from '@assets/fonts/size';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      marginLeft: 20,
      marginRight: 20,
    },

    benefitContainer: {
      marginBottom: 20,
    },
    benefit: {
      margin: 20,
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginVertical: 5,
    },
    emoji: {
      fontSize: 32,
    },
    text: {
      marginLeft: 20,
      color: colors.white,
      fontFamily: fonts.family.sfProBold,
      fontSize: size.typography_25,
      fontWeight: '400',
    },
    buttonContainer: {
      alignItems: 'center',
      backgroundColor: '#363636',
      borderRadius: 10,
      padding: 35,
      shadowOffset: {
        width: 3,
        height: 3,
      },
      borderColor: 'rgba(0, 166, 118, 1)',
      borderWidth: 3,
      shadowColor: 'rgba(0, 166, 118, 1)',
      shadowOpacity: 0.9,
      shadowRadius: 10,
      elevation: 5,

      position: 'relative',
    },
    rizzGod: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: size.typography_16,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '700',
      paddingLeft: 10,
      paddingRight: 10,
    },
    buttonGradient: {
      position: 'absolute',
      top: -20,

      borderRadius: 50,
      padding: 10,
    },

    buttonText: {
      color: '#89cddc',
      fontSize: 30,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '900',
    },
    elevate: {
      marginBottom: 12,
    },
    trialText: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 20,
      marginBottom: 5,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '700',
    },

    buttonUnlockGradient: {
      borderRadius: 50,
      padding: 10,
      marginBottom: 10,
      width: 273,
      alignItems: 'center',
    },

    priceText: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 15,
      fontFamily: fonts.family.sfProRegular,
    },
  });

  return {
    styles,
  };
}
