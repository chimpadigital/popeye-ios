import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import HeaderComponent from "../Elementos/Header/Header";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

const BarCodeScanned = ({
  hasPermission,
  scanned,
  setScanned,
  setActiveScanned,
  navigation,
}) => {
  const handleBarCodeScanned = ({ type, data }) => {
    console.log("escanear" + data);

    data.length >= 2 &&
      fetch(
        `https://api.popeyemayorista.com.ar/backend/public/api/Productos/Mostrar?code=${data}`,
        {
          method: "GET",
        }
      ).then(async (res) => {
        const jsonRes = await res.json();
        setActiveScanned(false);
        setScanned(true);

        if (jsonRes.data !== undefined) {
          return navigation.navigate("DetalleProductoQr", {
            Producto: jsonRes.data,
            navigation: navigation,
          });
        }
      });

    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const translation = useRef(new Animated.Value(heigth * 0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translation, {
          toValue: heigth * 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(translation, {
          toValue: heigth * 0.66,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 3000,
      }
    ).start();
  }, [translation]);

  return (
    <>
      <Animated.View
        style={{
          width: "100%",
          height: 3,
          top: heigth * 0,
          opacity: 0.5,
          backgroundColor: "red",
          transform: [{ translateY: translation }],
          position: "absolute",
          zIndex: 4,
          marginBottom: 10,
          padding: 0,
        }}
      />

      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={{
          width: "100%",
          position: "absolute",
          height: heigth * 0.66,
          top: 0,
          padding: 0,
          zIndex: 3,
        }}
      />

      <View style={styles.container}>
        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.loginButton}>
            <Text
              style={styles.loginButtonText}
              onPress={() => setActiveScanned(false)}
            >
              VOLVER AL INICIO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default BarCodeScanned;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonContent: {
    display: "flex",
    backgroundColor: "#F6F6F7",
    zIndex: 5,
    marginTop: heigth * 0.4,
    height: heigth * 0.2,
    paddingVertical: 3,
  },
  loginButton: {
    width: width * 0.94,
    height: 56,

    justifyContent: "center",
    backgroundColor: "#0F50A7",
    alignSelf: "center",

    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 12,
    lineHeight: 25,
    color: "#FFF",
  },
});
