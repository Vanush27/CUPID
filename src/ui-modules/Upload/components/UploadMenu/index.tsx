import React from 'react';
import {View, Text} from 'react-native';

import BackButton from '@components/BackButton';

import PlusBtn from 'react-native-vector-icons/AntDesign';

import {useStyles} from './styles';

const UploadMenu = () => {
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
        <PlusBtn size={32} onPress={() => {}} name="plus" />
      </View>
    </View>
  );
};

export default UploadMenu;
