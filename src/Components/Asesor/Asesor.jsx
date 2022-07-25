import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../Elementos/Header/Header'
import Avatar from "./Avatar.png"
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const AsesorComponent = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
    <HeaderComponent navigation={navigation} Titulo="Asesor Comercial" Atras={true} />
    <View style= {styles.imagenContainer}>
        <Image style={styles.imagen}  source={Avatar}/>
    
    </View>
    <View style={styles.ContactoContainer}>
    <Text style={styles.Name}>Alicia Di Genaro</Text>
    <Text style={styles.Contacto}>Contacto</Text>
    <TouchableOpacity style={styles.MailBoton}><Text style={styles.textMailBoton}>CONTACTAR POR MAIL</Text></TouchableOpacity>
    <TouchableOpacity style={styles.TelBoton}><Text style={styles.textTelBoton}>CONTACTAR POR TELÉFONO</Text></TouchableOpacity>
    </View>
  </ScrollView>
  )
}

export default AsesorComponent

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        minHeight: "100%",
        
        paddingBottom: 100,
      },
    imagen:{
        borderRadius:100,
        alignSelf:"center",
    },
    imagenContainer:{
        height:heigth*0.3,
        justifyContent:"flex-end",
        paddingBottom:"8%"
    },
    Name:{
        fontSize:24,
        alignSelf:"center",
        fontWeight:"600"
    }, 
    Contacto:{
        fontSize:20,
        fontWeight:"400",
        marginTop:heigth*0.07
    },
    ContactoContainer:{
        paddingHorizontal: width * 0.04,
    },
    MailBoton:{
        backgroundColor:"#0F50A7",
        width:"100%",
        height:50,
        borderRadius:10,
        marginTop:heigth*0.04,
        justifyContent:"center"

    },
    textMailBoton:{
        color:"#FFF",
        alignSelf:"center"
    },
    TelBoton:{
        borderColor:"#0F50A7",
        borderWidth:2,
        backgroundColor:"#FFF",
        width:"100%",
        height:50,
        borderRadius:10,
        marginTop:heigth*0.03,
        justifyContent:"center",
        marginBottom:15

    },
    textTelBoton:{
        color:"#0F50A7",
        alignSelf:"center"
    }

})