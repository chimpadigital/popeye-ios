import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import LogoLogin from "../../assets/LogoLogin";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconSvg from "react-native-vector-icons/MaterialCommunityIcons";
import { user } from "../../Redux/actions";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const LoginComponent = ({
  onSubmit,
  form,
  setForm,
  Email,
  error,
  setEmail,
  Password,
  fetching,
  setPassword,
  modalVisible,
  setModalVisible,
  Message,
  file,
  hash,
  setActiveScanned,
}) => {
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);

  return (
    <ScrollView style={styles.container}>
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
        <TextInput
          value={Email}
          placeholder={"Ingresa tu email"}
          style={styles.Input}
          autoCapitalize="none"
          onChangeText={setEmail}
        ></TextInput>
        <Text style={styles.formText}>Contraseña</Text>
        <View style={styles.Input}>
          <TextInput
            value={Password}
            onChangeText={setPassword}
            secureTextEntry={hidePass ? true : false}
            placeholder={"Ingresa tu contraseña"}
            style={{ width: "80%", height: "100%" }}
          ></TextInput>
          <Icon
            name={hidePass ? "eye-slash" : "eye"}
            size={17}
            style={{ marginEnd: 20 }}
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("ResetPass")} style={{display:"flex"}}>
        <Text style={styles.forgott}>¿Olvidaste tu contraseña?</Text></TouchableOpacity> */}
      </View>
      {/* <Text style={styles.SingUpText}>¿No tenés cuenta? Registrate</Text>
      <View style={styles.SignUpButton} ><Text style={styles.SingUpTextButton}>REGISTRATE</Text></View> */}
      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.loginButtonText}>
          {fetching ? "..." : "INICIAR SESIÓN"}
        </Text>
      </TouchableOpacity>

      {/*
 <TouchableOpacity
 onPress={() => setActiveScanned(true)}
 style={styles.qrButton}
>
 <Text style={styles.scannerButtonText}>
   ESCANEAR PRODUCTO
 </Text>
   <IconSvg
     name={"qrcode-scan"} 
     size={17}
     color={"#0F50A7"}
   />
</TouchableOpacity>
    */}

      {modalVisible ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.TitleModal}>{Message}</Text>
              <TouchableOpacity
                style={[styles.modalButton]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.loginButtonText}>Reintentar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 280,
    maxHeight: 200,
    width: "70%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0F50A7",
    borderRadius: 8,
  },
  logo: {
    width: 300,
    height: 120,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: heigth,
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
  Title: {
    fontSize: 32,
    lineHeight: 35,
    color: "#322843",
    fontWeight: "600",
    fontFamily: "Roboto-Regular",
  },
  TitleModal: {
    fontSize: 22,
    lineHeight: 35,
    color: "#322843",
    fontWeight: "600",
    fontFamily: "Roboto-Regular",
  },
  SubTitle: {
    fontSize: 15,
    lineHeight: 16,
    marginTop: 15,
    paddingRight: 40,
    color: "#322843",
  },
  Form: {
    display: "flex",
    marginTop: 70,
    marginBottom: heigth * 0.2,
  },
  Input: {
    width: width * 0.94,
    backgroundColor: "#F6F6F7",
    height: 56,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
  formText: {
    paddingHorizontal: width * 0.04,
    fontSize: 14,
    color: "#57636F",
    fontWeight: "600",
  },
  forgott: {
    fontSize: 12,
    textAlign: "right",
    paddingHorizontal: width * 0.04,
    color: "#E41A4A",
  },
  loginButton: {
    marginVertical: 0,
    width: width * 0.94,
    height: 56,
    paddingBottom: 3,
    justifyContent: "center",
    backgroundColor: "#0F50A7",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    //position: "absolute",
    bottom: 8,
    alignItems: "center",
  },
  modalButton: {
    marginVertical: 30,
    width: width * 0.4,
    height: 56,
    paddingBottom: 3,
    justifyContent: "center",
    backgroundColor: "#0F50A7",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    marginBottom: -5,
  },
  loginButtonText: {
    fontSize: 12,
    lineHeight: 25,
    color: "#FFF",
  },
  qrButton: {
    width: width * 0.94,
    backgroundColor: "#FFF",
    height: 56,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#0F50A7",
    borderWidth: 1.5,
    paddingLeft: 10,
  },
  scannerButtonText: {
    fontSize: 15,
    lineHeight: 30,
    color: "#0F50A7",
    marginEnd: 10,
  },
  SingUpText: {
    textAlign: "center",
    fontSize: 14,
    marginTop: heigth * 0.1,
  },
  SignUpButton: {
    marginVertical: 30,
    width: width * 0.94,
    height: 56,
    paddingBottom: 3,
    justifyContent: "center",
    backgroundColor: "#FFF",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#0F50A7",
  },
  SingUpTextButton: {
    color: "#0F50A7",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 25,
  },
});
