import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
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
import { Icon } from "react-native-elements/dist/icons/Icon.js";
import { Card } from "react-native-elements/dist/card/Card.js";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const CatalogoComponent = () => {
  const pedidos = [faber, maped, paper, faber, maped, paper];
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderTitle}>Catálogo</Text>
      </View>
      <SearchBar
        platform="android"
        inputStyle={styles.searchText}
        placeholder="Buscá tus productos de interés"
        inputContainerStyle={styles.SearchBar}
        containerStyle={styles.SearchBarC}
      />
      <View style={styles.CatContainer}>
        <Text style={styles.SubTitle}>Categorías</Text>
        <View style={styles.CatIconosContainer}>
          <View style={styles.CatInd}>
            <View style={styles.CatCirc}>
              <Escr />
            </View>
            <Text style={styles.CatText}>Escritura</Text>
          </View>
          <View style={styles.CatInd}>
            <View style={styles.CatCirc}>
              <Esc />
            </View>
            <Text style={styles.CatText}>Escolar</Text>
          </View>
          <View style={styles.CatInd}>
            <View style={styles.CatCirc}>
              <Cuad />
            </View>
            <Text style={styles.CatText}>Cuadernos y repuestos</Text>
          </View>
          <View style={styles.CatInd}>
            <View style={styles.CatCirc}>
              <Com />
            </View>
            <Text style={styles.CatText}>Comercial</Text>
          </View>
          <View style={styles.CatInd}>
            <View style={styles.CatCirc}>
              <Pap />
            </View>
            <Text style={styles.CatText}>Papeles, PVC y goma eva</Text>
          </View>
          <View style={styles.CatInd}>
            <View style={styles.CatCirc}>
              <Art />
            </View>
            <Text style={styles.CatText}>Artística y regalería</Text>
          </View>
        </View>
        <View style={styles.MarcaContainer}>
          <View style={styles.recomendadosCont}>
            <Text style={styles.SubTitle}>Marcas Populares</Text>
            <View style={styles.recomendadosTextCont}>
              <Text style={styles.VerMas}>Ver más</Text>
              <Icon
                name="navigate-next"
                type="material"
                color="#7A8D9C"
                size={22}
              />
            </View>
          </View>
          <FlatList
            keyExtractor={(item) => pedidos.indexOf(item)}
            numColumns={1}
            data={pedidos}
            horizontal
            style={styles.FlatList}
            renderItem={({ item }) => {
              return (
                <Card containerStyle={styles.MarcaCard}>
                  <Image source={item} />
                </Card>
              );
            }}
          />

          <Card containerStyle={styles.ofertaCard}>
          <View style={styles.recomendadosCont}>
            <Text style={styles.SubTitle}>Ofertas</Text>
           
              <View style={styles.recomendadosTextCont}>
                <Text style={{fontSize:16}}>Ver</Text>
                <Icon
                  name="navigate-next"
                  type="material"
                  color="#000"
                  size={22}
                />
              </View>
            </View>
          </Card>
        </View>
      </View>
    </View>
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
    marginBottom: "4%",
    height: "11%",
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
    paddingVertical: width * 0.1,
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
    marginBottom: 50,
    borderColor: "white",
    marginRight: -5,
  },
  FlatList: {
    marginTop: 40,
  },
  recomendadosCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  ofertaCard: {
    width: width * 0.92,
    elevation: 4,
    shadowColor: "#000",
    height: width*0.14,
    alignSelf: "center",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    backgroundColor:"#FFF",
    borderWidth:0
  },
});
