import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import avatar from "../../assets/NoAvatar.png";
import { Icon } from "react-native-elements";
import Dots11 from "../../assets/Dots11";
import Dots2 from "../../assets/Dots2";
import Dots33 from "../../assets/Dots33";
import ofer1 from "./ofer1.png";
import ofer2 from "./ofer2.png";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const RecepcionComponent = ({ User, navigation }) => {
  console.log(User);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          name="arrow-back"
          type="material"
          color={"#0F50A7"}
          size={30}
        />
      </View>

      <View style={styles.Perfil}>
        <Image
          source={
            avatar
            // User.image
            //   ? {
            //       uri: `https://devtesting.gq/backend/storage/app/public/usuarios/${User?.image?.substring(
            //         1,
            //         User?.image?.length
            //       )}`,
            //     }
            //   : avatar
          }
          style={styles.avatar}
        />
        <View>
          <Text style={styles.Hola}>¡Hola, {User?.name}!</Text>
          <Text style={styles.Bienvenida}>
          ¿Qué querés hacer hoy?
          </Text>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.Button}>
          <Dots11 />
          <Text style={styles.ButtonText}>REALIZAR UN PEDIDO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Dots33 />
          <Text style={styles.ButtonText}>REVISAR EL CATÁLOGO DE PRECIOS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.oferContainer}>

        <TouchableOpacity style={styles.ofer}><Image style={styles.ofer} source={ofer1} /></TouchableOpacity>
        <TouchableOpacity style={styles.ofer}><Image style={styles.ofer} source={ofer2} /></TouchableOpacity>
      </View>
    </View>
  );
};

export default RecepcionComponent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
    paddingBottom: 100,
  },
  Hola: {
    fontSize: 32,
    fontWeight: "400",
    textTransform: "capitalize",
  },
  Bienvenida: {
    lineHeight: 18.75,
    color: "#474A5C",
    fontSize: 16,
    marginTop: 8,
  },
  Perfil: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: width * 0.04,
    paddingTop: heigth * 0.02,
    justifyContent: "space-between",
    width: "90%",
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius: 100,
  },
  header: {
    width: width,
    height: heigth * 0.08,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: width * 0.04,
  },
  containerButton: {
    paddingHorizontal: width * 0.04,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: heigth * 0.05,
  },
  Button: {
    width: width * 0.45,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    maxHeight:width * 0.55
  },
  ButtonText: {
    color: "#0F50A7",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  oferContainer: {
    height: heigth * 0.5,

    display: "flex",
    justifyContent: "space-between",
    paddingVertical: heigth * 0.02,
  },
  ofer: {
    width: width * 0.9,
    alignSelf: "center",
    height: width * 0.5,
    borderRadius: 10,
    elevation:10,
    marginBottom: 10,
  },
});
