import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setCustomImage, setCustomText } from 'react-native-global-props';
import { Provider } from "react-redux";
import { store } from "../Redux/store";

import PedidosComponent from '../Components/Pedidos/Pedidos';
import DetallePedidoComponent from '../Components/Pedidos/DetallePedido';
import Pedidos from '../Controllers/Pedidos/Pedidos';
import Carrito from '../Controllers/Carrito/Carrito';
import MetodosComponent from '../Components/Carrito/Metodos';
import MetodoPago from '../Controllers/Metodos/MetodoPago';
import DividirPago from '../Controllers/Metodos/DividirPago';
import Checkout from '../Controllers/Carrito/Checkout';
import MetodoEntrega from '../Controllers/Metodos/MetodoEntrega';
import FinalizadoComponent from '../Components/Carrito/Finalizado';
import DetalleProducto from '../Controllers/DetalleProducto/DetalleProducto';
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

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen Screen name="DetallePedido" component={DetallePedidoComponent} />
        <Stack.Screen Screen name="Carrito" component={Carrito} />
        <Stack.Screen Screen name="Checkout" component={Checkout} />
        <Stack.Screen Screen name="MetodosComponent" component={MetodosComponent} />
        <Stack.Screen Screen name="MetodoPago" component={MetodoPago} />
        <Stack.Screen Screen name="DividirPago" component={DividirPago} />
        <Stack.Screen Screen name="MetodoEntrega" component={MetodoEntrega} />
        <Stack.Screen Screen name="DetalleProducto" component={DetalleProducto} />
        <Stack.Screen Screen name="Finalizado" component={FinalizadoComponent} />
      </Stack.Navigator>

    </Provider>
  );

}

export default PedidosNavigator