import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import BackButton from '@components/BackButton';

import {useStyles} from './styles';

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
  const {navigate} = useNavigation<any>();
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton colors={'white'} name={'chevron-back'} />
        <Text style={styles.title}>TIPS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {tips.map((tip, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tipButton}
            onPress={() => navigate('Blog')}>
            <Text style={styles.tipText}>{tip}</Text>
            <Icon name="chevron-right" size={30} color="#000" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tips;
