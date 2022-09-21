import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import HeaderComponent from "../Elementos/Header/Header";
import notfound from "./notfound.png";
import ColorSelectComponent from "../Elementos/ColorSelect/ColorSelect";
import NoPhoto from "../../assets/NoPhoto";
import FULL from "./FULL.png";
import { Icon } from "react-native-elements";
import { TouchableHighlight } from "react-native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

const DetalleProductoComponent = ({
  cantidad,
  setCantidad,
  Added,
  addToCart,
  Producto,
  FS,
  setFS,
  navigation,
}) => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <HeaderComponent
          navigation={navigation}
          Titulo="Producto"
          Atras={true}
        />
        {Producto.image ? (
          <Image
            source={{
              uri: `https://devtesting.gq/assets/image/articles/${Producto.image.substring(
                1,
                Producto.image.length
              )}`,
            }}
            style={styles.image}
          />
        ) : (
          <View
            style={{
              backgroundColor: "#979797",
              width: width,
              height: heigth * 0.25,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NoPhoto />
          </View>
        )}
        <TouchableOpacity
          style={{ position: "absolute", top: heigth * 0.287, right: 10 }}
          onPress={() => setFS(!FS)}
        >
          <Image source={FULL} />
        </TouchableOpacity>

        <View style={styles.textContanier}>
          <Text style={styles.Title}>{Producto.name}</Text>
          <Text style={styles.ID}>ART. {Producto.id}</Text>

          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.Ubi}>
            {Producto.rubros
              ? Producto.rubros[0].name + ">" + Producto?.subrubros[0].name
              : ""}
          </Text>
          <Text style={styles.Price}>
            $
            {Producto.price
              ? parseFloat(Producto.price).toFixed(2) * cantidad
              : Producto.price_unit * cantidad}
          </Text>
        </View>
        {/* <View style={styles.ContainerSelect}>
        <ColorSelectComponent />
        <ColorSelectComponent />
      </View> */}
        {/* <Text style={styles.desc}>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.</Text> */}
        <View style={styles.CantidadContainer}>
          <TouchableOpacity
            style={styles.botonMenos}
            onPress={() => setCantidad(cantidad > 0 ? cantidad - 1 : 0)}
          >
            <Text style={styles.CantidadMenos}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonCantidad}>
            <Text style={styles.Cantidad}>{cantidad}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botonMas}
            onPress={() => setCantidad(cantidad + 1)}
          >
            <Text style={styles.CantidadMas}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={addToCart} style={styles.boton}>
          <Icon
            name="shopping-cart"
            type="material"
            color="#322843"
            size={25}
          />
          <Text style={styles.botonText}>AGREGAR AL PEDIDO</Text>
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
      {FS && (
        <View style={styles.FullContainer}>
          <TouchableHighlight style={styles.close} onPress={() => setFS(!FS)}>
            <Text style={{ color: "#0F50A7", fontWeight: "700", fontSize: 20 }}>
              X
            </Text>
          </TouchableHighlight>
          <Image
            source={{
              uri: `https://devtesting.gq/assets/image/articles/${Producto.image.substring(
                1,
                Producto.image.length
              )}`,
            }}
            style={styles.FullImage}
          />
        </View>
      )}
    </View>
  );
};

export default DetalleProductoComponent;

const styles = StyleSheet.create({
  close: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "white",
    width: 35,
    height: 35,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex:99
  },
  FullImage: {
    width: width,
    height: heigth,

    resizeMode: "contain",
  },
  FullContainer: {
    position: "absolute",
    height: heigth,
    width: width,
    backgroundColor: "rgba(0, 0, 0, 0.274)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
  },
  container: {
    display: "flex",
    flexDirection: "column",

    minHeight: heigth,

    paddingBottom: 100,
  },
  CategoriaHeader: {
    width: "100%",
    height: heigth * 0.1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
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
  CatTitle: {
    fontSize: 16,
    color: "#0F50A7",
    fontWeight: "700",
  },
  Ubi: {
    color: "#2D9CDB",
    fontSize: 16,
    fontWeight: "400",
    textTransform: "capitalize",

    marginTop: 14,
  },
  Title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0F50A7",
    textTransform: "capitalize",
  },
  ID: {
    color: "#0071BC",
    fontSize: 13,
    fontWeight: "300",
  },
  Lote: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 14,
  },
  Price: {
    color: "#2F80ED",
    fontSize: 32,
    fontWeight: "700",
    marginTop: 8,
  },
  textContanier: {
    paddingTop: 20,
    width: "100%",
    paddingHorizontal: width * 0.05,
    alignSelf: "center",
  },
  ContainerSelect: {
    position: "relative",
    paddingTop: 15,
    width: width,
    aignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
    height: heigth * 0.11,
    zIndex: 10,
  },
  desc: {
    fontSize: 16,
    color: "#222831",
    fontWeight: "400",
    alignSelf: "center",
    lineHeight: 24,
    opacity: 0.7,
    zIndex: 1,
  },
  CantidadContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    marginTop: heigth * 0.11,
  },
  botonMenos: {
    backgroundColor: "#E2E3E9",
    width: 32,
    display: "flex",
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
  },
  botonMas: {
    backgroundColor: "#474A5C",
    display: "flex",
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  botonCantidad: {
    backgroundColor: "white",
    display: "flex",
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },

  CantidadMenos: {
    fontSize: 20,
    fontWeight: "400",
  },
  CantidadMas: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  cantidadText: {
    fontSize: 16,
    color: "#222831",
    opacity: 0.7,
    marginRight: 10,
  },
  boton: {
    width: width * 0.94,
    height: 56,
    backgroundColor: "#56CCF2",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: heigth * 0.095,
  },
  botonText: {
    fontSize: 14,
    color: "#322843",
    marginLeft: 10,
  },
  image: {
    minWidth: width,
    minHeight: heigth * 0.25,
    maxHeight: heigth * 0.25,
  },
  full: {
    position: "absolute",
    top: heigth * 0.287,
    right: 10,
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
