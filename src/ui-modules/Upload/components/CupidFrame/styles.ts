import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 0.8,
      padding: 15,
    },

    screenshotContainer: {
      marginLeft: 40,
      marginRight: 40,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 20,
      height: 520,

      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    subtitle: {
      fontSize: 16,
      color: '#000',
    },

    screenshot: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    screenshotText: {
      color: 'rgba(0, 0, 0, 1)',
      fontSize: 28,
      fontFamily: fonts.family.sfProRegular,
      fontWeight: 'black',
    },
    tapToCopyText: {
      textAlign: 'center',
      fontSize: 16,
      marginBottom: 10,
      color: '#000',
    },
    lineContainer: {
      flexDirection: 'row',

      padding: 20,
    },
    line: {
      marginTop: 8,
      flex: 1,
      height: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },

    rizzButtonText: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: fonts.size.typography_28,
    },

    reply: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    replyText: {
      marginLeft: 15,
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 23,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '400',
    },

    box: {
      width: 55,
      height: 55,
      borderRadius: 35,
      backgroundColor: colors.primaryBlack,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,

      position: 'absolute',
      top: 9,
      left: 3,
      zIndex: 1,
    },

    rizzButton: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
      padding: 13,
      borderRadius: 50,
      alignItems: 'center',
      position: 'absolute',
      top: 8,
      right: 3,
      width: 290,
      zIndex: 1,
    },
  });

  return {
    styles,
  };
}
