import * as React from 'react';
import {Text, View} from 'react-native';
import {
  NavigationContainer,
  NavigationNativeContainer,
} from '@react-navigation/native';
import TabNavigation from '../ReactNative-ReduxApp/src/Screens/Navigation/TabNavigation/TabNavigation';



export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
