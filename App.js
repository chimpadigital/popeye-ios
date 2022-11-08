import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/Navigation/TabNavigator";
import Root from "./Root";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/Redux/store";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <View></View>;
  }
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
  console.log(persistor, store)
  return (
    <Provider store={store}>
      <PersistGate loading={<></>} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
