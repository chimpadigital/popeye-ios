import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LogoLogin from "../../assets/LogoLogin";
//import CodeInput from "react-native-confirmation-code-input";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const ResetCodeComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <LogoLogin />
      </View>
      <View style={styles.Text}>
        <Text style={styles.Title}>¿Olvidaste tu contraseña?</Text>
      </View>
      <View style={styles.Form}>
        <Text style={styles.formText}>
          Ingresa el código enviado a tu casilla de email:
        </Text>
        <View style={styles.codeInput}>
          <CodeInput
            codeLength={8}
            activeColor="#57636F"
            inactiveColor="#57636F"
            className={"border-b"}
            space={5}
            size={38}
            inputPosition="center"
            onFulfill={(code) => alert("---")}
          />
        </View>
        <View style={styles.Texts}>
          <Text style={styles.formText2}>El código expirará en</Text>
          <Text style={styles.formText3}> 5 minutos</Text>
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>RECUPERAR CONTRASEÑA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetCodeComponent;

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
    marginBottom: 8,
    height: 90,
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
    fontFamily: "Roboto-Regular",
    paddingRight: "30%",
    paddingHorizontal: width * 0.04,
  },

  Form: {
    display: "flex",
    marginTop: 70,
    height: heigth * 0.3,
  },
  Input: {
    width: width * 0.94,
    backgroundColor: "#F6F6F7",
    height: 56,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingLeft: 10,
  },
  formText: {
    paddingHorizontal: width * 0.04,
    fontSize: 14,
    color: "#57636F",
    fontWeight: "600",
  },
  Button: {
    marginVertical: 30,
    width: width * 0.94,
    height: 56,
    paddingBottom: 3,
    justifyContent: "center",
    backgroundColor: "#0F50A7",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 12,
    lineHeight: 25,
    color: "#FFF",
  },
  formText2: {
    marginTop: 15,
    paddingHorizontal: width * 0.04,
    fontSize: 14,
    color: "#57636F",
    fontWeight: "600",
    textAlign: "center",
    marginRight: -15,
  },
  formText3: {
    marginTop: 15,
    paddingHorizontal: width * 0.04,
    fontSize: 14,
    color: "#57636F",
    fontWeight: "700",
    textAlign: "center",
    marginLeft: -15,
  },
  Texts: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  codeInput: {
    alignSelf: "center",
    width: width * 0.9,
    height: 75,
    borderRadius: 10,
    backgroundColor: "#F6F6F7",
    marginVertical: 20,
  },
});
