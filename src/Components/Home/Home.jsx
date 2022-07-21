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
import avatar from "../../assets/Temporal/avatar.png";
import { Card } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Divider } from "react-native-elements/dist/divider/Divider";
import HeaderComponent from"../Elementos/Header/Header.jsx"

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

const HomeComponent = ({navigation}) => {
  const recomendados = [
    {
      name: "Caja de lápices Faber Castell",
      amount: "24 unidades",
      price: 2825,
    },
    {
      name: "Tijeras Mapped antideslizan...",
      amount: "60 unidades",
      price: 1995,
    },
    {
      name: "Fibrón Trabi multitrazo negr...",
      amount: "12 unidades",
      price: 805,
    },
  ];
  const pedidos = [
    {
      nro: "12123",
      details: "24 unidades",
      date: "14/05/2021",
    },
    {
      nro: "128923",
      details: "15 unidades",
      date: "19/05/2021",
    },
    {
      nro: "188923",
      details: "4 unidades",
      date: "02/06/2021",
    },
  ];

  return (
    
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} Titulo="Popeye App" />

      <View style={styles.Perfil}>
        <Image source={avatar} style={styles.avatar} />
        <View>
          <Text style={styles.Hola}>¡Hola, Ricardo!</Text>
          <Text style={styles.Bienvenida}>
            Te damos la bienvendia de nuevo.
          </Text>
        </View>
      </View>
      <ScrollView style={styles.ScrollView}>
      <View style={styles.PedidosContainer}>
        <Text style={styles.SubTitleP}>Pedidos Actuales</Text>
        
        {pedidos.map((e) => {
          return (
            <View style={styles.pedidosCard}>
              <Text style={styles.PedNum}>Pedido #{e.nro}</Text>
              <Text style={styles.PedT}>{e.details}</Text>
              <Text style={styles.PedT}>${e.date}</Text>
              <Divider />
            </View>
          );
        })}
       
      </View>
      <View style={styles.RecomendadosContainer}>
        <View style={styles.recomendadosTextCont}>
          <Text style={styles.SubTitle}>Recomendados</Text>
          <View style={styles.recomendadosTextCont}>
          <Text style={styles.VerMas}>
            Ver más
            
          </Text>
          <Icon name="navigate-next" type="material" color="#7A8D9C" size={22} /></View>
        </View>
        {recomendados.map((e) => {
          return (
            <Card containerStyle={styles.card}>
              <Text style={styles.RecName}>{e.name}</Text>
              <Text style={styles.RecAmount}>{e.amount}</Text>
              <Text style={styles.RecPrice}>${e.price}</Text>
            </Card>
          );
        })}
      </View></ScrollView>
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  PedidosContainer: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
  },

  RecomendadosContainer: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
    display: "flex",
  },
  ScrollView:{
    flex: 1,
    paddingBottom: 100,
    minHeight:"90%"
  },
  SubTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333542",
    
  },
  SubTitleP: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333542",
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
    paddingBottom:100
  },
  Hola: {
    fontSize: 32,
    fontWeight: "400",
  },
  Bienvenida: {
    lineHeight: 18.75,
    color: "#474A5C",
    fontSize: 16,
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
    width: 56,
    height: 56,
  },
  card: {
    width: width * 0.92,
    elevation: 4,
    shadowColor: "#000",
    height: 96,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
  },
  pedidosCard:{
    maxWidth: width * 0.92,
    width: width * 0.92,
    border:0,
    shadowColor: "#000",
    height: 96,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    marginTop:-15,
    paddingHorizontal: width * 0.02,
    
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
    justifyContent:"space-between"
  },
  VerMas: {
    color: "#7A8D9C",
    alignItems:"center",
    fontSize:16,
    
    fontWeight:"400"
  },
  PedNum:{
    fontSize:14,
    fontWeight:"600"
  },
  PedT:{
    fontSize:14,
    fontWeight:"300",
    fontStyle:"italic",
    marginBottom:4
  }
});
