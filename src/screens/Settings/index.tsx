import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {useStyles} from './styles';

import React from 'react';

const Settings = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Settings'}</Text>
    </SafeAreaView>
  );
};

export default Settings;
