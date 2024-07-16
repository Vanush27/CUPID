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
    rizzButton: {
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    rizzButtonText: {
      color: '#FFF',
      fontSize: 16,
    },
    repliesContainer: {
      // flexDirection: 'column',
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
  });

  return {
    styles,
  };
}
