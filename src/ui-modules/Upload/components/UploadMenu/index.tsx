import React from 'react';
import {View, Text} from 'react-native';

import {ClockArrow, Menu} from '@assets/icons';

import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';
import BackButton from '@components/BackButton';

import PlusBtn from 'react-native-vector-icons/AntDesign';

const UploadMenu = () => {
  const navigation = useNavigation<any>();
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <BackButton colors={'rgba(0, 0, 0, 1)'} name={'chevron-back'} />
        <View style={styles.menu}>
          <View>
            <Text style={styles.text}>CUPID</Text>
            <Text style={styles.subText}>Regular</Text>
          </View>
        </View>
        <PlusBtn size={30} onPress={() => {}} name="plus" />
      </View>
    </View>
  );
};

export default UploadMenu;
