import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      paddingBottom: 20,
    },
    uploadImage: {
      width: 320,
      height: 325,
      margin: 10,
    },
  });

  return {
    styles,
  };
}
