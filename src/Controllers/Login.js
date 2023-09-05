import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import LoginComponent from "../Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { onBoard, SessionHash, user } from "../Redux/actions";
import { useNavigation } from "@react-navigation/native";

import { BarCodeScanner } from 'expo-barcode-scanner';

import { useEffect } from "react";
//import BarCodeScanned from "../Components/BarCodeScanned/Index";
import { Modal } from "react-native";
import { Linking } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const Login = () => {
  const navigation = useNavigation()

  const [search, setSearch] = useState("")
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [activeScanned, setActiveScanned] = useState(false)

  const [version, setVersion] = useState(false);
  const [form, setForm] = useState({});
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const [Message, setMessage] = useState("")
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [fetching, setFetching] = useState(false);
  const hash = useSelector((e) => e.SessionHash);

  const onSubmit = () => {
    setFetching(true)

    fetch(`https://api.popeyemayorista.com.ar/backend/public/api/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
      },
      body: JSON.stringify({ email: Email, password: Password }),
    }).then(async (response) => {

      try {
        const jsonRes = await response.json();
        console.log(response)
        if (response.status !== 200) { 
          setFetching(false); 
          setError(true); 
          //setMessage("Credenciales Invalidas"); 
          //setModalVisible(true); 
          return Alert.alert(
            //title
            'Error',
            //body
            'Credenciales invalidas',
            [
              { text: 'Reintentar', onPress: () => console.log('Yes Pressed') },
            ],
            );
        }
        else {

          dispatch(SessionHash(jsonRes.data));
          fetch(`https://api.popeyemayorista.com.ar/backend/public/api/Auth/Me`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jsonRes.data,
            },
          }).then(async (res) => {
            const jsonRes = await res.json();

            dispatch(user(jsonRes.data));
            setFetching(false)
            //setTimeout(() => { navigation.navigate("Bienvenido") }, 500)
            setTimeout(() => {dispatch(onBoard()); navigation.navigate("MetodoPago")}, 500)
          });

        }
      } catch {
        (err) => { console.log(error); setFetching(false) }
      }
    }

    )

  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    fetch(`https://api.popeyemayorista.com.ar/backend/public/api/Version?v=1.0.0&p=ios`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      
      const jsonRes = await res.json();
      console.log(jsonRes);
      if(jsonRes.status !== "200"){
        return Alert.alert(
          //title
          'Version desactualizada',
          //body
          'Debe actualizar la version de la aplicación',
          [
            { text: 'Actualizar', onPress: async () => Linking.canOpenURL("https://play.google.com/store/apps/details?id=com.peedro008.popeyefront").then(
              (supported) => {
                supported && Linking.openURL("https://play.google.com/store/apps/details?id=com.peedro008.popeyefront");
              },
              (err) => console.log(err)
            ) },
            {
              text: 'Cancelar',
              onPress: () => console.log('No Pressed'),
              style: 'cancel',
            },
          ],
          { cancelable: false }
          //clicking out side of alert will not cancel
        );
        return setVersion(true);
      }
    })
  }, [])

  /*
  useEffect(() => {
          fetch(`https://api.popeyemayorista.com.ar/backend/public/api/Auth/Me`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + hash,
            },
          }).then(async (res) => {
            const jsonRes = await res.json();

            dispatch(user(jsonRes.data));
            setFetching(false)
            //setTimeout(() => { navigation.navigate("Bienvenido") }, 500)
            //setTimeout(() => {dispatch(onBoard()); navigation.navigate("Recepcion")}, 500)
          });
  },[])
  */


  /*
  if (activeScanned) {
    return (
      <BarCodeScanned
        //Code scanner
        hasPermission={hasPermission}
        scanned={scanned}
        setScanned={setScanned}
        search={search}
        setSearch={setSearch}
        setActiveScanned={setActiveScanned}
        navigation={navigation}
      />
    )
  }
  */

  if (version){
    return <Modal
        animationType="slide"
        transparent={true}
        visible={version}
        onRequestClose={""}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.TitleModal}>Actualice su versión de aplicación</Text>
            <TouchableOpacity
              style={[styles.modalButton]}
              onPress={async () => Linking.canOpenURL("https://play.google.com/store/apps/details?id=com.peedro008.popeyefront").then(
                (supported) => {
                  supported && Linking.openURL("https://play.google.com/store/apps/details?id=com.peedro008.popeyefront");
                },
                (err) => console.log(err)
              )}
            >
              <Text style={styles.loginButtonText}>Actualizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  }

  return <LoginComponent form={form} setForm={setForm} onSubmit={onSubmit}
    Email={Email}
    setEmail={setEmail}
    Password={Password}
    setPassword={setPassword}
    error={error}
    modalVisible={modalVisible}
    setModalVisible={setModalVisible}
    Message={Message}
    fetching={fetching}
    setActiveScanned={setActiveScanned}
  />;
};

export default Login;

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
    marginVertical: 7,
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
    marginVertical: 5,
    width: width * 0.94,
    height: 50,
    paddingTop: 13,
    paddingBottom: 0,
    justifyContent: "center",
    backgroundColor: "#0F50A7",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    bottom: 8,
    alignItems: "center",
  },
  qrButtonText: {
    fontSize: 0,
    lineHeight: 0,
    color: "#FFF",
    flexWrap: "nowrap",
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
