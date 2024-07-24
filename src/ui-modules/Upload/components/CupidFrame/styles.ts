import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 150,
      padding: 15,
    },
    text: {
      padding: 20,
    },
    buttonContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
    fixedButtonContainer: {
      position: 'absolute',
      bottom: 30,
      left: 100,
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
    image: {fontSize: 30},
  });

  return {
    styles,
  };
}
