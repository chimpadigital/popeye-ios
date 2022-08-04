import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-elements/dist/card/Card";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { addProducto, delProducto } from "../../../Redux/actions";
import { useDispatch } from "react-redux";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const ProductoCardComponent = ({ Producto, navigation, name, amount, price, }) => {
  console.log(Producto)
  const [cora, setCora] = useState(false);
  const dispatch = useDispatch()
  const addToCart = ()=>{
      dispatch(addProducto({
        Producto:Producto,
        Precio: price,
        Nombre: name,
        Color:"Rojo",
        Cantidad:1
      }))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("DetalleProductoComponent", {Producto:Producto})}
      >
        <View style={styles.TextCont}>
        <Text style={styles.RecName}>{name}</Text>
        <Text style={styles.RecAmount}>{amount}</Text>
        <Text style={styles.RecPrice}>${price}</Text>
        </View>
        <TouchableOpacity onPress={addToCart} style={styles.Carrito}>
          <Icon
            name="shopping-cart"
            type="material"
            color="#0f50a7"
            size={20}
          />
        </TouchableOpacity>
        <View style={styles.cora}>
          <Icon
            onPress={() => setCora(!cora)}
            name="favorite"
            type="material"
            color={!cora ? "#EEEEF2" : "#B71C46"}
            size={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductoCardComponent;

const styles = StyleSheet.create({
  RecName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333542",
  },
  RecAmount: {
    color: "#333542",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
  },
  RecPrice: {
    color: "#0f50a7",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
  },
  card: {
    width: width * 0.92,
    elevation: 4,
    shadowColor: "#000",
    height: 96,
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
  TextCont:{
    height:"100%",
    justifyContent:"center",
  paddingLeft:"3%"
  }
});
