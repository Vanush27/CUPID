import React from 'react';
import {SafeAreaView} from 'react-native';

import BackButton from '@components/BackButton';
import {PaywallScreen} from '@ui-modules';

import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Paywall = () => {
  const {styles} = useStyles();

  const navigation = useNavigation<any>();

  const handleHome = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackButton colors={'rgba(237, 33, 124, 1)'} name={'chevron-back'} />
      <PaywallScreen handleHome={handleHome} />
    </SafeAreaView>
  );
};

export default Paywall;
