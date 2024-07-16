import React from 'react';
import {View, Image} from 'react-native';
import {ImagesAssets} from '@assets/images/ImagesAssets';

import {useStyles} from './styles';

const HomeUploadImage = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <Image source={ImagesAssets.uploadImage} style={styles.uploadImage} />
    </View>
  );
};

export default HomeUploadImage;
