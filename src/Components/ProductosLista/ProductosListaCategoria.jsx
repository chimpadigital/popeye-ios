import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Escr from '../Catálogo/assets/escr';
import { Card } from "react-native-elements";
import HeaderComponent from"../Elementos/Header/Header.jsx"
import ProductoCardComponent from '../Elementos/ProductoCard/ProductoCard';
import {DataTemp} from "../../../dataTemo"
import { Image } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const ProductosCategoriaComponent = ({navigation, route,Prod,cat,Pagination, setPagination,
  subCat}) => {
  
  return (<>
     <HeaderComponent navigation={navigation} Titulo="Catálogo" Atras={true}/>
    <ScrollView style={styles.container}>
      <View style={styles.CategoriaHeader}>
        <TouchableOpacity
      
         
          style={styles.CatCirc}
        >
          <Escr />
        </TouchableOpacity>
        <Text style={styles.CatTitle}>{cat} {'>'} {subCat}</Text>
      </View>
      <View >
      {Prod?.data?
      Prod.data.map((e) => {
          return (
           <ProductoCardComponent Producto={e} navigation={navigation} cat={cat} subCat={subCat}/>
          );
        })
      :
      <Image source={{uri: "https://gifimage.net/wp-content/uploads/2018/04/loading-bar-animated-gif-transparent-background-6.gif"}}  
      style={{width: 300, height:300, alignSelf:"center"}} />}
      </View>
      {Prod?.data?
      <View style={styles.PaginationBox}>
        <View style={styles.GoBack}>
        <Icon
            onPress={() => {Pagination>1&&setPagination(Pagination-1)}}
            name="arrow-back"
            type="material"
            color={Pagination>1?"#0F50A7": "grey"}
            size={25}
          />
        </View>
        <View style={styles.GoFo}>
        <Icon
            onPress={() =>setPagination(Pagination+1)}
            name="arrow-forward"
            type="material"
            color="#0F50A7"
            size={25}
          />
        </View>  
      </View> :<></>}
      </ScrollView></>
  )
}

export default ProductosCategoriaComponent

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
        maxWidth:"80%"
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
      PaginationBox:{
        width:"100%",
        height:50,
   
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal: width * 0.04,
        marginVertical:15
      },
      GoFo:{
        width:40,
        height:40,
        borderRadius:8,
        backgroundColor:"white",
        elevation:5,
        display:"flex",
        justifyContent:"center"
        
      },
       GoBack:{
        width:40,
        height:40,
        borderRadius:8,
        backgroundColor:"white",
        elevation:5,
        display:"flex",
        justifyContent:"center"
        
      }
})