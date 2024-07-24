import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer-navigator/DrawerNavigator';
import {History, Home, Paywall, Settings, UploadFrame} from '@screens';
import {Blog, Setting, Tips} from '@ui-modules';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Paywall">
      {/* <AppStack.Screen component={DrawerNavigator} name="DrawerNavigator" /> */}

      <AppStack.Screen component={Paywall} name="Paywall" />

      <AppStack.Screen component={Home} name="Home" />
      <AppStack.Screen component={UploadFrame} name="UploadFrame" />

      <AppStack.Screen component={History} name="History" />
      <AppStack.Screen component={Tips} name="Tips" />
      <AppStack.Screen component={Setting} name="Setting" />
      <AppStack.Screen component={Settings} name="Settings" />
      <AppStack.Screen component={Blog} name="Blog" />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
