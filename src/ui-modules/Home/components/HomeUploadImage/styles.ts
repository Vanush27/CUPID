import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      // shadowOffset: {width: 1, height: 1},
      // shadowColor: '#94f15d',
      // shadowOpacity: 0.7,
      // elevation: 3,
      // backgroundColor: '#ccc',
      // shadowRadius: 2,
    },
    uploadImage: {
      margin: 10,
    },
  });

  return {
    styles,
  };
}
