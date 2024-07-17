import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer-navigator/DrawerNavigator';
import {History, Settings, UploadFrame} from '@screens';
import {Blog, Tips} from '@ui-modules';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen component={DrawerNavigator} name="DrawerNavigator" />
      <AppStack.Screen component={UploadFrame} name="UploadFrame" />
      <AppStack.Screen component={History} name="History" />

      <AppStack.Screen component={Tips} name="Tips" />
      <AppStack.Screen component={Settings} name="Settings" />
      <AppStack.Screen component={Blog} name="Blog" />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
