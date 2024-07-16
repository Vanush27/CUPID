import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';

const tips = [
  'What Attracts People?',
  'First Impressions Matter',
  'First Date Success',
  'Tips for a successful first date',
  'Engaging Conversations',
  'Avoid These Mistakes',
  'Date Dress Tips',
  'Struggling to get matches? Try our AI app to enhance your appearance with personalized advice.',
];

const Tips = () => {
  const navigation = useNavigation();
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>TIPS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {tips.map((tip, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tipButton}
            onPress={() => navigation.navigate('Blog')}>
            <Text style={styles.tipText}>{tip}</Text>
            <Icon name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tips;
