import React from 'react';
import {View, Image} from 'react-native';

import {useStyles} from './styles';

import {ImagesAssets} from '@assets/images/ImagesAssets';

const HomeUploadImage = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <Image source={ImagesAssets.uploadImage} style={styles.uploadImage} />
    </View>
  );
};

export default HomeUploadImage;
