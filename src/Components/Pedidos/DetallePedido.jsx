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
import ProductoCardComponent from "../Elementos/ProductoCard/ProductoCard";
import { useNavigation } from "@react-navigation/native";
import HeaderComponent from "../Elementos/Header/Header";
import { Divider } from "react-native-elements";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const DetallePedidoComponent = ({route}) => {
  const navigation = useNavigation();
  const { Pedido } = route.params;
  
  const [isVisible, setIsVisible] = useState(true);
  const dimensions = useWindowDimensions();
  const fontScale = isNaN(dimensions.fontScale) ? 1 : dimensions.fontScale;
  const offset = 140 * fontScale;
  const translateY = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    const delayedAnimation = setTimeout(() => {
      Animated.spring(translateY, {
        toValue: isVisible ? 0 : offset,
        friction: 10,
        tension: 11,
      }).start();
    }, 1);
    return () => clearTimeout(delayedAnimation);
  }, [isVisible]);
  return (
    <View style={{ height: heigth }}>
      <HeaderComponent
        navigation={navigation}
        Titulo="Pedido"
        Atras={true}
        Carrito={true}
      />
      <View style={styles.Titular}>
        <View style={styles.Circulo} />
        <Text style={styles.Title}>Pedido {Pedido.id}</Text>
      </View>

      <ScrollView style={styles.container}>
        {Pedido?.reports.map((e) => {
          return (
            <ProductoCardComponent
            Producto={e} navigation={navigation} 
            />
          );
        })}
        <View style={{height:80, width:"100%"}}/>
      </ScrollView>
      <Animated.View style={{ transform: [{ translateY }] }}>
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
              onPressOut={() => setIsVisible(!isVisible)}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>EDITAR EL PEDIDO</Text>
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

export default DetallePedidoComponent;

const styles = StyleSheet.create({
  container: {
   flex:1,
   

   
  
  },
  square: {
    width: 70,
    height: 70,
    backgroundColor: "red",
    marginBottom: 500,
  },
  Titular: {
    flexDirection: "row",
    width: width,
    height: 80,
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },
  Circulo: {
    height: 56,
    width: 56,
    borderRadius: 100,
    backgroundColor: "#0F50A7",
    marginRight: 15,
  },
  Title: {
    color: "#0F50A7",
    fontSize: 16,
    fontWeight: "700",
  },
  CheckOut: {
    display: "flex",
    position: "absolute",
    bottom: 40,
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
});
