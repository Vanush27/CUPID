import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ClockArrow, Menu} from '@assets/icons';

import {useStyles} from './styles';

import {MyBottomSheet} from '@ui-modules';

const HomeMenu = ({handlePresentModalPress, bottomSheetModalRef}: any) => {
  const navigation = useNavigation<any>();
  const {styles} = useStyles();

  const handleHistory = () => {
    navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={handlePresentModalPress}>
          <Menu height={20} width={38} />
        </TouchableOpacity>

        <MyBottomSheet bottomSheetModalRef={bottomSheetModalRef} />

        <View style={styles.boxTitile}>
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
