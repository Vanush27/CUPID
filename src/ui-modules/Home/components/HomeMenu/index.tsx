import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ClockArrow, Menu} from '@assets/icons';

import {useStyles} from './styles';

const HomeMenu = () => {
  const navigation = useNavigation<any>();
  const {styles} = useStyles();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const handleHistory = () => {
    navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={openDrawer}>
          <Menu height={20} width={38} />
        </TouchableOpacity>

        <View>
          <Text style={styles.text}>CUPID</Text>
          <Text style={styles.subText}>Regular</Text>
        </View>

        <TouchableOpacity onPress={handleHistory}>
          <ClockArrow height={40} width={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeMenu;
