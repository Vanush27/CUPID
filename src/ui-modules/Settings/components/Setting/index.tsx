import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import IconChevronRight from 'react-native-vector-icons/MaterialIcons';

import {useStyles} from './styles';

const Setting = () => {
  const {styles} = useStyles();
  const {navigate} = useNavigation<any>();
  const handleTips = () => {
    navigate('Tips');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <Text style={styles.closeButtonText}>✕</Text>

        <View style={styles.frame}>
          <View style={styles.box}>
            <Text style={styles.title}>Struggling to get matches?</Text>
            <IconChevronRight name="chevron-right" size={30} color="#000" />
          </View>
          <View>
            <Text style={styles.description}>
              Try our AI app to enhance your appearance with personalized
              advice.
            </Text>
          </View>
        </View>

        <View style={styles.frameTips}>
          <TouchableOpacity style={styles.tipsButton} onPress={handleTips}>
            <View style={styles.tipsWrapper}>
              <Text style={styles.tipsButtonText}>💡</Text>
              <Text style={styles.tipsButtonText}>Tips</Text>
            </View>

            <IconChevronRight name="chevron-right" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Setting;
