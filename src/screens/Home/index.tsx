import {View, Text} from 'react-native';
import {HomeMenu, HomeUploadBtn, HomeUploadImage} from '@ui-modules';

import {useStyles} from './styles';
import {useCallback, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useAppImages} from '@redux/hooks/useAppImages';
import {Menu} from '@assets/icons';

const Home = () => {
  const {styles} = useStyles();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const {isOpen, dispatchSetIsOpen} = useAppImages();
  // const [isOpen, setOpen] = useState(false);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    dispatchSetIsOpen(true);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, {opacity: isOpen ? 0.3 : 1}]}>
        <HomeMenu
          handlePresentModalPress={handlePresentModalPress}
          bottomSheetModalRef={bottomSheetModalRef}
        />

        <View style={styles.boxTitile}>
          <Text style={styles.text}>Upload a screenshot </Text>
          <Text style={styles.text}>of a chat or bio</Text>
        </View>

        <View>
          <HomeUploadImage />
        </View>

        <HomeUploadBtn />
      </View>
    </View>
  );
};

export default Home;
