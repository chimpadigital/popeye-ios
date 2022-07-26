import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CatalogoComponent from '../Components/Catálogo/Catalogo';
import { setCustomImage, setCustomText } from 'react-native-global-props';
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import CategoriaListaComponent from '../Components/CategoríaLista/CategoriaLista';
import ProductosListaCategoriaComponent from '../Components/ProductosLista/ProductosListaCategoria';
import DetalleProductoComponent from '../Components/DetalleProducto/DetalleProducto';
import PerfilComponent from '../Components/Perfil/Perfil';
import Carrito from '../Controllers/Carrito';
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
          <Stack.Screen Screen name="Carrito" component={Carrito} />
          </Stack.Navigator>
   
      </Provider>
    );

}

export default PerfilNavigator