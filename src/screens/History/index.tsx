import {View, Text} from 'react-native';

import BackButton from '@components/BackButton';
import {HistoryScreen} from '@ui-modules';

import {useStyles} from './styles';

const History = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <BackButton colors={'black'} name={'chevron-back'} />
        <Text style={styles.text}>History</Text>
      </View>

      <View style={styles.wrapper}>
        <HistoryScreen />
      </View>
    </View>
  );
};

export default History;
