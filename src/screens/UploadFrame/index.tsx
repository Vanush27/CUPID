import {ScrollView, TouchableOpacity, View, Text, Image} from 'react-native';
import {CupidFrame, UploadMenu} from '@ui-modules';

import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';

const UploadFrame = () => {
  const {styles} = useStyles();

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <UploadMenu />
          <CupidFrame />
        </View>
      </ScrollView>

      <View style={styles.buttonStyle}>
        <View style={styles.box}>
          <Image source={ImagesAssets.love} />
        </View>

        <TouchableOpacity style={styles.rizzButton}>
          <Text style={styles.rizzButtonText}>Get Rizz Reply</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UploadFrame;
