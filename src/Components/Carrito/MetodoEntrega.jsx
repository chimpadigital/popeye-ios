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

import Casa from "./assets/Casa";
import Local from "./assets/Local";
import Deli from "./assets/Deli";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const MetodoEntregaComponent = ({
  navigation,
  method,
  setMethod,
  onSubmit,
}) => {
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
        <Text style={styles.Title}>Selecccioná el método de retiro</Text>
        <Text style={styles.SubTitle}>
          Elegí el método de pago que vas a estar utilizando en esta sesión
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxRow}>
          <TouchableOpacity
            onPress={() => setMethod(1)}
            style={!method || method !== 1 ? styles.CheckBox : styles.CheckBoxS}
          ></TouchableOpacity>
          <View er style={styles.IconCheck}>
            <Casa />
          </View>
          <Text style={styles.CheckBoxText}>Entrega a Domicilio</Text>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity
            style={!method || method !== 2 ? styles.CheckBox : styles.CheckBoxS}
            onPress={() => setMethod(2)}
          ></TouchableOpacity>
          <View style={styles.IconCheck}>
            <Local />
          </View>
          <Text style={styles.CheckBoxText}>Envío por trasporte </Text>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity
            style={!method || method !== 3 ? styles.CheckBox : styles.CheckBoxS}
            onPress={() => setMethod(3)}
          ></TouchableOpacity>
          <View style={styles.IconCheck}>
            <Deli />
          </View>
          <Text style={styles.CheckBoxText}>Retiro en el local </Text>
        </View>

        <TextInput
          placeholder="Observaciones..."
          multiline
          numberOfLines={10}
          style={styles.TexTarea}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={onSubmit} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>VOLVER AL PEDIDO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MetodoEntregaComponent;

const styles = StyleSheet.create({
  checkboxContainer: {
    paddingHorizontal: width * 0.07,
    paddingVertical: "3%",
  },
  checkboxRow: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "flex-start",
    height: 60,
    alignContent: "center",

    alignItems: "center",
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
    width: width * 0.94,
    height: 56,
    paddingBottom: 3,
    justifyContent: "center",
    backgroundColor: "#0F50A7",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
  },
  loginButtonText: {
    fontSize: 12,
    lineHeight: 25,
    color: "#FFF",
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

  TexTarea: {
    width: width * 0.9,
    borderWidth: 1,
    borderColor: "#979797",
    alignSelf: "center",
    textAlignVertical: "top",
    borderRadius: 12,
    padding: 12,
    marginTop: 15,
  },
  CheckBoxS: {
    borderRadius: 100,
    backgroundColor: "#0F50A7",
    borderWidth: 1,
    borderColor: "#D1D1D6",
    height: 20,
    width: 20,
  },
});
