import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {size} from '@assets/fonts/size';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#000',
      // alignItems: 'center',
      justifyContent: 'space-evenly',
      // paddingTop: 40,
      marginLeft: 20,
      marginRight: 20,
    },

    matchImage: {
      // margin: 10,
    },
    benefitContainer: {
      // flex: 1,
      // alignContent: 'center',
      alignItems: 'flex-start',
      // marginTop: 20,
      // width: '100%',
      justifyContent: 'space-around',
      // marginLeft: 45,
    },
    benefit: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      // color: colors.white,
      // fontFamily: fonts.family.sfProBold,
      // fontSize: size.typography_25,
      // fontWeight: '400',
      marginVertical: 5,
    },
    emoji: {
      fontSize: 24,
      // paddingRight: 20,
      // paddingLeft: 20,
      // fontWeight: '400',
      // fontSize: 25,
    },
    text: {
      // paddingLeft: 20,
      // paddingRight: 20,
      // color: 'green',
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
      padding: 40,
      shadowOffset: {
        width: 2,
        height: 3,
      },

      borderWidth: 3,
      shadowColor: 'rgba(0, 166, 118, 1)',
      shadowOpacity: 0.9, // Shadow opacity for iOS
      shadowRadius: 7, // Shadow radius for iOS
      elevation: 5, // Shadow for Android

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
      top: -10,

      borderRadius: 50,
      padding: 10,
    },

    buttonText: {
      color: '#89cddc',
      fontSize: 30,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '900',
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
