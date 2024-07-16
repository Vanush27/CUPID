import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useStyles} from './styles';
import {useAppImages} from '@redux/hooks/useAppImages';

export default function HistoryScreen() {
  const {styles} = useStyles();
  // const [images, setImages] = useState([]);

  const {images} = useAppImages();

  console.warn(images, 'images');
  const handleDeleteImage = (index: number) => {
    Alert.alert('Delete Image', 'Are you sure you want to delete this image?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const newImages = [...images];
          newImages.splice(index, 1);
          // setImages(newImages);
        },
        style: 'destructive',
      },
    ]);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.imageContainer}>
      <Image source={{uri: item}} style={styles.image} />
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteImage(index)}>
        <Icon name="close" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  // TODO
  //   <ScrollView horizontal style={styles.imageScrollView}>
  //   {imageUris.map((uri, index) => (
  //     <Image key={index} source={{uri}} style={styles.screenshot} />
  //   ))}
  // </ScrollView>

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
      {/* <TouchableOpacity style={styles.addButton} onPress={handleAddImage}>
        <Text style={styles.addButtonText}>Upload Image</Text>
      </TouchableOpacity> */}
    </View>
  );
}
