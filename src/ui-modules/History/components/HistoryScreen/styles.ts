import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {},

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginVertical: 20,
    },
    grid: {
      justifyContent: 'center',
      paddingBottom: 100,
    },
    imageContainer: {
      margin: 5,
    },
    image: {
      width: 111,
      height: 150,
      borderRadius: 19,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    screenshotTextUser: {
      position: 'absolute',
      color: 'white',
      bottom: 70,
      left: 30,
      fontSize: 15,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '500',
    },
    screenshotText: {
      position: 'absolute',
      color: 'white',
      bottom: 53,
      left: 20,
      fontSize: 15,
      fontFamily: fonts.family.sfProBold,
      fontWeight: '500',
    },
    deleteButton: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      borderRadius: 15,
      padding: 2,
    },
    addButton: {
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 5,
      alignSelf: 'center',
      marginTop: 20,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

  return {
    styles,
  };
}
