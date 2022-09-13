import { View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import React from 'react'
import Swiper from 'react-native-swiper';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EloScreen from './android/Elo';
import ViewMoreScreen from './android/ViewMore';
import Bottom from './android/Bottom';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='EloScreen'>
        <Stack.Screen name="Elo" component={EloScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Bottom" component={Bottom} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;




