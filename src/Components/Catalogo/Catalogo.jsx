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

import spinner from "../../assets/spinner.gif";

import HeaderComponent from "../Elementos/Header/Header";
import ProductoCardComponent from "../Elementos/ProductoCard/ProductoCard.jsx";
import { SearchBar } from "react-native-elements";

import IconSvg from "react-native-vector-icons/FontAwesome5";
import { Icon } from "react-native-elements/dist/icons/Icon";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

const CatalogoComponent = ({
  route,
  navigation,
  search,
  setSearch,
  Added,
  products,
  Cat,
  file,
  hash,
  setActiveScanned,
  setPage,
  page,
  setProducts,
}) => {
  const pedidos = [faber, maped, paper, faber, maped, paper];

  console.log("RESULTADOOOOOOO " + JSON.stringify(products));
  return (
    <>
      <HeaderComponent
        navigation={navigation}
        Titulo="Catálogo"
        Atras={false}
      />
      <ScrollView style={styles.container}>
        <View style={styles.containerSearch}>
          <SearchBar
            onChangeText={(e) => {
              setSearch(e), setPage(1);
            }}
            value={search}
            platform="android"
            inputStyle={styles.searchText}
            placeholder="Buscá tus productos de interés"
            inputContainerStyle={styles.SearchBar}
            containerStyle={styles.SearchBarC}
          />
        </View>

        {search.length >= 2 ? (
          <ScrollView style={{ paddingBottom: 100 }}>
            {products?.data?.length > 0 ? (
              <>
                {products?.data?.map((e, index) => {
                  return (
                    <>
                      <ProductoCardComponent
                        Producto={e}
                        navigation={navigation}
                      />
                    </>
                  );
                })}

                {products?.data?.length ? (
                  <View style={styles.PaginationBox}>
                    {page > 1 ? (
                      <View style={styles.GoBack}>
                        <Icon
                          onPress={() => {
                            setPage(page - 1), setProducts([]);
                          }}
                          name="arrow-back"
                          type="material"
                          color={page > 1 ? "#0F50A7" : "grey"}
                          size={25}
                        />
                      </View>
                    ) : (
                      <View style={styles.GoBack}></View>
                    )}

                    {products?.last_page != page ? (
                      <View style={styles.GoFo}>
                        <Icon
                          onPress={() => {
                            setPage(page + 1), setProducts([]);
                          }}
                          name="arrow-forward"
                          type="material"
                          color="#0F50A7"
                          size={25}
                        />
                      </View>
                    ) : (
                      <View style={styles.GoFo}></View>
                    )}
                  </View>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <Image
                source={spinner}
                style={{ width: 400, height: 400, alignSelf: "center" }}
              />
            )}
          </ScrollView>
        ) : (
          <>
            <View style={styles.CatContainer}>
              <Text style={styles.SubTitle}>Categorías</Text>
              <View style={styles.CatIconosContainer}>
                {Cat.data ? (
                  Cat.data
                    ?.sort(function (a, b) {
                      if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                    })
                    .map((e, i) => {
                      if (!e.name.includes("PARA DESCARTAR"))
                        return (
                          <View style={styles.CatInd}>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate("CategoriaLista", {
                                  cat: e,
                                  i: i,
                                })
                              }
                              style={styles.CatCirc}
                            >
                              
                              {i == 0 ? (
                                <IconSvg
                                name={"shopping-bag"}
                                size={25}
                                color={"#ffff"}
                                />
                              ) : i == 1 ? (
                                <Cuatro />
                              ) : i == 2 ? (
                                <Seis />
                              ) : i == 3 ? (
                                <Tres />
                              ) : i == 4 ? (
                                <IconSvg
                                name={"book"}
                                size={25}
                                color={"#ffff"}
                                />
                              ) : i == 5 ? (
                                <IconSvg
                                name={"book-open"}
                                size={25}
                                color={"#ffff"}
                                />
                              ) : i == 7 ? (
                                <Cinco />
                              ) : i == 8 ? (
                                <Ocho />
                              ) : i == 9 ? (
                                <IconSvg
                                name={"box-open"}
                                size={25}
                                color={"#ffff"}
                                />
                              ) : (
                                <Siete />
                              )}
                            </TouchableOpacity>
                            <Text numberOfLines={2} style={styles.CatText}>
                              {e.name.trim()}
                            </Text>
                          </View>
                        );
                    })
                ) : (
                  <Image
                    source={spinner}
                    style={{
                      width: width * 0.92,
                      height: 400,
                      marginBottom: -65,
                    }}
                  />
                )}
              </View>
            </View>
          </>
        )}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>DESCARGAR CATÁLOGO (.csv)</Text>
        </TouchableOpacity>
      </ScrollView>
      {Added && (
        <View style={styles.AddedCont}>
          <Text style={styles.AddedContText}>
            ¡El producto ha sido agregado al pedido con éxito!
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Carrito")}>
            <Text style={styles.AddedContBut}>IR AL PEDIDO</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CatalogoComponent;

const styles = StyleSheet.create({
  PaginationBox: {
    width: "100%",
    height: 50,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    marginVertical: 15,
  },
  GoFo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 5,
    display: "flex",
    justifyContent: "center",
  },
  GoBack: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 5,
    display: "flex",
    justifyContent: "center",
  },
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
    minHeight: heigth,
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
    marginTop: "20%",
    width: width * 0.94,
    height: 56,

    justifyContent: "center",
    backgroundColor: "#0F50A7",
    alignSelf: "center",

    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 12,
    lineHeight: 25,
    color: "#FFF",
  },
  containerSearch: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  SearchBar: {
    backgroundColor: "#F0F0F0",
    borderWidth: 0,
    borderColor: "#fff",
    borderRadius: 20,
    width: "100%",
    height: 56,
    borderRadius: 8,
  },
  SearchBarC: {
    backgroundColor: "white",
    fontSize: 8,
    paddingTop: 20,
    paddingHorizontal: width * 0.04,
    width: "100%",
  },
  searchText: {
    fontSize: 15,
  },
  SubTitle: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    fontWeight: "00",
    color: "#333542",
  },
  CatBox: {
    width: "10%",
    height: 56,
    backgroundColor: "#0F50A7",
    borderRadius: 10,
    display: "flex",
    marginTop: 20,
    marginEnd: "1%",
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  CatContainer: {
    paddingHorizontal: width * 0.04,
    //paddingVertical: width * 0.04,
    height: 350,
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
  AddedCont: {
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    width: width,
    height: 74,
    position: "absolute",
    bottom: heigth * 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
    alignItems: "center",
  },
  AddedContText: {
    color: "white",
    maxWidth: "54%",
    LetterSpacing: 0.25,
    lineHeight: 20,
  },
  AddedContBut: {
    color: "#56CCF2",
    fontWeight: "700",
  },
});
