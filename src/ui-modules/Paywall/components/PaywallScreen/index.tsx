import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ImagesAssets} from '@assets/images/ImagesAssets';

import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/native';

const PaywallScreen = ({handleHome}: any) => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <Image source={ImagesAssets.matchImage} />

      <View style={styles.benefitContainer}>
        <View style={styles.benefit}>
          <Text style={styles.emoji}>🔥</Text>
          <Text style={styles.text}>Unlimited Rizz</Text>
        </View>

        <View style={styles.benefit}>
          <Text style={styles.emoji}>🤝</Text>
          <Text style={styles.text}>Trusted by Millions</Text>
        </View>
        <View style={styles.benefit}>
          <Text style={styles.emoji}>🔥</Text>
          <Text style={styles.text}>Coach Recommended</Text>
        </View>
        <View style={styles.benefit}>
          <Text style={styles.emoji}>🛡️</Text>
          <Text style={styles.text}>Proven to Get Dates</Text>
        </View>
        <View style={styles.benefit}>
          <Text style={styles.emoji}>📈</Text>
          <Text style={styles.text}>x10 More Responses</Text>
        </View>
        <View style={styles.benefit}>
          <Text style={styles.emoji}>😈</Text>
          <Text style={styles.text}>x8 More Dates</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={['rgba(0, 166, 118, 1)', 'rgba(70, 177, 201, 1)']}
          end={{x: 1, y: 0}}
          style={styles.buttonGradient}>
          <Text style={styles.rizzGod}>Rizz God</Text>
        </LinearGradient>

        <LinearGradient
          colors={['#363636', '#363636']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.elevate}>
          <Text style={styles.buttonText}>Elevate Your Game</Text>
        </LinearGradient>

        <LinearGradient
          colors={['rgba(0, 166, 118, 1)', 'rgba(0, 166, 118, 1)']}
          style={styles.buttonUnlockGradient}>
          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.trialText}>Unlock Free Trial</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={styles.priceText}>risk-free trial then $8.67/week</Text>
      </View>
    </View>
  );
};

export default PaywallScreen;
