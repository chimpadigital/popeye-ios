import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderComponent from "../Elementos/Header/Header";
import EditIcon from "./assets/EditIcon";
import { Divider, Icon } from "react-native-elements";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const CheckoutComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderComponent Atras Titulo="Finalizar Pedido" />
      <View style={styles.OptionContainer}>
        <View>
          <Text style={styles.Title}>Método de pago</Text>
          <TouchableOpacity style={styles.OptionBox} onPress={()=>{navigation.navigate("MetodoPago")}}>
            <Text style={styles.TextInput}>Efectivo</Text>
            <EditIcon />
          </TouchableOpacity>
          <Text style={styles.feeText}>
          Los diferentes métodos de pago podrían presentar variaciones respecto
          del precio final
        </Text>
        </View>
 
        <View>
          <Text style={styles.Title}>Entrega</Text>
          <TouchableOpacity style={styles.OptionBox} onPress={()=>{navigation.navigate("MetodoEntrega")}}>
            <Text style={styles.TextInput}>En domicilio fiscal</Text>
            <EditIcon />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.Title}>Observaciones</Text>

          <TextInput placeholder="Escribí una observación para tu pedido..." multiline numberOfLines={10} style={styles.TexTarea}>
         
          </TextInput>
        </View>
      </View>
      <View style={styles.CheckOut}>

        <View style={styles.Row1}>
          <Text style={styles.PrecioSubTitle}>Precio total</Text>
          <Text style={styles.PrecioTitle}>$15.000</Text>
        </View>
       
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("Finalizado")}
        >
          <Icon
            name="shopping-cart"
            type="material"
            color="#322843"
            size={25}
          />
          <Text style={styles.botonText}>FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutComponent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
    paddingBottom: 100,
  },
  Title: {
    fontSize: 16,
    color: "#0F50A7",
    fontWeight: "700",
    paddingBottom:12
  },

  OptionBox: {
    width: width * 0.94,
    backgroundColor: "#fff",
    alignSelf: "center",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    elevation: 8,
    borderRadius: 12,
    justifyContent: "space-between",
    paddingHorizontal: width * 0.03,
  },
  TextInput: {
    fontSize: 16,
    color: "#333542",
  },
  TexTarea: {
    width: width * 0.94,
    borderWidth: 1,
    borderColor: "#0F50A7",
    alignSelf: "center",
    textAlignVertical: "top",
    borderRadius: 12,
    padding: 12,
  },
  feeText: {
    fontSize: 11,
    textAlign: "center",
    paddingHorizontal: "10%",
    marginTop:8,
    color:"#322843"
  },
  OptionContainer: {
    justifyContent: "space-between",
    height: "75%",
    width: width * 0.94,
    alignSelf:"center",
    paddingTop:heigth*0.04
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
});
