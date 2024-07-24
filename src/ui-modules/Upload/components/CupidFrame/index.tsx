import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import BrainIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import CrownIcon from 'react-native-vector-icons/FontAwesome5';
import Heart from 'react-native-vector-icons/AntDesign';

import {ImagesAssets} from '@assets/images/ImagesAssets';
import {launchImageLibrary} from 'react-native-image-picker';
import {useAppImages} from '@redux/hooks/useAppImages';

import {useStyles} from './styles';
import {DIMENSIONS_HEIGHT} from '@constants';

export type TOnScrollHandler = {
  isScrolling: boolean;
  prevY: number;
};

const CupidFrame = () => {
  const {styles} = useStyles();
  const [imageUri, setImageUri] = useState<string>();

  const {dispatchSetImage} = useAppImages();

  const openImagePicker = () => {
    const options: any = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        dispatchSetImage(response?.assets[0].uri);
        setImageUri(response?.assets?.[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={openImagePicker}
        style={styles.screenshotContainer}>
        {imageUri?.length ? (
          <Image source={{uri: imageUri}} style={styles.screenshot} />
        ) : (
          <Text style={styles.screenshotText}>User's screenshot</Text>
        )}
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <View style={styles.line} />

        <Text style={styles.tapToCopyText}>👇 Tap to copy rizz 👇</Text>
        <View style={styles.line} />
      </View>

      <View>
        <View style={styles.reply}>
          <Image source={ImagesAssets.love} />

          <Text style={styles.replyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.reply}>
          <Text style={styles.image}>👑</Text>
          <Text style={styles.replyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.reply}>
          <Text style={styles.image}>🧠</Text>
          <Text style={styles.replyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CupidFrame;
