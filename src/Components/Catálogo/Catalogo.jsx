import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SearchBar } from "react-native-elements";
import Art from "./assets/art.jsx";
import Escr from "./assets/escr.jsx";
import Esc from "./assets/esc.jsx";
import Com from "./assets/com.jsx";
import Pap from "./assets/pap.jsx";
import Cuad from "./assets/cuad.jsx";
import faber from "./assets/faber.png";
import maped from "./assets/maped.png";
import paper from "./assets/paper.png";


import Uno from "./assets/1.jsx";
import Dos from "./assets/2.jsx";
import Tres from "./assets/3.jsx";
import Cuatro from "./assets/4.jsx";
import Cinco from "./assets/5.jsx";
import Seis from "./assets/6.jsx";
import Siete from "./assets/7.jsx";
import Ocho from "./assets/8.jsx";
import Nueve from "./assets/9.jsx";



import { Icon } from "react-native-elements/dist/icons/Icon.js";
import { Card } from "react-native-elements/dist/card/Card.js";
import HeaderComponent from "../Elementos/Header/Header";
import ProductoCardComponent from "../Elementos/ProductoCard/ProductoCard.jsx";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const CatalogoComponent = ({
  route,
  navigation,
  search,
  setSearch,
  products,
  Cat,
}) => {
  const pedidos = [faber, maped, paper, faber, maped, paper];

  return (
    <>
      <HeaderComponent
        navigation={navigation}
        Titulo="Catálogo"
        Atras={false}
        Carrito={true}
      />
      <ScrollView style={styles.container}>
        <SearchBar
          onChangeText={(e) => setSearch(e)}
          
          value={search}
          platform="android"
          inputStyle={styles.searchText}
          placeholder="Buscá tus productos de interés"
          inputContainerStyle={styles.SearchBar}
          containerStyle={styles.SearchBarC}
        />
        {search.length > 4 ? (
          <ScrollView style={{ paddingBottom: 100 }}>
            {products?.data?.length ? (
              products?.data?.map((e, index) => {
                return (
                  <ProductoCardComponent
                  Producto={e} navigation={navigation} 
                  />
                );
              })
            ) : (
              <Image
                source={{
                  uri: "https://gifimage.net/wp-content/uploads/2018/04/loading-bar-animated-gif-transparent-background-6.gif",
                }}
                style={{ width: 300, height: 300, alignSelf: "center" }}
              />
            )}
          </ScrollView>
        ) : (
          <>
            <View style={styles.CatContainer}>
              <Text style={styles.SubTitle}>Categorías</Text>
              <View style={styles.CatIconosContainer}>
                {Cat ? (
                  Cat.data?.map((e,i) => {
             
                    console.log(i, "aaa");
                    if (e.name !== "PARA DESCARTAR")
                      return (
                        <View style={styles.CatInd}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate("CategoriaLista", { cat: e })
                            }
                            style={styles.CatCirc}
                          >
                            {
                           
                              i==0?<Dos/>:
                              i==1?<Siete/>:
                              i==2?<Cinco/>:
                              i==3?<Seis/>:
                              i==4?<Ocho/>:
                              i==5?<Cuatro/>:
                              i==8?<Uno/>:
                              i==7?<Dos/>:
                              i==9?<Nueve/>:
                              <Siete/>
                            }
                          </TouchableOpacity>
                          <Text numberOfLines={2} style={styles.CatText}>
                            {e.name}
                          </Text>
                        </View>
                      );
                  })
                ) : (
                  <Image
                    source={{
                      uri: "https://gifimage.net/wp-content/uploads/2018/04/loading-bar-animated-gif-transparent-background-6.gif",
                    }}
                    style={{ width: 300, height: 300, alignSelf: "center" }}
                  />
                )}
              </View>
            </View>
            <TouchableOpacity  style={styles.loginButton} ><Text style={styles.loginButtonText}>DESCARGAR CATÁLOGO (.csv)</Text></TouchableOpacity >
          </>
        )}
      </ScrollView>
    </>
  );
};

export default CatalogoComponent;

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    paddingBottom: 100,
    minHeight: "90%",
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
    marginBottom: 8,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
    paddingBottom: 100,
    flex: 1,
  },
  container1: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
    justifyContent: "flex-start",
    maxHeight: heigth * 0.3,
  },
  loginButton: {
    marginVertical:30,
    width:width*0.94,
    height:56,
    paddingBottom:3, 
    justifyContent:"center",
    backgroundColor:"#0F50A7",
    alignSelf:"center",
    borderRadius:10,
    display:"flex",
    alignItems:"center"
   
  },
  loginButtonText:{
    fontSize:12,
    lineHeight:25,
    color:"#FFF"
  },
  SearchBar: {
    backgroundColor: "#F0F0F0",
    borderWidth: 0,
    borderColor: "#fff",
    borderRadius: 20,
    height: 56,
    borderRadius: 8,
  },
  SearchBarC: {
    backgroundColor: "white",
    fontSize: 8,
    paddingHorizontal: width * 0.04,
    width: "100%",
  },
  searchText: {
    fontSize: 15,
  },
  SubTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333542",
  },
  CatContainer: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
  },
  CatIconosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: width * 0.05,
  },
  CatCirc: {
    width: 56,
    height: 56,
    backgroundColor: "#0F50A7",
    borderRadius: 80,
    marginHorizontal: 20,
    marginVertical: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  CatText: {
    maxWidth: 95,
    textAlign: "center",
    textTransform: "capitalize",
    overflow: "hidden",
  },
  recomendadosTextCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  VerMas: {
    color: "#7A8D9C",
    alignItems: "center",
    fontSize: 16,

    fontWeight: "400",
  },
  MarcaContainer: {
    paddingVertical: width * 0.021,
    backgroundColor: "#fff",
  },
  MarcaCard: {
    width: width * 0.28,
    elevation: 4,
    shadowColor: "#000",
    height: 64,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 10,
    borderColor: "white",
    marginRight: -5,
  },
  FlatList: {
    marginTop: 8,
  },
  recomendadosCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ofertaCard: {
    width: width * 0.92,
    elevation: 4,
    shadowColor: "#000",
    height: width * 0.14,
    marginBottom: 10,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderWidth: 0,
  },
});
