import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductoCardComponent from '../Elementos/ProductoCard/ProductoCard';
import { useNavigation } from "@react-navigation/native";
import HeaderComponent from '../Elementos/Header/Header';
import { Divider } from "react-native-elements";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const DetallePedidoComponent = () => {
    const navigation = useNavigation();
    const recomendados = [
        {
          name: "Caja de lápices Faber Castell",
          amount: "24 unidades",
          price: 2825,
        },
        {
          name: "Tijeras Mapped antideslizan...",
          amount: "60 unidades",
          price: 1995,
        },
        {
          name: "Fibrón Trabi multitrazo negr...",
          amount: "12 unidades",
          price: 805,
        },
        {
            name: "Caja de lápices Faber Castell",
            amount: "24 unidades",
            price: 2825,
          },
          {
            name: "Tijeras Mapped antideslizan...",
            amount: "60 unidades",
            price: 1995,
          },
          {
            name: "Fibrón Trabi multitrazo negr...",
            amount: "12 unidades",
            price: 805,
          },
          {
            name: "Caja de lápices Faber Castell",
            amount: "24 unidades",
            price: 2825,
          },
          {
            name: "Tijeras Mapped antideslizan...",
            amount: "60 unidades",
            price: 1995,
          },
          {
            name: "Fibrón Trabi multitrazo negr...",
            amount: "12 unidades",
            price: 805,
          },
          
      ];
  return (
    <View style={{height:heigth}}>
      
     <HeaderComponent navigation={navigation} Titulo="Pedido" Atras={true} Carrito={true}/>
     <View style={styles.Titular}>
        <View style={styles.Circulo}/>
        <Text style={styles.Title}>Pedido #111111</Text>
     </View>
    <ScrollView style={styles.container}>
       {recomendados.map((e) => {
          return (
           <ProductoCardComponent name={e.name} price={e.price} amount={e.amount} navigation={navigation}/>
          );
        })}
 
    </ScrollView>
    <View style={styles.CheckOut}>
          <Divider orientation='horizontal' width={5} style={{width:130, alignSelf:"center", borderRadius:8}} color={"#ACBAC3"}/>
          <View style={styles.butonContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate("DetallePedido")} style={styles.loginButton} ><Text style={styles.loginButtonText}>EDITAR EL PEDIDO</Text></TouchableOpacity >
      <TouchableOpacity style={styles.SignUpButton} ><Text style={styles.SingUpTextButton}>VOLVER A REALIZAR EL PEDIDO</Text></TouchableOpacity>
    </View>
   
      
      </View>
    </View>
  )
}

export default DetallePedidoComponent

const styles = StyleSheet.create({
    Titular:{
        flexDirection:"row",
        width:width,
        height:80,
        alignItems:"center",
        paddingHorizontal:width*0.05,
        
    },
    Circulo:{ 
        height:56,
        width:56,
        borderRadius:100,
        backgroundColor:"#0F50A7",
        marginRight:15
    },
    Title:{
        color:"#0F50A7",
        fontSize:16,
        fontWeight:"700"

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
})