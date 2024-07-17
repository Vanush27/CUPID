import {colors} from '@assets/colors';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      flex: 1,

      backgroundColor: colors.backgroundMain,
    },
    wrapper: {
      marginLeft: 15,
      marginRight: 15,
    },
  });

  return {
    styles,
  };
}
