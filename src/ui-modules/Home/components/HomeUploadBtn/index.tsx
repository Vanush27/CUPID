import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';

import Heart from 'react-native-vector-icons/AntDesign';

const HomeUploadBtn = () => {
  const navigation = useNavigation<any>();
  const {styles} = useStyles();

  const handleUpload = () => {
    navigation.navigate('UploadMenu');
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Heart name="heart" size={30} color={'red'} />
      </View>

      <TouchableOpacity style={styles.uploadBtn} onPress={handleUpload}>
        <Text style={styles.buttonText}>Upload Screenshot</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeUploadBtn;
