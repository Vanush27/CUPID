import React from 'react';
import {View, Image, TouchableOpacity, FlatList, Alert} from 'react-native';
import {useAppImages} from '@redux/hooks/useAppImages';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useStyles} from './styles';

export default function HistoryScreen() {
  const {styles} = useStyles();

  const {dispatchDeleteImage} = useAppImages();

  const {images} = useAppImages();

  const handleDeleteImage = (item: any) => {
    Alert.alert('Delete Image', 'Are you sure you want to delete this image?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          dispatchDeleteImage(item);
        },
        style: 'destructive',
      },
    ]);
  };

  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image source={{uri: item}} style={styles.image} />
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteImage(item)}>
        <Icon name="close" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={index => index.toString()}
      numColumns={3}
      contentContainerStyle={styles.grid}
    />
  );
}
