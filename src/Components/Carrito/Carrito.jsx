import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../Elementos/Header/Header'
import CarritoCardComponent from '../Elementos/CarritoCard/CarritoCard'
import { Icon } from "react-native-elements/dist/icons/Icon";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
import { Divider } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";
const CarritoComponent = () => {
  const navigation = useNavigation();
  return (
    <>
    <ScrollView style={styles.container}>
    
      <CarritoCardComponent Nombre="Pedro asdsad sadsad" Color="red" Precio={800} Cantidad={3} navigation={navigation}/>
      <CarritoCardComponent Nombre="Pedro asdsad sadsad" Color="blue" Precio={800} Cantidad={3} navigation={navigation}/>
      <CarritoCardComponent Nombre="Pedro asdsad sadsad" Color="yellow" Precio={800} Cantidad={3} navigation={navigation}/>
      <CarritoCardComponent Nombre="Pedro asdsad sadsad" Color="green" Precio={800} Cantidad={3} navigation={navigation}/>
      <CarritoCardComponent Nombre="Pedro asdsad sadsad" Color="violet" Precio={800} Cantidad={3} navigation={navigation}/>
  
    </ScrollView>
        <View style={styles.CheckOut}>
          <Divider orientation='horizontal' width={5} style={{width:130, alignSelf:"center", borderRadius:8}} color={"#ACBAC3"}/>
        <View style={styles.Row1}>
          <Text style={styles.PrecioSubTitle}>Precio total</Text>
          <Text style={styles.PrecioTitle}>$15.000</Text>
        </View>
        <Text style={styles.FormaPago}>Modificar forma de pago</Text>
        <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Checkout")}>
      <Icon
            
            name="shopping-cart"
            type="material"
            color="#322843"
            size={25}/>
            <Text style={styles.botonText}>CONTINUAR Y FINALIZAR PEDIDO</Text>
      </TouchableOpacity>
      
      </View></>
  )
}

export default CarritoComponent

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex:1,
    flexDirection: "column",
    backgroundColor: "#fff",
    
    paddingBottom: 200,
  },
  boton:{
    width: width*0.94,
    height: 48,
    backgroundColor:"#56CCF2",
    borderRadius:10,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    alignSelf:"center",
  
  },
  botonText:{
    fontSize:14,
    color: "#322843",
    marginLeft:10
  },
  CheckOut:{
    display:"flex",
    position:"absolute",
    bottom:0,
    zIndex:9,
    backgroundColor:"#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height:160,
    width:width,
    elevation:10,
    justifyContent:"space-between",
    padding:10
  },
  Row1:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:width*0.02,
    alignItems:"center"
  },
  PrecioSubTitle:{
    color:"#7A7C85",
    fontSize:16
  },
  PrecioTitle:{
    fontSize:26,
    fontWeight:"700",
    color:"#0F50A7"
  },
  FormaPago:{
    textAlign:"right",
    color:"#0F50A7"
  }

})