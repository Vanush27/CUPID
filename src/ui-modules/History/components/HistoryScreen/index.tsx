import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  Text,
  ScrollView,
} from 'react-native';
import {useAppImages} from '@redux/hooks/useAppImages';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function HistoryScreen() {
  const {styles} = useStyles();

  const navigation = useNavigation<any>();
  const {dispatchDeleteImage} = useAppImages();

  const {images} = useAppImages();

  const handleOpen = () => {
    navigation.navigate('UploadFrame');
  };
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
    <TouchableOpacity style={styles.imageContainer} onPress={handleOpen}>
      <Image source={{uri: item}} style={styles.image} />
      <Text style={styles.screenshotTextUser}>User's</Text>
      <Text style={styles.screenshotText}>screenshot</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteImage(item)}>
        <Icon name="close" size={24} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={Array.from({length: 20})}
      renderItem={renderItem}
      // keyExtractor={index => index.toString()}
      numColumns={3}
      contentContainerStyle={styles.grid}
    />
  );
}
