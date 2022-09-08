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
import Avatar from "./Avatar.jpg";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const ModificarUserComponent = ({image,pickImage, form, setForm, onSubmit, User, navigation }) => {


  return (
    <ScrollView style={styles.container}>
      <HeaderComponent
        Carrito={true}
        navigation={navigation}
        Titulo="Asesor Comercial"
        Atras={true}
      />
      <TouchableOpacity onPress={pickImage} style={styles.imagenContainer}>
      {form.image ? <Image source={{ uri: form.image }} style={styles.imagen} />:<Image source={Avatar} style={styles.imagen} />}
      
      </TouchableOpacity>

      <TextInput placeholder={`${User.name} ${User.last_name}`} onChange={(e=>setForm({...form, name:e.target.value}))} style={styles.Name}></TextInput>
      <View style={styles.DatosContainer}>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Email </Text>
          <Text style={styles.SubTitle}>{User.email}</Text>
        </View>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Teléfono</Text>
          <TextInput placeholder={User.phone ? User.phone : "No definido"} onChange={(e=>setForm({...form, phone:e.target.value}))} style={styles.SubTitle}>
            
          </TextInput>
        </View>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Dirección</Text>
          <TextInput placeholder={User.address ? User.address : "No definido"} onChange={(e=>setForm({...form, address:e.target.value}))} style={styles.SubTitle}>
           
          </TextInput>
        </View>
        <TouchableOpacity style={styles.Boton} onPress={onSubmit}>
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
    width: "100%",
    height: 50,
    backgroundColor: "#0F50A7",
    borderRadius: 10,
    justifyContent: "center",
  },
  BotonText: {
    color: "#FFF",
    alignSelf: "center",
  },
  SubContainer: {
    height: "11%",
    justifyContent: "space-between",
  },
});
