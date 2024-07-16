import {SafeAreaView} from 'react-native';
import {useStyles} from './styles';

import React from 'react';
import BackButton from '@components/BackButton';
import {PaywallScreen} from '@ui-modules';

const Paywall = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <BackButton colors={'rgba(237, 33, 124, 1)'} name={'chevron-back'} />
      <PaywallScreen />
    </SafeAreaView>
  );
};

export default Paywall;
