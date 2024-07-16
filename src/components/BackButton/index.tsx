import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackImage from 'react-native-vector-icons/Ionicons';
// TODO delete
import {ChevronLeft} from '@assets/icons';

import {useStyles} from './styles';

type TBackButtonProps = {
  // automaticStyles?: boolean;
  colors: string;
  name: string;
};

const BackButton: FC<TBackButtonProps> = ({colors, name}) => {
  const {goBack} = useNavigation();
  const {styles} = useStyles();

  const navigateBack = () => {
    goBack();
  };

  return (
    <TouchableOpacity onPress={navigateBack}>
      {/* <ChevronLeft height={30} width={30} fill={'red'} /> */}
      <BackImage size={35} color={colors} name={name} />
    </TouchableOpacity>
  );
};
export default BackButton;
