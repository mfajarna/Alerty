import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';

const MainApp = () => {
  
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return(
     <NavigationContainer>
        <Router />
        <FlashMessage position="top" />
     </NavigationContainer>
  )
}


const App = () => {
  return(
    <MainApp />
    )
};

export default App;
