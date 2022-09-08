import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderComponent from "../Elementos/Header/Header";
import Avatar from "./Avatar.jpg";
import { useSelector } from "react-redux";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

function PerfilComponent({ navigation }) {
  const User = useSelector((state)=>state.User)
  console.log(User)
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent
      Carrito={true}
        navigation={navigation}
        Titulo="Asesor Comercial"
        Atras={true}
      />
      <View style={styles.imagenContainer}>
        <Image style={styles.imagen} source={Avatar} />
      </View>

      <Text style={styles.Name}>{`${User.name} ${User.last_name}`}</Text>
      <View style={styles.DatosContainer}>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Email</Text>
          <Text style={styles.SubTitle}>{User.email}</Text>
        </View>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Teléfono</Text>
          <Text style={styles.SubTitle}>{User.phone?User.phone:"No definido"}</Text>
        </View>
        <View style={styles.SubContainer}>
          <Text style={styles.Title}>Dirección</Text>
          <Text style={styles.SubTitle}>
          {User.address?User.address:"No definido"}
          </Text>
        </View>
        <TouchableOpacity style={styles.Boton} onPress={()=>navigation.navigate("ModificarUser") }>
          <Text style={styles.BotonText}>MODIFICAR DATOS DEL PERFIL</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
  },
  Name: {
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "600",
    textTransform:"capitalize"
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
  SubContainer:{
    height:"11%",
    justifyContent:"space-between"
  }
});
export default PerfilComponent;
