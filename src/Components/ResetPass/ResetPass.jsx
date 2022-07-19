import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import LogoLogin from "../../assets/LogoLogin";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const ResetPassComponent = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <LogoLogin />
      </View>
      <View style={styles.Text}>
        <Text style={styles.Title}>¿Olvidaste tu 
contraseña?</Text>
      </View>
       <View style={styles.Form}>
        <Text style={styles.formText}>Email o nombre de usuario</Text>
        <TextInput placeholder= {"email@ejemplo.com"} style={styles.Input}></TextInput>
        <TouchableOpacity onPress={()=>navigation.navigate("ResetCode")} style={styles.Button} ><Text style={styles.ButtonText}>SIGUIENTE</Text></TouchableOpacity >
        </View>
    </View>
  
  );
};

export default ResetPassComponent;

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
        alignItems: "flex-end",
      },
      Title: {
        fontSize: 32,
        lineHeight: 35,
        color: "#322843",
        fontWeight: "600",
        fontFamily:"Roboto-Regular",
        paddingRight:"30%",
        paddingHorizontal: width * 0.04,
      },

      Form: {
      display:"flex",
      marginTop:70
        },
      Input: {
        width:width*0.94,
        backgroundColor:"#F6F6F7",
        height:56,
        alignSelf:"center",
        borderRadius:10,
        marginVertical:20,
        paddingLeft:10
      },
      formText: {
        paddingHorizontal: width * 0.04,
        fontSize: 14,
        color: "#57636F",
        fontWeight:"600"
      },
      Button: {
        marginVertical:30,
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
      ButtonText:{
        fontSize:12,
        lineHeight:25,
        color:"#FFF"
      },
});
