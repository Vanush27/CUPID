import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer-navigator/DrawerNavigator';
import {Home, Settings} from '@screens';
import {UploadMenu} from '@ui-modules';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen component={DrawerNavigator} name="DrawerNavigator" />
      <AppStack.Screen component={UploadMenu} name="UploadMenu" />
      {/* <AppStack.Screen component={Settings} name="Settings" /> */}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
