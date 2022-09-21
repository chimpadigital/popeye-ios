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
import { Card } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Divider } from "react-native-elements/dist/divider/Divider";
import HeaderComponent from "../Elementos/Header/Header.jsx";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

import spinner from "../../assets/spinner.gif"
const HomeComponent = ({ navigation, User,
  hash,
  pedidos,
  products,
  setPedidos,
  setProducts, }) => {


  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} Titulo="Popeye App" />

      <View style={styles.Perfil}>
        <Image source={User.image?{ uri: `https://devtesting.gq/backend/storage/app/public/usuarios/${User.image.substring(1,User.image.length)}` }:avatar} style={styles.avatar} />
        <View>
          <Text style={styles.Hola}>¡Hola, {User.name}!</Text>
          <Text style={styles.Bienvenida}>
            Te damos la bienvenida de nuevo.
          </Text>
        </View>
      </View>

      <View style={styles.PedidosContainer}>
        <Text style={styles.SubTitleP}>Pedidos Actuales</Text>
        <ScrollView style={styles.ScrollView}>
        {pedidos.filter((e) => e.status.id == 1).length ? (
            pedidos
              .filter((e) => e.status.id == 1)
              .map((e,i) => {
                if(i<2){
                return (
                  <TouchableOpacity style={styles.pedidosCard1}   onPress={() => { navigation.navigate("DetallePedido", { Pedido: e })}}>
                    <Text style={styles.PedNum1}>Pedido #{e.id}</Text>
                    <Text style={styles.PedT1}>
                      {e.reports.length == 1
                        ? "1 unidad"
                        : e.reports.length + " unidades"}
                    </Text>
                    <Text style={styles.PedT1}>
                      {e.status.name}
                    </Text>
                  </TouchableOpacity>
                );}
              })
          ) : (
            <Text style={styles.catch}>No tenés pedidos actuales</Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.PedidosContainer1}>
        <View style={styles.recomendadosTextCont}>
          <Text style={styles.SubTitleP1}>Recomendados</Text>

          {/* <View style={styles.recomendadosTextCont}>
            <Text style={styles.VerMas}>Ver más</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View> */}
        </View>
        <ScrollView style={styles.ScrollView1}>
          <View style={{ paddingBottom:40}}>
          {products.data?
          products.data.map((e) => {
            return (
              <Card containerStyle={styles.card}>
                <Text style={styles.RecName}>{e.name}</Text>
                <Text style={styles.RecAmount}>{e.amount}</Text>
                <Text style={styles.RecPrice}>${e.price}</Text>
              </Card>
            );
          }):(
            <Image
              source={spinner}
              style={{ width: 400, height: 400, alignSelf: "center" }}
            />
          )}</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  PedidosContainer1: {
    paddingHorizontal: width * 0.04,
 
    minHeight: "100%",
    flex:1,
   
  },
  PedidosContainer: {
    paddingHorizontal: width * 0.04,
 
    height: "32%",
  },

  ScrollView: {
    flex: 1,
    display: "flex",
    minHeight: heigth * 0.25,
    
    width: width,
    paddingBottom: 150,
    alignSelf: "center",
  },
  ScrollView1: {
    flex: 1,
    display: "flex",
    minHeight: heigth * 0.35,
    
    width: width,
    paddingBottom: 150,
    alignSelf: "center",
  },
  SubTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333542",
  },
  SubTitleP: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333542",
    paddingVertical: width * 0.04,
  },
  SubTitleP1: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333542",
    marginTop:10,
    paddingVertical: width * 0.04,
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
    paddingBottom: 100,
  },
  Hola: {
    fontSize: 32,
    fontWeight: "400",
    textTransform:"capitalize"
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
  Header: {
    marginBottom: 8,
    height: 90,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "8%",
    paddingHorizontal: width * 0.04,
    alignItems: "flex-start",
    backgroundColor: "#0F50A7",
  },
  HeaderTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    paddingLeft: 35,
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius:100
  },
  card: {
    width: width * 0.91,
    elevation: 4,
    shadowColor: "#000",
    height: 96,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
  },
  pedidosCard: {
    maxWidth: width * 0.92,
    width: width * 0.92,
    border: 0,
    marginVertical:5,
    backgroundColor: "#0f50a7",
    borderRadius: 8,
    shadowColor: "#000",
    height: 84,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
   
    paddingHorizontal: width * 0.04,
  },
  RecName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333542",
  },
  RecAmount: {
    color: "#333542",
    fontSize: 14,
    fontWeight: "400",
  },
  RecPrice: {
    color: "#0f50a7",
    fontSize: 20,
    fontWeight: "600",
  },
  recomendadosTextCont: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
 
    justifyContent: "space-between",
  },
  VerMas: {
    color: "#7A8D9C",
    alignItems: "center",
    fontSize: 16,

    fontWeight: "400",
  },
  PedNum: {
    fontSize: 14,
    fontWeight: "700",
    color:"white"
  },
  PedT: {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "italic",
    
    color:"white"
  },
  pedidosCard1: {
    maxWidth: width * 0.92,
    width: width * 0.92,
    border: 0,
    marginVertical: 5,
    backgroundColor: "#0f50a7",
    borderRadius: 8,
    shadowColor: "#000",
    height: 84,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",

    paddingHorizontal: width * 0.04,
  },
  PedNum1: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
  },
  PedT1: {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "italic",

    color: "white",
  },
  catch: {
    alignSelf: "center",
    fontStyle: "italic",
    marginTop:heigth*0.05
  },
});
