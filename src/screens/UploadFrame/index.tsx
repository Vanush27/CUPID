import {ScrollView, View} from 'react-native';
import {
  CupidFrame,
  HomeMenu,
  HomeUploadBtn,
  HomeUploadImage,
  UploadMenu,
} from '@ui-modules';

import {useStyles} from './styles';

const UploadFrame = () => {
  const {styles} = useStyles();

  return (
    <ScrollView style={styles.container}>
      <UploadMenu />
      <CupidFrame />
    </ScrollView>
  );
};

export default UploadFrame;
