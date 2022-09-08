import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import HeaderComponent from "../Elementos/Header/Header";
import { Divider } from "react-native-elements/dist/divider/Divider";

import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const PedidosComponent = ({ pedidos, pedidoS, setPedidoS }) => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const dimensions = useWindowDimensions();
  const fontScale = isNaN(dimensions.fontScale) ? 1 : dimensions.fontScale;
  const offset = -180 * fontScale;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const delayedAnimation = setTimeout(() => {
      Animated.spring(translateY, {
        toValue: isVisible ? 0 : offset,
        friction: 10,
        tension: 11,
      }).start();
    }, 200);
    return () => clearTimeout(delayedAnimation);
  }, [isVisible]);
  return (
    <View style={styles.container}>
      <HeaderComponent Titulo={"Mis Pedidos"} />
      <View style={styles.PedidosContainer}>
        <Text style={styles.SubTitleP}>Pedidos Actuales</Text>
        <View style={styles.ViewCatch}>
          {pedidos.filter((e) => e.status.id == 1).length ? (
            pedidos
              .filter((e) => e.status.id == 1)
              .map((e) => {
                return (
                  <View style={styles.pedidosCard1}  onPress={() => {
                    setPedidoS(e);
                    setIsVisible(false);
                  }}>
                    <Text style={styles.PedNum1}>Pedido #{e.id}</Text>
                    <Text style={styles.PedT1}>
                      {e.reports.length == 1
                        ? "1 unidad"
                        : e.reports.length + " unidades"}
                    </Text>
                    <Text style={styles.PedT1}>
                      {e.created_at.substring(0, 10)}
                    </Text>
                  </View>
                );
              })
          ) : (
            <Text style={styles.catch}>No tenés pedidos actuales</Text>
          )}
        </View>
      </View>
      <View style={styles.PedidosContainer}>
        <Text style={styles.SubTitleP}>Historial de pedidos</Text>
        <ScrollView style={styles.container1}>
          {pedidos.length ? (
            pedidos.map((e) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setPedidoS(e);
                    setIsVisible(false);
                  }}
                  style={
                    e.id == pedidoS.id
                      ? styles.pedidosCard11
                      : styles.pedidosCard
                  }
                >
                  <Text style={styles.PedNum}>Pedido #{e.id}</Text>
                  <Text style={styles.PedT}>
                    {e.reports.length == 1
                      ? "1 unidad"
                      : e.reports.length + " unidades"}
                  </Text>
                  <Text style={styles.PedT}>
                    {e.created_at.substring(0, 10)}
                  </Text>
                  <Divider />
                </TouchableOpacity>
              );
            })
          ) : (
            <></>
          )}
        </ScrollView>
      </View>

      <Animated.View
        style={{
          transform: [{ translateY }],
          position: "absolute",
          bottom: -180,
        }}
      >
        <View style={styles.CheckOut}>
          <TouchableOpacity
            onPress={() => setIsVisible(!isVisible)}
            style={{ width: width, height: 20 }}
          >
            <Divider
              orientation="horizontal"
              width={5}
              style={{ width: 130, alignSelf: "center", borderRadius: 8 }}
              color={"#ACBAC3"}
            />
          </TouchableOpacity>
          <View style={styles.butonContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetallePedido", { Pedido: pedidoS })
              }
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>VER EL PEDIDO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignUpButton}>
              <Text style={styles.SingUpTextButton}>
                VOLVER A REALIZAR EL PEDIDO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default PedidosComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
    paddingBottom: 100,
  },
  container1: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: heigth * 0.6,
    paddingBottom: 100,
  },
  PedidosContainer: {
    paddingHorizontal: width * 0.04,
  },
  pedidosCard: {
    maxWidth: width * 0.92,
    width: width * 0.92,
    border: 0,
    shadowColor: "#000",
    height: 96,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    marginTop: -15,
    paddingHorizontal: width * 0.02,
    marginTop: 1,
  },
  pedidosCard11: {
    maxWidth: width * 0.92,
    width: width * 0.92,
    border: 0,
    backgroundColor: "#d1def0",

    height: 96,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    marginTop: -15,
    paddingHorizontal: width * 0.02,
    marginTop: 1,
  },
  PedNum: {
    fontSize: 14,
    fontWeight: "700",
  },
  PedT: {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "italic",
    marginBottom: 4,
  },
  SubTitleP: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333542",
    marginVertical: width * 0.04,
  },
  catch: {
    alignSelf: "center",
    fontStyle: "italic",
  },
  ViewCatch: {

    justifyContent: "center",
  },
  CheckOut: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    zIndex: 9,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 170,
    width: width,
    elevation: 10,
    justifyContent: "space-between",
    padding: 10,
  },
  loginButton: {
    width: width * 0.94,
    height: 56,
    paddingBottom: 3,
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

  SignUpButton: {
    width: width * 0.94,
    height: 56,
    paddingBottom: 3,
    justifyContent: "center",
    backgroundColor: "#FFF",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#0F50A7",
    marginTop: 15,
  },
  SingUpTextButton: {
    color: "#0F50A7",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 25,
  },
  butonContainer: {},
  pedidosCard1: {
    maxWidth: width * 0.92,
    width: width * 0.92,
    border: 0,
    marginVertical: 5,
    backgroundColor: "#0f50a7",
    borderRadius: 8,
    shadowColor: "#000",
    height: 84,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",

    paddingHorizontal: width * 0.04,
  },
  PedNum1: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
  },
  PedT1: {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "italic",

    color: "white",
  },
});
