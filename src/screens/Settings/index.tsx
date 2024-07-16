import React from 'react';
import {SafeAreaView} from 'react-native';

import {Setting} from '@ui-modules';

import {useStyles} from './styles';

const Settings = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Setting />
    </SafeAreaView>
  );
};

export default Settings;
