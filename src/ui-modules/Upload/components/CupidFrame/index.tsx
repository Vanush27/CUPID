import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import BrainIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CrownIcon from 'react-native-vector-icons/FontAwesome5';
import Heart from 'react-native-vector-icons/AntDesign';

import {launchImageLibrary} from 'react-native-image-picker';
import {useAppImages} from '@redux/hooks/useAppImages';

import {useStyles} from './styles';

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
        <View style={styles.box}>
          <Heart name="heart" size={30} color={'red'} />
        </View>

        <TouchableOpacity style={styles.rizzButton}>
          <Text style={styles.rizzButtonText}>Get Rizz Reply</Text>
        </TouchableOpacity>

        <View style={styles.reply}>
          <Icon name="heart" size={20} color="#000" />
          <Text style={styles.replyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.reply}>
          <CrownIcon name="crown" size={20} color="#000" />
          <Text style={styles.replyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.reply}>
          <BrainIcon name="brain" size={20} color="#000" />
          <Text style={styles.replyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CupidFrame;
