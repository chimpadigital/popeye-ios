import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../Elementos/Header/Header'
import { Divider } from 'react-native-elements/dist/divider/Divider';

import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const PedidosComponent = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false) 
    const pedidos = [
        {
          nro: "12123",
          details: "24 unidades",
          date: "14/05/2021",
        },
        {
          nro: "128923",
          details: "15 unidades",
          date: "19/05/2021",
        },
        {
          nro: "188923",
          details: "4 unidades",
          date: "02/06/2021",
        },
        {
            nro: "12123",
            details: "24 unidades",
            date: "14/05/2021",
          },
          {
            nro: "128923",
            details: "15 unidades",
            date: "19/05/2021",
          },
          {
            nro: "188923",
            details: "4 unidades",
            date: "02/06/2021",
          },
          {
            nro: "12123",
            details: "24 unidades",
            date: "14/05/2021",
          },
          {
            nro: "128923",
            details: "15 unidades",
            date: "19/05/2021",
          },
          {
            nro: "188923",
            details: "4 unidades",
            date: "02/06/2021",
          },
          {
            nro: "12123",
            details: "24 unidades",
            date: "14/05/2021",
          },
          {
            nro: "128923",
            details: "15 unidades",
            date: "19/05/2021",
          },
          {
            nro: "188923",
            details: "4 unidades",
            date: "02/06/2021",
          },

      ];
  return (
    <View style={styles.container}>
        <HeaderComponent  Titulo={"Mis Pedidos"}/>
        <View style={styles.PedidosContainer}>
        <Text style={styles.SubTitleP}>Pedidos Actuales</Text>
        <View style={styles.ViewCatch}>
       <Text style={styles.catch}>No tenés pedidos actuales</Text>
       </View>
      </View>
      <View style={styles.PedidosContainer}>
        <Text style={styles.SubTitleP}>Historial de pedidos</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        {pedidos.map((e) => {
          return (
            <TouchableOpacity onPress={()=>{setOpen(!open)}} style={styles.pedidosCard}>
              <Text style={styles.PedNum}>Pedido #{e.nro}</Text>
              <Text style={styles.PedT}>{e.details}</Text>
              <Text style={styles.PedT}>${e.date}</Text>
              <Divider />
            </TouchableOpacity>
          );
        })}
       </ScrollView>

      </View>
      {
        open&&
        <View style={styles.CheckOut}>
          <Divider orientation='horizontal' width={5} style={{width:130, alignSelf:"center", borderRadius:8}} color={"#ACBAC3"}/>
          <View style={styles.butonContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate("DetallePedido")} style={styles.loginButton} ><Text style={styles.loginButtonText}>VER EL PEDIDO</Text></TouchableOpacity >
      <TouchableOpacity style={styles.SignUpButton} ><Text style={styles.SingUpTextButton}>VOLVER A REALIZAR EL PEDIDO</Text></TouchableOpacity>
    </View>
   
      
      </View>
      }



      
    </View>
  )
}

export default PedidosComponent

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        minHeight: "100%",
        paddingBottom:100
      },
    PedidosContainer: {
        paddingHorizontal: width * 0.04,
       
      },
    pedidosCard:{
        maxWidth: width * 0.92,
        width: width * 0.92,
        border:0,
        shadowColor: "#000",
        height: 96,
        alignSelf: "center",
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        marginTop:-15,
        paddingHorizontal: width * 0.02,
        
      },
    PedNum:{
        fontSize:14,
        fontWeight:"700"
      },
      PedT:{
        fontSize:14,
        fontWeight:"300",
        fontStyle:"italic",
        marginBottom:4
      },
      SubTitleP: {
        fontSize: 20,
        fontWeight: "700",
        color: "#333542",
        marginVertical: width * 0.04,

        
      },
      catch:{
        alignSelf:"center",
        fontStyle:"italic"
      },
      ViewCatch:{
         height:70,
        justifyContent:"center",

      },
      CheckOut:{
        display:"flex",
        position:"absolute",
        bottom:0,
        zIndex:9,
        backgroundColor:"#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height:170,
        width:width,
        elevation:10,
        justifyContent:"space-between",
        padding:10
      },  
      loginButton: {
        
        width:width*0.94,
        height:56,
        paddingBottom:3, 
        justifyContent:"center",
        backgroundColor:"#0F50A7",
        alignSelf:"center",
        borderRadius:10,
        display:"flex",
        alignItems:"center"
       
      },
      loginButtonText:{
        fontSize:12,
        lineHeight:25,
        color:"#FFF"
      },

      SignUpButton: {
        
        width:width*0.94,
        height:56,
        paddingBottom:3, 
        justifyContent:"center",
        backgroundColor:"#FFF",
        alignSelf:"center",
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        borderWidth: 1.5,
        borderColor:"#0F50A7",
        marginTop:15
    
      },
      SingUpTextButton: {
        color:"#0F50A7",
        fontSize:12,
        fontWeight:"700",
        lineHeight:25
      },
      butonContainer:{
    
      }
})