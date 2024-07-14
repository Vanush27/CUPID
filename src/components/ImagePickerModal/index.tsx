import React from 'react';
import {SafeAreaView, Text, Image, Pressable} from 'react-native';
import Modal from 'react-native-modal';

import {ImagesAssets} from '@assets/images/ImagesAssets';
import {useStyles} from './styles';

interface ImagePickerModalProps {
  isVisible: boolean;
  onClose: () => void;
  onImageLibraryPress: () => void;
  onCameraPress: () => void;
}
const ImagePickerModal = ({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}: ImagePickerModalProps) => {
  const {styles} = useStyles();

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Image source={ImagesAssets.library} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>{'Library'}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Image source={ImagesAssets.camera} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>{'Camera'}</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

export default ImagePickerModal;
