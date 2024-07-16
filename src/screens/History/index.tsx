import {View, Text} from 'react-native';

import BackButton from '@components/BackButton';

import {useStyles} from './styles';
import {HistoryScreen} from '@ui-modules';

const History = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <BackButton colors={'black'} name={'chevron-back'} />
      <Text style={styles.text}>History</Text>

      <View style={styles.wrapper}>
        <HistoryScreen />
      </View>
    </View>
  );
};

export default History;
