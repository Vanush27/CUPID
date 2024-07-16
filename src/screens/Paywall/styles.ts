import {colors} from '@assets/colors';
import {size} from '@assets/fonts/size';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryBlack,
    },
  });

  return {
    styles,
  };
}
