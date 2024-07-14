import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {useStyles} from './styles';

import React from 'react';

const Paywall = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Paywall'}</Text>
    </SafeAreaView>
  );
};

export default Paywall;
