import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Heart from 'react-native-vector-icons/AntDesign';

import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';

const HomeUploadBtn = () => {
  const navigation = useNavigation<any>();
  const {styles} = useStyles();

  const handleUpload = () => {
    navigation.navigate('UploadFrame');
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={ImagesAssets.love} />
        {/* <Heart name="heart" size={30} color={'red'} /> */}
      </View>

      <View>
        <TouchableOpacity style={styles.uploadBtn} onPress={handleUpload}>
          <Text style={styles.buttonText}>Upload Screenshot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeUploadBtn;
