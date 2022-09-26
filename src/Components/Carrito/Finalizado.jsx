import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Envi from "./assets/Envi"
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

const FinalizadoComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>¡El pedido fue realizado con éxito!</Text>
      <View style={styles.imageContainer}>
      <Envi/></View>
      <View style={styles.butonContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate("Pedidos")} style={styles.loginButton} ><Text style={styles.loginButtonText}>VOLVER AL MENÚ DE PEDIDOS</Text></TouchableOpacity >
      <TouchableOpacity  onPress={()=>navigation.navigate("Home")} style={styles.SignUpButton} ><Text style={styles.SingUpTextButton}>VOLVER AL INICIO</Text></TouchableOpacity>
    </View>

    </View>
  )
}

export default FinalizadoComponent

const styles = StyleSheet.create({
    container:{
        width:width*0.95,
        alignSelf:"center",
        paddingTop:"25%",
        height:heigth
    },
    imageContainer:{
        alignSelf:"center",
        marginTop:"10%"
    },
    Titulo:{
        fontSize:34,
        textAlign:"center",
        fontWeight:"600",
        paddingHorizontal:40,
        lineHeight:38
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
        position:"absolute",
        bottom:60
      }

})