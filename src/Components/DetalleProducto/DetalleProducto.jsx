import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Escr from "../Catálogo/assets/escr";
import HeaderComponent from "../Elementos/Header/Header";

import ColorSelectComponent from "../Elementos/ColorSelect/ColorSelect";
import { Icon } from "react-native-elements";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;


const DetalleProductoComponent = ({ navigation }) => {
  const [cantidad, setCantidad] = useState(1)
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent navigation={navigation} Titulo="Producto" Atras={true} />
      <View style={styles.CategoriaHeader}>
        <View style={styles.CatCirc}>
          <Escr />
        </View>
        <Text  style={styles.CatTitle}>Escolar</Text>
      </View>
      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.Ubi}>Mochilas y bolsos {">"} Mochila Jansport Superbreak</Text>

      <View style={styles.textContanier}>
        <Text style={styles.Title}>Mochila Jansport Superbreak</Text>
        <Text style={styles.ID}>ART. M-315</Text>
        <Text style={styles.Lote}>Lote: 5 unidades</Text>
        <Text style={styles.Price}>$9700</Text>
      </View>
      <View style={styles.ContainerSelect}>
        <ColorSelectComponent />
        <ColorSelectComponent />
      </View>
      <Text style={styles.desc}>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.</Text>
      <View style={styles.CantidadContainer}>
                <TouchableOpacity style={styles.botonMenos} onPress={()=>setCantidad(cantidad>0?cantidad-1:0)}><Text style={styles.CantidadMenos}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botonCantidad}><Text style={styles.Cantidad}>{cantidad}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botonMas} onPress={()=>setCantidad(cantidad+1)}><Text style={styles.CantidadMas}>+</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.boton}>
      <Icon
            
            name="shopping-cart"
            type="material"
            color="#322843"
            size={25}/>
            <Text style={styles.botonText}>AGREGAR AL PEDIDO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetalleProductoComponent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
    
    paddingBottom: 100,
  },
  CategoriaHeader: {
    width: "100%",
    height: heigth * 0.1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  CatCirc: {
    width: 56,
    height: 56,
    backgroundColor: "#0F50A7",
    borderRadius: 80,
    marginHorizontal: 20,
    marginVertical: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  CatTitle: {
    fontSize: 16,
    color: "#0F50A7",
    fontWeight: "700",
  },
  Ubi:{
    color:"#2D9CDB",
    fontSize:16,
    fontWeight:"400",
  
    paddingHorizontal: width * 0.05,
 
    
  },
  Title:{
    fontSize:24,
    fontWeight:"700",
    },
    ID:{
        fontSize:12,
        fontWeight:"300"
    },
    Lote:{
        fontSize:16,
        fontWeight:"500",
        marginTop:14
    },
    Price:{
        color:"#2F80ED",
        fontSize:24,
        fontWeight:"700",
        marginTop:14
    },
    textContanier:{
        paddingTop:20,
        width:"100%",
        paddingHorizontal: width * 0.05,
        alignSelf:"center",
        
    },
    ContainerSelect:{
      position:"relative",
      paddingTop:15,
      width:width,
      aignSelf:"center",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal: width * 0.05,
      height:heigth*0.11,
      zIndex:10

    },
    desc:{
      fontSize:16,
      color:"#222831",
      fontWeight:"400",
      alignSelf:"center",
      lineHeight:24,
      opacity:0.7,
      zIndex:1
   
    },
    CantidadContainer:{
      display:"flex",
      flexDirection:"row",
      alignSelf:"flex-end",
      alignItems:"center",
      paddingHorizontal: width * 0.05,
      marginTop:heigth*0.11
    },
    botonMenos:{
      backgroundColor:"#E2E3E9",
      width:32,
      display:"flex",
      height:32,
      borderRadius:6,
      alignItems:"center",
      justifyContent:"center",
      paddingBottom:3 
       },
    botonMas:{
      backgroundColor:"#474A5C",
      display:"flex",
      width:32,
      height:32,
      borderRadius:6,
      alignItems:"center",
      justifyContent:"center"
    },
    botonCantidad:{
      backgroundColor:"white",
      display:"flex",
      width:32,
      height:32,
      borderRadius:6,
      alignItems:"center",
      justifyContent:"center"
    },

    CantidadMenos:{
      fontSize:20,
      fontWeight:"400",
   
    },
    CantidadMas:{
      fontSize:16,
      fontWeight:"400",
      color:"white"
    },
    cantidadText:{
      fontSize:16,
      color:"#222831",
      opacity:0.7,
      marginRight:10
    },
    boton:{
      width: width*0.95,
      height: 48,
      backgroundColor:"#56CCF2",
      borderRadius:10,
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"row",
      alignSelf:"center",
      marginTop:heigth*0.08
    },
    botonText:{
      fontSize:14,
      color: "#322843",
      marginLeft:10
    }
});
