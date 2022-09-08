import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setCustomImage, setCustomText } from 'react-native-global-props';
import { Provider } from "react-redux";
import { store } from "../Redux/store";

import PedidosComponent from '../Components/Pedidos/Pedidos';
import DetallePedidoComponent from '../Components/Pedidos/DetallePedido';
import Pedidos from '../Controllers/Pedidos/Pedidos';
const PedidosNavigator = () => {
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
          <Stack.Screen Screen name="Pedidos" component={Pedidos} />
          <Stack.Screen Screen name="DetallePedido" component={DetallePedidoComponent} />
          </Stack.Navigator>
   
      </Provider>
    );

}

export default PedidosNavigator