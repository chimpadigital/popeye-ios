import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderComponent from "../Elementos/Header/Header";
import CarritoCardComponent from "../Elementos/CarritoCard/CarritoCard";
import { Icon } from "react-native-elements/dist/icons/Icon";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
import { Divider } from "react-native-elements";

import spinner from "../../assets/spinner.gif"
import { Image } from "react-native";
import { useSelector } from "react-redux";

const CarritoComponent = ({ Pedido, navigation, total,onSubmitCarrito ,temp,
  setTemp,}) => {

    const COE = useSelector(e=>e.Coeficiente)
  return (
    <>
      <ScrollView style={styles.container}>
        {Pedido.length ? 
        Pedido.map((e, index)=>{
          return( <CarritoCardComponent
              Nombre={e.Nombre}
              Color={"red"}
              Precio={e.Precio}
              Cantidad={e.Cantidad}
              navigation={navigation}
              Producto={e.Producto}
              index={index}
              setTemp={setTemp}
              temp={temp}
            />)
        })
         
      : (
       <Text style={{textAlign:"center"}}>Agrega productos</Text>
        )}
      </ScrollView>
      <View style={styles.CheckOut}>
        <Divider
          orientation="horizontal"
          width={5}
          style={{ width: 130, alignSelf: "center", borderRadius: 8 }}
          color={"#ACBAC3"}
        />
        <View style={styles.Row1}>
          <Text style={styles.PrecioSubTitle}>Precio total</Text>
          <Text style={styles.PrecioTitle}>${total?Number(total)+(COE*Number(total)):0}</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("MetodosComponent")}><Text style={styles.FormaPago}>Modificar forma de pago</Text></TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={onSubmitCarrito}
        >
          <Icon
            name="shopping-cart"
            type="material"
            color="#322843"
            size={25}
          />
          <Text style={styles.botonText}>CONTINUAR Y FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CarritoComponent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop:20,
    paddingBottom: 200,
  },
  boton: {
    width: width * 0.94,
    height: 48,
    backgroundColor: "#56CCF2",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  botonText: {
    fontSize: 14,
    color: "#322843",
    marginLeft: 10,
  },
  CheckOut: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    zIndex: 9,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 160,
    width: width,
    elevation: 10,
    justifyContent: "space-between",
    padding: 10,
  },
  Row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.02,
    alignItems: "center",
  },
  PrecioSubTitle: {
    color: "#7A7C85",
    fontSize: 16,
  },
  PrecioTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0F50A7",
  },
  FormaPago: {
    textAlign: "right",
    color: "#0F50A7",
  },
});
