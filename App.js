
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import LoginComponent from './src/Components/Login/Login';
//LogBox.ignoreAllLogs()



export default function App() {




  return (
    <Provider store={store}>
    <NavigationContainer>
      <LoginComponent />
    </NavigationContainer>
    </Provider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
