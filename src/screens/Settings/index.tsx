import React from 'react';
import {View} from 'react-native';
import {Setting} from '@ui-modules';

import {useStyles} from './styles';

const Settings = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <Setting />
    </View>
  );
};

export default Settings;
