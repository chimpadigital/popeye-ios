import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Carro from "../../../assets/Carrito"
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const HeaderComponent = ({Titulo, Carrito, Atras, navigation}) => {
  
  const Pedido = useSelector((state) => state.Pedido);
  return (
    <View style={styles.Header}>
        {
            Atras?  
            <View style={styles.atras}>    
            <Icon
            onPress={() => navigation.goBack()}
            name="arrow-back"
            type="material"
            color="#FFF"
            size={25}
          /></View> 
       :
       <View style={{width:25}}/>
        }
        <View style={styles.Tit}>
    <Text style={styles.HeaderTitle}>{Titulo}</Text></View>
    {
            Pedido.length? 
            <View style={styles.Carrito}>    
            <Carro
                     navigation={navigation}
          /></View>:<></>
        
        }
  </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    Header: {
        flexDirection:"row",
        position:"relative",
        top:0,
        height: 90,   
        width: "100%",
        display: "flex",
       
        paddingTop: "8%",
        paddingHorizontal: width * 0.04,
        alignItems: "center",
        backgroundColor: "#0F50A7",
        zIndex:9,
       
      },
      HeaderTitle: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "500",
        paddingLeft: 35,
      
      },
      atras:{
        position:"absolute",
        bottom:"35%",
        left:"4%"
      },
      Tit:{
        position:"absolute",
        bottom:"35%",
        left:"11%"
      },
      Carrito:{
        position:"absolute",
        bottom:"0%",
        right:"1%"
      }
})