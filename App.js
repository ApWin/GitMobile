import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import createStore from './src/store/createStore';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AppWithNavigationState from './src/navigators/AppNavigator';
import NavigationService from './src/navigators/NavigationService';
import sentry from './src/services/sentry';
import Components from 'components';

// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import i18n from './src/services/i18n';
import {I18nextProvider} from 'react-i18next';

sentry.init();
const {store, persistor} = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={NavigationService._navigator}>
        <PersistGate
          loading={<Components.Spinner processing={true} />}
          persistor={persistor}>
          <I18nextProvider i18n={i18n()}>
            <StatusBar
              backgroundColor="transparent"
              translucent
              barStyle="dark-content"
            />
            <AppWithNavigationState />
          </I18nextProvider>
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
