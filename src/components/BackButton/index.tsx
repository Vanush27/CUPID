import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackImage from 'react-native-vector-icons/Ionicons';

type TBackButtonProps = {
  colors: string;
  name: string;
};

const BackButton: FC<TBackButtonProps> = ({colors, name}) => {
  const {goBack} = useNavigation();

  const navigateBack = () => {
    goBack();
  };

  return (
    <TouchableOpacity onPress={navigateBack}>
      <BackImage size={35} color={colors} name={name} />
    </TouchableOpacity>
  );
};
export default BackButton;
