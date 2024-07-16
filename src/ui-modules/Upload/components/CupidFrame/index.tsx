import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BrainIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CrownIcon from 'react-native-vector-icons/FontAwesome5';

import {useStyles} from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import {useAppImages} from '@redux/hooks/useAppImages';

const CupidFrame = () => {
  const {styles} = useStyles();

  const [imageUri, setImageUri] = useState<string>();

  const {dispatchSetImage} = useAppImages();

  // TODO
  const [imageUris, setImageUris] = useState<string[]>([]);

  const openImagePicker = () => {
    const options: any = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        // setImageUris((prevUris: any) => [
        //   ...prevUris,
        //   response?.assets?.[0].uri,
        // ]);
        dispatchSetImage(response?.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={openImagePicker}
        style={styles.screenshotContainer}>
        {imageUris?.length ? (
          <Image source={{uri: imageUri}} style={styles.screenshot} />
        ) : (
          <Text style={styles.screenshotText}>User's screenshot</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.tapToCopyText}>👇 Tap to copy rizz 👇</Text>

      <TouchableOpacity style={styles.rizzButton}>
        <Text style={styles.rizzButtonText}>Get Rizz Reply</Text>
      </TouchableOpacity>

      <View style={styles.repliesContainer}>
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
