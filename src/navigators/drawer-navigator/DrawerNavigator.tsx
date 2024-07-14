import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Settings} from '@screens';
// import SettingsIcon from 'react-native-vector-icons/AntDesign';
import AddIcon from 'react-native-vector-icons/FontAwesome5';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const addCountryIcon = (focused: boolean) => {
  return (
    <AddIcon color={focused ? '#E68406' : 'black'} name="city" size={24} />
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
          drawerIcon: ({focused, size}) => addCountryIcon(focused),
        }}

        // options={() => ({
        //   tabBarIcon: ({focused}) => weatherIcon(focused),
        //   title: 'Home',
        //   headerShown: false,
        //   tabBarActiveTintColor: '#E37C07',
        // })}
      />

      {/* <Drawer.Screen
        component={Settings}
        name="Settings"
        options={() => ({
          // tabBarIcon: ({focused}) => settingIcon(focused),
          title: 'Settings',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
        })}
      /> */}
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({focused, size}) => addCountryIcon(focused),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
