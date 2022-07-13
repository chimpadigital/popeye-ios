import { Button, Dimensions, Image, StyleSheet, Text, View,  } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import LogoLogin from "../../assets/LogoLogin";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const LoginComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <LogoLogin />
      </View>
      <View style={styles.Text}>
        <Text style={styles.Title}>Iniciar sesión</Text>
        <Text style={styles.SubTitle}>
          Para poder comenzar a realizar tu pedido es necesario que inicies
          sesión.
        </Text>
      </View>
      <View style={styles.Form}>
        <Text style={styles.formText}>Email o nombre de usuario</Text>
        <TextInput placeholder= {"Ingresa tu email"} style={styles.Input}></TextInput>
        <Text style={styles.formText}>Contraseña</Text>
        <TextInput  secureTextEntry={true} placeholder= {"Ingresa tu contraseña"} style={styles.Input}></TextInput>
        <Text style={styles.forgott}>¿Olvidaste tu contraseña?</Text>
        <View style={styles.loginButton} ><Text style={styles.loginButtonText}>INICIAR SESIÓN</Text></View>
      </View>
      <Text style={styles.SingUpText}>¿No tenés cuenta? Registrate</Text>
      <View style={styles.SignUpButton} ><Text style={styles.SingUpTextButton}>REGISTRATE</Text></View>
    </View>
  );
};

export default LoginComponent;

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
  Text: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: width * 0.04,
    paddingVertical: heigth * 0.01,
  },
  Title: {
    fontSize: 32,
    lineHeight: 35,
    color: "#322843",
    fontWeight: "600",
  },
  SubTitle: {
    fontSize: 15,
    lineHeight: 16,
    marginTop: 15,
    paddingRight: 40,
    color: "#322843",
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
  forgott: {
    fontSize: 12,
    textAlign:"right",
    paddingHorizontal: width * 0.04,
    color: "#E41A4A"
  },
  loginButton: {
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
  loginButtonText:{
    fontSize:12,
    lineHeight:25,
    color:"#FFF"
  },
  SingUpText:{
    textAlign:"center",
    fontSize:14,
    marginTop: heigth*0.1
  },
  SignUpButton: {
    marginVertical:30,
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
    borderColor:"#0F50A7"

  },
  SingUpTextButton: {
    color:"#0F50A7",
    fontSize:12,
    fontWeight:"700",
    lineHeight:25
  }

});