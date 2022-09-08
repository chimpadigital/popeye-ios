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
import PedidosNavigator from './PedidosNavigation';
const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>

          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  
                  return(
                    focused?<TabHomeS />:<TabHome/>//<View style={{width:20, height:20, backgroundColor:"purple"}}/>
                  )
                  } 
                  else if (route.name === 'Pedidos') {
                      return(
                      focused?<TabPedidosS />:<TabPedidos />//<View style={{width:20, height:20, backgroundColor:"purple"}}/>
                    )
                  }
                  else if (route.name === 'Catalogo') {
                      return(
                      focused?<TabCatalogoS />:<TabCatalogo/>//<View style={{width:20, height:20, backgroundColor:"purple"}}/>
                    )
                  }
                  else if (route.name === 'Contacto') {
                      return(
                      focused?<TabContactoS />:<TabContacto/>//<View style={{width:20, height:20, backgroundColor:"purple"}}/>
                    )
                  }
                  else if (route.name === 'Perfil') {
                      return(
                      focused?<TabPerfilS />:<TabPerfil/>//<View style={{width:20, height:20, backgroundColor:"purple"}}/>
                    )
                  }

    
                // You can return any component that you like here!
        
              },
              headerShown: false,
              tabBarStyle: { height: 69.07,}, 
              
            tabBarShowLabel:false
            })}
          >
            <Tab.Screen name="Catalogo" component={CatalogoNavigator} />
            <Tab.Screen name="Pedidos"  component={PedidosNavigator} />
            <Tab.Screen name="Home"  component={HomeComponent} />
            <Tab.Screen name="Contacto" component={AsesorComponent} />
            <Tab.Screen name="Perfil" component={PerfilNavigator} />
            
          </Tab.Navigator>
          </NavigationContainer>
      );
    }

export default TabNavigator

const styles = StyleSheet.create({})


      