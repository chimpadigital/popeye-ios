import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { setCustomImage, setCustomText } from 'react-native-global-props';
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import {PerfilComponent} from '../Components/Perfil/Perfil';
import {Carrito} from '../Controllers/Carrito/Carrito';
import {ModificarUser} from '../Controllers/ModificarUser/ModificarUser';
const PerfilNavigator = () => {
    const Stack = createNativeStackNavigator();
    const customTextProps = {
      style: {
        fontSize: 14,
        fontFamily: "Roboto-Regular",
      },
    };
  
    const customImageProps = {
      width: "100%",
      height: "100%",
    };
  
    setCustomText(customTextProps);
    setCustomImage(customImageProps);
    return (
      <Provider store={store}>
 
          <Stack.Navigator   screenOptions={{
      headerShown: false
    }}>
          <Stack.Screen Screen name="Perfil" component={PerfilComponent} />
          <Stack.Screen Screen name="ModificarUser" component={ModificarUser} />
          <Stack.Screen Screen name="Carrito" component={Carrito} />
          </Stack.Navigator>
   
      </Provider>
    );

}

export default PerfilNavigator