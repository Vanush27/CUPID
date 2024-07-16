import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
    },

    top: {
      flex: 0.5,
    },
    bottom: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      // paddingTop: 30,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    frame: {
      backgroundColor: 'rgba(253, 150, 195, 1)',
      borderRadius: 15,
      padding: 20,
      marginTop: 20,
      alignItems: 'center',
      width: '80%',
    },
    closeButton: {
      alignSelf: 'flex-end',
    },
    closeButtonText: {
      color: 'rgba(0, 0, 0, 1)',
      fontSize: 25,
      fontFamily: fonts.family.sfProBold,
      fontWeight: 'bold',
      position: 'absolute',
      top: 40,
      left: 50,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      color: '#000',
      marginBottom: 20,
      textAlign: 'center',
    },

    frameTips: {
      backgroundColor: 'rgba(253, 150, 195, 1)',
      // borderRadius: 15,
      padding: 20,
      marginTop: 20,
      alignItems: 'center',
      width: '80%',

      borderRadius: 42,
    },

    tipsButton: {
      flexDirection: 'row',
      backgroundColor: 'rgba(253, 150, 195, 1)',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    tipsButtonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  return {
    styles,
  };
}
