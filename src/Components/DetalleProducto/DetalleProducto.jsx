import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Escr from "../Catálogo/assets/escr";
import HeaderComponent from "../Elementos/Header/Header";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

const DetalleProductoComponent = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent navigation={navigation} Titulo="Catálogo" Atras={true} />
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
        
    }
});
