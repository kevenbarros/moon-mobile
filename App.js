import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import MainStack from './src/stacks/MainStack';
import { UserProvider } from './src/context/userContext';

export default () => {
  return (
    <Provider store={store}>
      {/* <UserProvider> */}
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
      {/* </UserProvider> */}
    </Provider>
  );
}
