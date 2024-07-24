import {StyleSheet} from 'react-native';
import {fonts} from '@assets/fonts';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {paddingTop: 10},

    // container: {
    //   // flex: 1,
    //   // justifyContent: 'center',
    //   // alignItems: 'center',
    // },
    contentContainer: {
      // flex: 1,
      alignItems: 'center',
      backgroundColor: 'red',
    },

    boxTitile: {
      paddingRight: 30,
      alignContent: 'center',
    },
    menu: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      fontFamily: fonts.family.syncopateRegular,
      fontSize: 40,
      fontWeight: '600',
    },
    subText: {
      fontFamily: fonts.family.sfProRegular,
      fontSize: fonts.size.typography_25,
      textAlign: 'center',
    },
  });

  return {
    styles,
  };
}
