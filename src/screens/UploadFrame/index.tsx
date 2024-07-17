import {ScrollView} from 'react-native';
import {CupidFrame, UploadMenu} from '@ui-modules';

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
