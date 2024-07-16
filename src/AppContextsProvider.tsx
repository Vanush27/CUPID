import React, {ReactNode, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getInitialSafeAreaMetrics} from '@utils/getInitialSafeAreaMetrics';
import SplashScreen from 'react-native-splash-screen';
import {STORAGE_ITEMS} from '@constants';
import {useAsyncStorage} from '@hooks';
import {Provider} from 'react-redux';
import {store} from '@redux/store';

export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  const {getItem, setItem} = useAsyncStorage();

  const getSplashscreenDelay = async () => {
    const delay = await getItem(STORAGE_ITEMS.SPLASH_SCREEN);
    if (delay === null) {
      setItem(STORAGE_ITEMS.SPLASH_SCREEN, 'true');
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000);
    } else {
      SplashScreen.hide();
    }
  };

  useEffect(() => {
    getSplashscreenDelay();
  }, []);

  return (
    <SafeAreaProvider initialMetrics={getInitialSafeAreaMetrics}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persist}> */}
          <NavigationContainer>{children}</NavigationContainer>
          {/* </PersistGate> */}
        </Provider>
      </GestureHandlerRootView>
      {/* </ThemeProvider> */}
      {/* </QueryClientProvider> */}
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
