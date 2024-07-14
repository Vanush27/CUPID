import {View} from 'react-native';
import {HomeMenu, HomeUploadBtn, HomeUploadImage} from '@ui-modules';

import {useStyles} from './styles';

const Upload = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <HomeMenu />

        <HomeUploadImage />
        <HomeUploadBtn />
      </View>
    </View>
  );
};

export default Upload;
