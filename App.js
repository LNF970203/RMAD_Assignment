// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lesson_02 from './src/Lesson2'
import Lesson_01 from './src/Lesson1';
import { NavigationRoutes } from './src/enums';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name={NavigationRoutes} 
        component={Lesson_01}
        options={{headerShown: false}} />
        <Stack.Screen
        name= "Lesson 02"
        component={Lesson_02}
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;