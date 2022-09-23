import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderComponent from "../Elementos/Header/Header";
import avatar from "../../assets/NoAvatar.png";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const ModificarUserComponent = ({image,pickImage,  setForm, onSubmit, User, navigation ,name,
 setEmail,
 email,
  setLast_name,
  address,
  setAddress,
  phone,
  setPhone,}) => {
    const validate = (email) => {
      const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  
      return expression.test(String(email).toLowerCase())
  }

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent
        Carrito={true}
        navigation={navigation}
        Titulo="Perfil"
        Atras={true}
      />
      <TouchableOpacity onPress={pickImage} style={styles.imagenContainer}>
      {image?
      <Image source={{ uri: image }} style={styles.imagen} />:

      <Image source={{ uri: `https://devtesting.gq/backend/storage/app/public/usuarios/${User.image.substring(1,User.image.length)}` }} style={styles.imagen} />}
      <View style={styles.ButtonFoto}><Text style={styles.ButtonFotoT}>+</Text></View>
      </TouchableOpacity>

      <Text style={styles.Name}>{`${User.name}`}</Text>
      <View style={styles.DatosContainer}>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Email </Text>
          <TextInput placeholder={User.email ? User.email : "No definido"} onChangeText={setEmail} style={styles.SubTitle}></TextInput>
          {validate(email)!==true?<Text>Ingrese un email valido</Text>:<Text></Text>}
        </View>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Teléfono</Text>
          <TextInput placeholder={User.phone ? User.phone : "No definido"} onChangeText={setPhone} style={styles.SubTitle}>
            
          </TextInput>
        </View>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Dirección</Text>
          <TextInput placeholder={User.address ? User.address : "No definido"} onChangeText={setAddress} style={styles.SubTitle}>
           
          </TextInput>
        </View>
        <TouchableOpacity   style={styles.Boton} onPress={onSubmit}>
          <Text style={styles.BotonText}>Modificar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ModificarUserComponent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",

    paddingBottom: 100,
  },
  imagen: {
    width: 200, height: 200,
    borderRadius:100,
    alignSelf: "center",

  },
  imagenContainer: {
    height: heigth * 0.3,
    justifyContent: "flex-end",
    paddingBottom: "8%",
    paddingTop:220,
  
  },
  Name: {
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  Contacto: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: heigth * 0.07,
  },
  DatosContainer: {
    paddingHorizontal: width * 0.04,
    minHeight: heigth * 0.5,
    height: heigth * 0.5,
    justifyContent: "space-evenly",
  },
  Title: {
    fontSize: 14,
    fontWeight: "700",
  },
  SubTitle: {
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "italic",
    color: "#333542",
  },
  Boton: {
   
    width:width*0.94,
    height:56,
    alignSelf:"center",
    backgroundColor: "#0F50A7",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom:-42
  },
  BotonText: {
    color: "#FFF",
    alignSelf: "center",
  },
  SubContainer: {
    height: "11%",
    justifyContent: "space-between",
  },
  ButtonFoto: {
    backgroundColor:"#0F50A7",
    width:48,
    height:48,
    borderRadius:100,
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    bottom:heigth*0.05,
    left:width*0.6
  },
  ButtonFotoT:{
    fontSize:27,
    color:"white",
    fontWeight:"600",
    marginBottom:2,
   
  }
});
