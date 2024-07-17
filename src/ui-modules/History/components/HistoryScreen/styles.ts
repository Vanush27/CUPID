import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
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
