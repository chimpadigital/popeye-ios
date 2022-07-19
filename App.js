import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";

import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import LoginComponent from "./src/Components/Login/Login";
import { useFonts } from "expo-font";
import {
  setCustomView,
  setCustomText,
  setCustomImage,
} from "react-native-global-props";
import BienvenidoComponent from "./src/Components/Bienvenido/Bienvenido";
import LoginCarousel from "./src/Controllers/LoginCarousel/LoginCarousel";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResetPassComponent from "./src/Components/ResetPass/ResetPass";
import ResetCodeComponent from "./src/Components/ResetCode/ResetCode";
import TabNavigator from "./src/Navigation/TabNavigator";
export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <View></View>;
  }
  // const Stack = createNativeStackNavigator();
  // const customTextProps = {
  //   style: {
  //     fontSize: 14,
  //     fontFamily: "Roboto-Regular",
  //   },
  // };

  // const customImageProps = {
  //   width: "100%",
  //   height: "100%",
  // };

  // setCustomText(customTextProps);
  // setCustomImage(customImageProps);
  // return (
  //   <Provider store={store}>
  //     <NavigationContainer>
  //       <Stack.Navigator   screenOptions={{
  //   headerShown: false
  // }}>
  //       <Stack.Screen name="Login" component={LoginComponent} />
  //       <Stack.Screen name="Bienvenido" component={BienvenidoComponent} />
  //       <Stack.Screen name="LoginCarousel" component={LoginCarousel} />
  //       <Stack.Screen name="ResetPass" component={ResetPassComponent} />
  //       <Stack.Screen name="ResetCode" component={ResetCodeComponent} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </Provider>
  // );
  return(
    <Provider store={store}>

          <TabNavigator/>
        </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
