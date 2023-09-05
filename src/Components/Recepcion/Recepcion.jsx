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
import avatar from "../../assets/NoAvatar.png";
import { Icon } from "react-native-elements";
import Dots11 from "../../assets/Dots11";
import Dots33 from "../../assets/Dots33";
import { useSelector } from "react-redux";
import { initial } from "../../Redux/actions";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const RecepcionComponent = ({ User, navigation, dispatch, promotions }) => {
  const _initial = useSelector((state) => state.Initial);

  return (
    <ScrollView style={styles.container}>
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
            User.image
              ? {
                  uri: `https://api.popeyemayorista.com.ar/backend/storage/app/public/usuarios/${User?.image?.substring(
                    1,
                    User?.image?.length
                  )}`,
                }
              : avatar
          }
          style={styles.avatar}
        />
        <View>
          <Text style={styles.Hola}>¡Hola, {User?.name}!</Text>
          <Text style={styles.Bienvenida}>¿Qué querés hacer hoy?</Text>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.Button}
          //onPress={() => dispatch(initial("Pedidos"))}
          //onPress={() =>{navigation.navigate("Pedidos")}}

          onPress={function () {
            if (_initial) {
              return navigation.navigate("Pedidos");
            } else {
              return dispatch(initial("Pedidos"));
            }
          }}
        >
          <Dots11 />
          <Text style={styles.ButtonText}>REVISAR TUS PEDIDOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={function () {
            if (_initial) {
              return navigation.navigate("Catalogo");
            } else {
              return dispatch(initial("Catalogo"));
            }
          }}
        >
          <Dots33 />
          <Text style={styles.ButtonText}>REVISAR EL CATÁLOGO DE PRECIOS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.oferContainer}>
        {promotions
          ? promotions.map((promo) => (
              <TouchableOpacity style={styles.ofer}>
                <Image
                  style={styles.ofer}
                  source={{
                    uri: `${promo.url}`,
                  }}
                />
              </TouchableOpacity>
            ))
          : null}
      </View>
    </ScrollView>
  );
};

export default RecepcionComponent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: heigth,
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
    marginHorizontal: 30
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
    paddingHorizontal: width * 0.02,
    borderRadius: 10,
    elevation: 10,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    height: width * 0.45,
    paddingTop: heigth * 0.02,
    paddingBottom: heigth * 0.007,
  },
  ButtonText: {
    color: "#0F50A7",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    minHeight: 38,
  },
  oferContainer: {
    height: heigth * 0.5,

    display: "flex",
    justifyContent: "space-between",
    paddingTop: heigth * 0.02,
    marginBottom: heigth * 0.05,
  },
  ofer: {
    width: "100%", //width * 0.9,
    alignSelf: "center",
    height: width * 0.5,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 10,
  },
});
