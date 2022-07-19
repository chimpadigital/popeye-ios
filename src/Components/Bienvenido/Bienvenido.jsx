import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LogoLogin from "../../assets/LogoLogin";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const BienvenidoComponent = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <LogoLogin />
      </View>
        <View style={styles.ContainerText}>
            <Text style={styles.Title}>¡Nos encanta recibirte!</Text>
            <Text style={styles.SubTitle}>Te presentamos nuestra aplicación</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("LoginCarousel")} style={styles.Button}><Text style={styles.ButtonText}>SIGUIENTE</Text></TouchableOpacity>
    </View>
  )
}

export default BienvenidoComponent

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 120,
      },
      container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        minHeight: "100%",
        
        
      },
      Header: {
        marginBottom: "4%",
        height: "10%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "8%",
        paddingHorizontal: width * 0.04,
        paddingVertical: width * 0.4,
        alignItems: "flex-end",
      },
      ContainerText:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:heigth*0.7
      },
      Title:{
        fontSize:30,
        color:"#0F50A7",
        fontWeight:"600"
      },
      SubTitle:{
        fontSize:20,
        color:"#322843",
        fontWeight:"500",
        marginTop:heigth*0.04,
        paddingHorizontal:"20%",
        textAlign:"center",
        lineHeight:23.44
      },
      Button: {
      
        width:width*0.94,
        height:56,
        paddingBottom:3, 
        justifyContent:"center",
        backgroundColor:"#0F50A7",
        alignSelf:"center",
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        position:"absolute",
        bottom: 30
       
      },
      ButtonText:{
        fontSize:12,
        lineHeight:25,
        color:"#FFF",
        position:"absolute",
        bottom: 20
      },
})