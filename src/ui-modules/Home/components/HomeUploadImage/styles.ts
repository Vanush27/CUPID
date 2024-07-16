import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
    },
    uploadImage: {
      margin: 10,
    },
  });

  return {
    styles,
  };
}
