import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  CheckBox,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native";
import LogoLogin from "../../assets/LogoLogin";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import Transfer from "./assets/Transfer";
import CueCo from "./assets/CueCo";
import Efec from "./assets/Efec";
import Cheq from "./assets/Cheq";
import Tarj from "./assets/Tarj";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const MetodoPagoComponent = () => {
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
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxRow}>
          <TouchableOpacity style={styles.CheckBox}></TouchableOpacity>
          <View er style={styles.IconCheck}>
            <Transfer />
          </View>
          <Text style={styles.CheckBoxText}>Transferencia bancaria</Text>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity style={styles.CheckBox}></TouchableOpacity>
          <View style={styles.IconCheck}>
            <Efec  />
          </View>
          <Text style={styles.CheckBoxText}>Efectivo</Text>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity style={styles.CheckBox}></TouchableOpacity>
          <View style={styles.IconCheck}>
            <Tarj  />
          </View>
          <Text style={styles.CheckBoxText}>Tarjeta de crédito o débito</Text>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity style={styles.CheckBox}></TouchableOpacity>
          <View style={styles.IconCheck}>
            <Cheq />
          </View>
          <Text style={styles.CheckBoxText}>Cheque</Text>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity style={styles.CheckBox}></TouchableOpacity>
          <View style={styles.IconCheck}>
            <CueCo />
          </View>
          <Text style={styles.CheckBoxText}>Cuenta corriente</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.loginButton} ><Text style={styles.loginButtonText}>VOLVER AL PEDIDO</Text></TouchableOpacity >
    </View>
  );
};

export default MetodoPagoComponent;

const styles = StyleSheet.create({
  checkboxContainer: {
    paddingHorizontal: width * 0.07,
    paddingTop:"10%"
  },
  checkboxRow: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "flex-start",
    height: 60,
    alignContent: "center",
  
    alignItems:"center"
  },
  CheckBoxText: {
    fontSize: 16,
    color: "#2C2C2E",
  },
  IconCheck: {
    marginHorizontal: 10,
  },

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
    marginBottom: 8,
    height: 90,
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
  loginButton: {
   
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
    bottom:15
   
  },
  loginButtonText:{
    fontSize:12,
    lineHeight:25,
    color:"#FFF"
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
  },
  atras: {
    position: "absolute",
    bottom: "35%",
    left: "6%",
  },
  CheckBox: {
    borderRadius: 100,

    borderWidth: 1,
    borderColor: "#D1D1D6",
    height: 20,
    width: 20,
  },
});