import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

import IconChevronRight from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useStyles} from './styles';
import {useAppImages} from '@redux/hooks/useAppImages';

export function BottomSheetComponent({bottomSheetModalRef}: any) {
  const {styles} = useStyles();

  const {dispatchSetIsOpen} = useAppImages();

  const snapPoints = useMemo(() => ['40%', '50%'], []);

  const {navigate} = useNavigation<any>();

  const handleClose = () => {
    bottomSheetModalRef.current?.close();
    dispatchSetIsOpen(false);
  };

  const handleTips = () => {
    dispatchSetIsOpen(false);
    bottomSheetModalRef.current?.close();
    navigate('Tips');
  };

  return (
    <View style={styles.container}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        containerStyle={{opacity: 1}}
        snapPoints={snapPoints}>
        <BottomSheetView style={{borderRadius: 400}}>
          <View style={styles.container}>
            <View style={styles.bottom}>
              <Text style={styles.closeButtonText} onPress={handleClose}>
                ✕
              </Text>

              <View style={styles.frame}>
                <View style={styles.box}>
                  <Text style={styles.title}>Struggling to get matches?</Text>
                  <IconChevronRight
                    name="chevron-right"
                    size={30}
                    color="#000"
                  />
                </View>
                <View>
                  <Text style={styles.description}>
                    Try our AI app to enhance your appearance with personalized
                    advice.
                  </Text>
                </View>
              </View>

              <View style={styles.frameTips}>
                <TouchableOpacity
                  style={styles.tipsButton}
                  onPress={handleTips}>
                  <View style={styles.tipsWrapper}>
                    <Text style={styles.tipsButtonText}>💡</Text>
                    <Text style={styles.tipsButtonText}>Tips</Text>
                  </View>

                  <IconChevronRight
                    name="chevron-right"
                    size={30}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}

export default BottomSheetComponent;
