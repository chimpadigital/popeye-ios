import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabHomeS from "../assets/TabHomeS"
import TabHome from "../assets/TabHome"
import TabPedidosS from "../assets/TabPedidosS"
import TabPedidos from "../assets/TabPedidos"
import TabCatalogoS from "../assets/TabCatalogoS"
import TabCatalogo from "../assets/TabCatalogo"
import TabContactoS from "../assets/TabContactoS"
import TabContacto from "../assets/TabContacto"
import TabPerfilS from "../assets/TabPerfilS"
import TabPerfil from "../assets/TabPerfil"
import HomeComponent from '../Components/Home/Home';
import CatalogoNavigator from './CatalogoNavigator';
import AsesorComponent from '../Components/Asesor/Asesor';
import PedidosComponent from '../Components/Pedidos/Pedidos';
import PerfilNavigator from './PerfilNavigator';
import MetodoPagoComponent from '../Components/Carrito/MetodoPago';
const CheckoutNavigator = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Metodo" component={MetodoPagoComponent} />
           
            
          </Stack.Navigator>
         
        </NavigationContainer>
      );
    }

export default CheckoutNavigator

const styles = StyleSheet.create({})