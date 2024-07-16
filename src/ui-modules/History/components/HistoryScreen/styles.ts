import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#FFB6C1',
      padding: 10,
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginVertical: 20,
    },
    grid: {
      justifyContent: 'center',
    },
    imageContainer: {
      // position: 'relative',
      margin: 5,
    },
    image: {
      width: 100,
      height: 150,
      borderRadius: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteButton: {
      position: 'absolute',
      top: 5,
      right: 5,
      backgroundColor: 'rgba(0,0,0,0.6)',
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
