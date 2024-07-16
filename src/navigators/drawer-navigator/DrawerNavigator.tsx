import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Paywall, Settings} from '@screens';
// import SettingsIcon from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/FontAwesome5';
import SettingsIcon from 'react-native-vector-icons/Feather';
import PayIcon from 'react-native-vector-icons/Feather';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const homeIcon = (focused: boolean) => {
  return (
    <HomeIcon color={focused ? '#E68406' : 'black'} name="home" size={24} />
  );
};

const settingsIcon = (focused: boolean) => {
  return (
    <SettingsIcon
      color={focused ? '#E68406' : 'black'}
      name="settings"
      size={24}
    />
  );
};

const payIcon = (focused: boolean) => {
  return (
    <PayIcon color={focused ? '#E68406' : 'black'} name="target" size={24} />
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 240,
        },
      }}
      initialRouteName="Home">
      <Drawer.Screen
        component={Home}
        name="Home"
        options={{
          drawerIcon: ({focused, size}) => homeIcon(focused),
        }}
      />

      <Drawer.Screen
        name="Paywall"
        component={Paywall}
        options={{
          drawerIcon: ({focused, size}) => payIcon(focused),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({focused, size}) => settingsIcon(focused),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
