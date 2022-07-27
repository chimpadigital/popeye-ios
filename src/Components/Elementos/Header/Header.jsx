import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon';
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const HeaderComponent = ({Titulo, Carrito, Atras, navigation}) => {
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
            Carrito&&  
            <View style={styles.Carrito}>    
            <Icon
            onPress={()=>navigation.navigate("Carrito")}
            name="shopping-cart"
            type="material"
            color="#FFF"
            size={25}
          /></View>
        
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
        left:"6%"
      },
      Tit:{
        position:"absolute",
        bottom:"35%",
        left:"11%"
      },
      Carrito:{
        position:"absolute",
        bottom:"35%",
        right:"6%"
      }
})