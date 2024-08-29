// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPage from './src/pages/ListPage';
import DetailPage from './src/pages/DetailPage';
import UserPage from './src/pages/UserPage';

import LoginPage from './src/pages/LoginPage';
import { ThemeProvider } from '../TestCase/src/utils/ThemeContext';


const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <ThemeProvider> 
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginPage" >
      
    <Stack.Screen name="LoginPage" component={LoginPage}   options={{ title: 'Giriş Yap' }}/>
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="UserPage" component={UserPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider> 
  );
}

export default App;