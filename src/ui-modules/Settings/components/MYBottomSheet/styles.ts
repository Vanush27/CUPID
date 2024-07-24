import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: 'red',
      // justifyContent: 'center',
    },

    bottom: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 90,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
    },
    bottomSheet: {
      backgroundColor: '#dcdcdc',
    },

    frame: {
      backgroundColor: 'rgba(253, 150, 195, 1)',
      borderRadius: 15,
      padding: 25,
    },

    box: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 235,
    },

    closeButtonText: {
      color: 'rgba(0, 0, 0, 1)',
      fontSize: 30,
      fontFamily: fonts.family.sfProBold,
      fontWeight: 'bold',
      position: 'absolute',
      top: 29,
      left: 65,
    },
    title: {
      fontSize: 28,
      color: 'rgba(0, 0, 0, 1)',
      marginBottom: 10,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '600',
      marginRight: 10,
    },
    description: {
      fontSize: 18,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '400',
      width: 220,
      color: 'rgba(0, 0, 0, 1)',
    },

    frameTips: {
      backgroundColor: 'rgba(253, 150, 195, 1)',

      padding: 10,
      marginTop: 20,
      width: 290,

      borderRadius: 42,
    },

    tipsButton: {
      flexDirection: 'row',

      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    tipsWrapper: {
      flexDirection: 'row',
    },

    tipsButtonText: {
      paddingRight: 15,
      fontSize: 31,
      color: colors.primaryBlack,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '400',
    },
  });

  return {
    styles,
  };
}
