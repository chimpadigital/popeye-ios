import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Escr from '../Catálogo/assets/escr';
import { Card } from "react-native-elements";
import HeaderComponent from"../Elementos/Header/Header.jsx"
import ProductoCardComponent from '../Elementos/ProductoCard/ProductoCard';
import {DataTemp} from "../../../dataTemo"
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const ProductosListaCategoriaComponent = ({navigation}) => {
    const recomendados = DataTemp.slice(0,20)
  return (<>
     <HeaderComponent navigation={navigation} Titulo="Catálogo" Atras={true}/>
    <ScrollView style={styles.container}>
      <View style={styles.CategoriaHeader}>
        <TouchableOpacity
      
         
          style={styles.CatCirc}
        >
          <Escr />
        </TouchableOpacity>
        <Text style={styles.CatTitle}>Escolar {'>'} Mochilas y bolsos</Text>
      </View>
      <View style={{paddingBottom:100}}>
      {recomendados.map((e) => {
          return (
           <ProductoCardComponent name={e.des_art} price={e.pre_art} amount={e.amount} navigation={navigation}/>
          );
        })}</View>
      </ScrollView></>
  )
}

export default ProductosListaCategoriaComponent

const styles = StyleSheet.create({
    Header: {
       
        height: 90,   
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "8%",
        paddingHorizontal: width * 0.04,
        alignItems: "flex-start",
        backgroundColor: "#0F50A7",
      },
      HeaderTitle: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "500",
        paddingLeft: 35,
        marginBottom: 8,
      },
      container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        minHeight: "100%",
   
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
      RecName: {
        fontSize: 14,
        fontWeight: "500",
        color: "#333542",
      },
      RecAmount: {
        color: "#333542",
        fontSize: 14,
        fontWeight: "400",
      },
      RecPrice: {
        color: "#0f50a7",
        fontSize: 20,
        fontWeight: "600",
      },
      card: {
        width: width * 0.92,
        elevation: 4,
        shadowColor: "#000",
        height: 96,
        alignSelf: "center",
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
      
      },
})