import React, {ReactNode, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import ThemeProvider from './theme/ThemeProvider';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getInitialSafeAreaMetrics} from '@utils/getInitialSafeAreaMetrics';

// SF Pro
// Syncopate
//
export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  return (
    <SafeAreaProvider initialMetrics={getInitialSafeAreaMetrics}>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* <Provider store={store}> */}
        {/* <PersistGate loading={null} persistor={persist}> */}
        <NavigationContainer>{children}</NavigationContainer>
        {/* </PersistGate> */}
        {/* </Provider> */}
      </GestureHandlerRootView>
      {/* </ThemeProvider> */}
      {/* </QueryClientProvider> */}
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
