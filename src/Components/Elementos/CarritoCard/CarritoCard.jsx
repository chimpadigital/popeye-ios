import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Divider } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { amoProducto, delProducto } from "../../../Redux/actions";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const CarritoCardComponent = ({
  Nombre,
  Precio,
  Code,
  Cantidad,
  Producto,
  index,
  setTemp,
  temp,
}) => {
  const isFocused = useIsFocused();
  const COE = useSelector((e) => e.Coeficiente);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [cantidad, setCantidad] = useState(Cantidad);

  useEffect(() => {
    dispatch(amoProducto({ index: index, cantidad: cantidad }));
    setTemp(temp + 1);
  }, [cantidad]);

  const dropToCart = () => {
    dispatch(delProducto(Code));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("DetalleProducto", {
            Producto: Producto,
            navigation: navigation,
          })
        }
      >
        <View style={styles.TextCont}>
          <Text style={styles.RecName}>{Nombre}</Text>
          <Text style={styles.ID}>ART. {Producto.code}</Text>
          <View style={styles.Row1}>
            <Text style={styles.RecPrice}>
              ${(Number(Precio) + COE * Number(Precio)).toFixed(2)}
            </Text>
            <Divider
              height={18}
              orientation="vertical"
              style={styles.divider}
            />
            {/* <View
              style={{
                marginHorizontal: 8,
                height: 15,
                width: 15,
                background Color,
                borderRadius: 3,
              }}
            />
            <Text style={styles.colorText}>
              {Color.toUpperCase()[0] + Color.slice(1, Color.length)}
            </Text> */}
          </View>
          <View style={styles.Row2}>
            <TouchableOpacity style={styles.Row1} onPress={dropToCart}>
              <Icon name="delete" type="material" color="#B71C46" size={20} />
              <Text style={styles.Elminar}>Eliminar</Text>
            </TouchableOpacity>
            <View style={styles.CantidadContainer}>
              <TouchableOpacity
                style={styles.botonMenos}
                onPress={() => setCantidad(cantidad > 0 ? cantidad - 1 : 0)}
              >
                <Text style={styles.CantidadMenos}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botonCantidad}>
                <Text style={styles.Cantidad}>{cantidad}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botonMas}
                onPress={() => setCantidad(cantidad + 1)}
              >
                <Text style={styles.CantidadMas}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CarritoCardComponent;

const styles = StyleSheet.create({
  RecName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333542",
    textTransform: "capitalize",
  },
  RecAmount: {
    color: "#333542",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
  },
  RecPrice: {
    color: "#0f50a7",
    fontSize: 18,
    fontWeight: "700",
  },
  card: {
    width: width * 0.92,
    elevation: 4,
    shadowColor: "#000",
    height: 146,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderWidth: 0,
  },
  container: {
    padding: 8,
  },
  Carrito: {
    position: "absolute",
    bottom: "10%",
    right: "3%",
  },
  cora: {
    position: "absolute",
    top: "10%",
    right: "3%",
  },
  TextCont: {
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  Row1: {
    flexDirection: "row",
    alignItems: "center",
    displa: "flex",
  },
  divider: {
    color: "#AEB1C1",
    width: 2,
    backgroundColor: "#AEB1C1",
    marginLeft: 8,
    marginTop: 4,
  },
  colorText: {
    fontSize: 16,
    color: "#73778C",
  },
  Elminar: {
    color: "#B71C46",
    fontSize: 14,
  },
  Row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  CantidadContainer: {
    display: "flex",
    flexDirection: "row",
    // alignSelf:"flex-end",
    // alignItems:"center",
    // paddingHorizontal: width * 0.05,
    // marginTop:heigth*0.11,
    // backgroundColor:"red"
  },
  botonMenos: {
    backgroundColor: "#E2E3E9",
    width: 32,
    display: "flex",
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
  },
  botonMas: {
    backgroundColor: "#474A5C",
    display: "flex",
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  botonCantidad: {
    backgroundColor: "white",
    display: "flex",
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  CantidadMenos: {
    fontSize: 20,
    fontWeight: "400",
  },
  CantidadMas: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  cantidadText: {
    fontSize: 16,
    color: "#222831",
    opacity: 0.7,
    marginRight: 10,
  },
});
