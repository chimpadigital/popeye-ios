
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setCustomImage, setCustomText } from 'react-native-global-props';
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Login from "../Controllers/Login"
import LoginCarouselComponent from '../Components/LoginCarousel/LoginCarousel';
import ResetPassComponent from '../Components/ResetPass/ResetPass';
import ResetCodeComponent from '../Components/ResetCode/ResetCode';
import BienvenidoComponent from '../Components/Bienvenido/Bienvenido';
import LoginCarousel from '../Controllers/LoginCarousel/LoginCarousel';
import { NavigationContainer } from '@react-navigation/native';
const LoginNavigator = () => {
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
     
      <NavigationContainer>
      
          <Stack.Navigator   screenOptions={{
      headerShown: false
    }}>
          <Stack.Screen Screen name="Login" component={Login} />
          <Stack.Screen Screen name="LoginCarousel" component={LoginCarousel} />
          <Stack.Screen Screen name="ResetPass" component={ResetPassComponent} />
          <Stack.Screen Screen name="ResetCode" component={ResetCodeComponent} />
          <Stack.Screen Screen name="Bienvenido" component={BienvenidoComponent} />
          </Stack.Navigator>
   
</NavigationContainer>
    );

}

export default LoginNavigator