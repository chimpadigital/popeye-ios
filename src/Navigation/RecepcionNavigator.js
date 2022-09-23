
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setCustomImage, setCustomText } from 'react-native-global-props';

import RecepcionComponent from '../Components/Recepcion/Recepcion';
import { NavigationContainer } from '@react-navigation/native';
import Recepcion from '../Controllers/Recepcion/Recepcion';
const RecepcionNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
     
      <NavigationContainer>
      
          <Stack.Navigator   screenOptions={{
      headerShown: false
    }}>
          <Stack.Screen Screen name="Recep" component={Recepcion} />

          </Stack.Navigator>
   
</NavigationContainer>
    );

}

export default RecepcionNavigator