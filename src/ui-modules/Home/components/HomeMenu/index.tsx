import React from 'react';
import {View, Text} from 'react-native';

import {ClockArrow, Menu} from '@assets/icons';

import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeMenu = () => {
  const navigation = useNavigation<any>();
  const {styles} = useStyles();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Menu height={20} width={38} onPress={openDrawer} />
        <View>
          <Text>CUPID</Text>
          <Text>Regular</Text>
        </View>

        <ClockArrow height={40} width={40} onPress={openDrawer} />
      </View>
    </View>
  );
};

export default HomeMenu;
