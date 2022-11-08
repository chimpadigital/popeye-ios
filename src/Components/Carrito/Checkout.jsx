import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderComponent from "../Elementos/Header/Header";
import EditIcon from "./assets/EditIcon";
import { Divider, Icon } from "react-native-elements";
import { useSelector } from "react-redux";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const CheckoutComponent = ({
  openTerm,
  setOpenTerm,

  paymentMethod,
  total,
  shippingMethod,
  Pedido,
  observation,
  onSubmitPedido,
  setObservation,
  modalVisible,
  error,
  Message,
  setModalVisible,
  setError,
  setMessage,
}) => {
  const navigation = useNavigation();
  const COE = useSelector(e=>e.Coeficiente)
  return (
    <View style={styles.container}>
      <HeaderComponent
        Atras
        Titulo="Finalizar Pedido"
        navigation={navigation}
      />

      <ScrollView style={{ minHeight: heigth * 0.85, paddingBottom: 50 }}>
        <View style={styles.OptionContainer}>
          <View>
            <Text style={styles.Title}>Método de pago</Text>
            <TouchableOpacity
              style={styles.OptionBox}
              onPress={() => {
                navigation.navigate("MetodosComponent");
              }}
            >
              <Text style={styles.TextInput}>
                {!paymentMethod.length
                  ? "Seleccione un método"
                  : paymentMethod.length == 2
                  ? "Pago dividido"
                  : paymentMethod[0].id == 1
                  ? "Efectivo"
                  : paymentMethod[0].id == 2
                  ? "Transferencia bancaria"
                  : paymentMethod[0].id == 3
                  ? "Tarjeta de crédito o débito"
                  : paymentMethod[0].id == 4
                  ? "Cheque"
                  : "Cuenta corriente"}
              </Text>
              <EditIcon />
            </TouchableOpacity>
            <Text style={styles.feeText}>
              Los diferentes métodos de pago podrían presentar variaciones
              respecto del precio final
            </Text>
          </View>

          <View>
            <Text style={styles.Title}>Entrega</Text>
            <TouchableOpacity
              style={styles.OptionBox}
              onPress={() => {
                navigation.navigate("MetodoEntrega");
              }}
            >
              <Text style={styles.TextInput}>
                {shippingMethod == 1
                  ? "Entrega a domicilio"
                  : shippingMethod == 2
                  ? "Envio por transporte"
                  : shippingMethod == 3
                  ? "Retiro en local"
                  : "Seleccione un método"}
              </Text>
              <EditIcon />
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0}>
            <View>
              <Text style={styles.Title}>Observaciones</Text>

              <TextInput
                value={observation}
                onChangeText={setObservation}
                placeholder="Escribí una observación para tu pedido..."
                multiline
                numberOfLines={10}
                style={styles.TexTarea}
              ></TextInput>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <View style={styles.CheckOut}>
        <View style={styles.Row1}>
          <Text style={styles.PrecioSubTitle}>Precio total</Text>
          <Text style={styles.PrecioTitle}>
            ${(Number(total)+(COE*Number(total))).toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.boton}
          onPress={()=>setOpenTerm(true)}
          //onPress={() => navigation.navigate("Finalizado")}
        >
          <Icon
            name="shopping-cart"
            type="material"
            color="#322843"
            size={25}
          />
          <Text style={styles.botonText}>FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView1}>
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={openTerm}
          onRequestClose={() => {
            setOpenTerm(!openTerm);
          }}
        >
          <View style={styles.centeredView1}>
            <View style={{justifyContent:"space-between",height:"100%"}}>
              <Text style={styles.TitleModal1}>Bases y condiciones</Text>
              <Text style={styles.TextModal}>
                Antes de continuar, se les recuerda a los clientes que los
                pedidos sólo pueden ser cancelados o modificados en un plazo de
                24hs. Posterior a ese plazo, se cobrará un recargo ante
                cualquier cambio o cancelación. Ante cualquier duda o consulta,
                se les recuerda que pueden contactar a sus respectivos
                ejecutivos de cuenta.
              </Text>
              <View style={{flexDirection:"row", justifyContent:"flex-end",}}>
              <TouchableOpacity
                style={[styles.modalButton1]}
                onPress={() => setOpenTerm(false)}
              >
                <Text style={styles.loginButtonText1}>VOLVER</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton1]}
                onPress={onSubmitPedido}
              >
                <Text style={styles.loginButtonText2}>ACEPTO</Text>
              </TouchableOpacity></View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CheckoutComponent;

const styles = StyleSheet.create({
  TextModal:{
    fontSize:14,
    lineHeight:20
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
  loginButtonText2:{
    fontSize: 16,
    lineHeight: 35,
    color: "#0F50A7",
    fontWeight: "600",
    fontFamily: "Roboto-Regular",
  }
  ,
  loginButtonText1:{
    fontSize: 16,
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
  modalButton1:{
    width:"30%",
    height:60,
    alignItems:"center",
    justifyContent:"center",
    
  },
  TitleModal1: {
    fontSize: 18,
    lineHeight: 35,
    color: "#322843",
    fontWeight: "600",
    fontFamily: "Roboto-Medium",
    color:"#0F50A7",
  },
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
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 280,
    maxHeight:"33%",
    width: "70%",
    backgroundColor: "white",
    elevation:10,
    borderRadius: 8,
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.03,
  },
  
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: heigth * 0.96,
    maxHeight: heigth * 0.96,
    flex: 1,
  },
  Title: {
    fontSize: 16,
    color: "#0F50A7",
    fontWeight: "700",
    paddingBottom: 12,
  },

  OptionBox: {
    width: width * 0.94,
    backgroundColor: "#fff",
    alignSelf: "center",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    elevation: 8,
    borderRadius: 12,
    justifyContent: "space-between",
    paddingHorizontal: width * 0.03,
  },
  TextInput: {
    fontSize: 16,
    color: "#333542",
  },
  TexTarea: {
    width: width * 0.94,
    borderWidth: 1,
    borderColor: "#0F50A7",
    alignSelf: "center",
    textAlignVertical: "top",
    borderRadius: 12,
    padding: 12,
  },
  feeText: {
    fontSize: 11,
    textAlign: "center",
    paddingHorizontal: "10%",
    marginTop: 8,
    color: "#322843",
  },
  OptionContainer: {
    justifyContent: "space-between",
    height: heigth * 0.65,
    width: width * 0.94,
    alignSelf: "center",
    paddingTop: heigth * 0.04,
  },

  CheckOut: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    zIndex: 9,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 160,
    width: width,

    justifyContent: "space-between",
    padding: 10,
  },
  Row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.02,
    alignItems: "center",
  },
  PrecioSubTitle: {
    color: "#7A7C85",
    fontSize: 16,
  },
  PrecioTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0F50A7",
  },
  FormaPago: {
    textAlign: "right",
    color: "#0F50A7",
  },
  boton: {
    width: width * 0.94,
    height: 48,
    backgroundColor: "#56CCF2",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: heigth * 0.01,
  },
  botonText: {
    fontSize: 14,
    color: "#322843",
    marginLeft: 10,
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
});
