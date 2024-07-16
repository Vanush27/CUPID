import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useStyles} from './styles';

const Setting = () => {
  const {styles} = useStyles();
  const {navigate} = useNavigation();
  const handleTips = () => {
    navigate('Tips');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <Text style={styles.closeButtonText}>✕</Text>
        <View style={styles.frame}>
          <TouchableOpacity style={styles.closeButton}></TouchableOpacity>
          <Text style={styles.title}>Struggling to get matches?</Text>
          <Text style={styles.description}>
            Try our AI app to enhance your appearance with personalized advice.
          </Text>
        </View>

        <View style={styles.frameTips}>
          <TouchableOpacity style={styles.tipsButton} onPress={handleTips}>
            <Text style={styles.tipsButtonText}>💡 </Text>
            <Text style={styles.tipsButtonText}>Tips</Text>
            <Text style={styles.tipsButtonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Setting;
