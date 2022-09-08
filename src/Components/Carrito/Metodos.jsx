import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import LogoLogin from "../../assets/LogoLogin";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const MetodosComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.atras}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-back"
            type="material"
            color="#0F50A7"
            size={25}
          />
        </View>
        <LogoLogin />
      </View>
      <View style={styles.Text}>
        <Text style={styles.Title}>Selecccioná el método de pago</Text>
        <Text style={styles.SubTitle}>
          Elegí el método de pago que vas a estar utilizando en esta sesión
        </Text>
      </View>
      <TouchableOpacity  style={styles.loginButton} onPress={() => navigation.navigate("MetodoPago")} ><Text style={styles.loginButtonText}>UN MEDIO DE PAGO</Text></TouchableOpacity >
      <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate("DividirPago")}><Text style={styles.SingUpTextButton}>DIVIDIR EL PAGO</Text></TouchableOpacity>
    </View>
  );
};

export default MetodosComponent;

const styles = StyleSheet.create({
  SignUpButton: {
    marginTop:30,
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
    fontSize:13,
    fontWeight:"700",
    lineHeight:25
  },

  loginButtonText:{
    fontSize:13,
    lineHeight:25,
    color:"#FFF"
  },
  loginButton: {
    marginTop  :30,
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
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  Header: {
    marginBottom: 8,
    height: 90,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "8%",
    paddingHorizontal: width * 0.04,
    alignItems: "flex-end",
  },
  atras: {
    position: "absolute",
    bottom: "35%",
    left: "6%",
  },
  Title: {
    fontSize: 32,
    lineHeight: 35,
    color: "#322843",
    fontWeight: "600",
    fontFamily: "Roboto-Regular",
    paddingRight: "20%",
  },
  SubTitle: {
    fontSize: 15,
    lineHeight: 18,
    marginTop: 15,
    paddingRight: 40,
    color: "#322843",
  },Text: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: width * 0.04,
    paddingVertical: heigth * 0.01,
  },
});
