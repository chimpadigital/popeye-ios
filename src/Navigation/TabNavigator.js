import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResetCodeComponent from "../Components/ResetCode/ResetCode";
import ResetPassComponent from "../Components/ResetPass/ResetPass";

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
import LoginCarousel from '../Controllers/LoginCarousel/LoginCarousel';
import BienvenidoComponent from '../Components/Bienvenido/Bienvenido';
import Icon from '../assets/asdaaa';
import HomeComponent from '../Components/Home/Home';
const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  
                return(
                focused?<TabHomeS />:<TabHome/>
                )
                } 
                else if (route.name === 'Pedidos') {
                    return(
                  focused?<TabPedidosS />:<TabPedidos />
                  )
                }
                else if (route.name === 'Catalogo') {
                    return(
                  focused?<TabCatalogoS />:<TabCatalogo/>
                  )
                }
                else if (route.name === 'Contacto') {
                    return(
                  focused?<TabContactoS />:<TabContacto/>
                  )
                }
                else if (route.name === 'Perfil') {
                    return(
                  focused?<TabPerfilS />:<TabPerfil/>
                  )
                }
    
                // You can return any component that you like here!
        
              },
              headerShown: false,
              tabBarStyle: { height: 69.07,}, 
              
            tabBarShowLabel:false
            })}
          >
      <Tab.Screen name="Catalogo" component={LoginCarousel} />
            <Tab.Screen name="Pedidos" component={ResetPassComponent} />
            
            <Tab.Screen name="Home" component={HomeComponent} />
            <Tab.Screen name="Contacto" component={BienvenidoComponent} />
            <Tab.Screen name="Perfil" component={LoginCarousel} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }

export default TabNavigator

const styles = StyleSheet.create({})