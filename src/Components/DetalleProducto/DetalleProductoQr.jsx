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
import NoPhoto from "../../assets/NoPhoto";
import FULL from "./FULL.png";
import { Divider, Icon } from "react-native-elements";
import { TouchableHighlight } from "react-native";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

const DetalleProductoQrComponent = ({ Producto, FS, setFS, navigation }) => {
  //console.log(Producto);

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <HeaderComponent
          navigation={navigation}
          Titulo="Producto"
          Atras={true}
        />
        {Producto.image_web ? (
          <Image
            source={{
              uri: `https://popeyemayorista.com.ar/uploads/products/${Producto?.image_web}`,
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
        {Producto.image_web && (
          <TouchableOpacity
            style={{ position: "absolute", top: heigth * 0.287, right: 10 }}
            onPress={() => setFS(!FS)}
          >
            <Image source={FULL} />
          </TouchableOpacity>
        )}

        <View style={styles.textContanier}>
          <Text style={styles.Title}>{Producto.name}</Text>
          <Text style={styles.ID}>ART. {Producto.code}</Text>
          {Producto.bar_code ? (
            <Text style={styles.ID}>Código {Producto.bar_code}</Text>
          ) : (
            <></>
          )}
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.Ubi}>
            {Producto.rubros
              ? Producto.rubros[0]?.name.trim() +
                " > " +
                Producto?.subrubros[0]?.name.trim()
              : ""}
          </Text>
          <Text style={styles.Price}>
            Precio Contado $
            {Producto.price
              ? parseFloat(Producto.price_contado).toFixed(2)
              : parseFloat(Producto.price_cheque).toFixed(2)}
          </Text>
          <Text style={styles.Price}>
            Precio Cheque $
            {Producto.price
              ? parseFloat(Producto.price_cheque).toFixed(2)
              : parseFloat(Producto.price_cheque).toFixed(2)}
          </Text>
        </View>
        <View style={styles.sizeContainer}>
          <View style={styles.sizeBox}>
            <Text style={styles.sizeTitle}>Ancho</Text>
            <Text style={styles.sizeTitle1}>{Producto.width}</Text>
          </View>
          <Divider orientation="vertical" />
          <View style={styles.sizeBox}>
            <Text style={styles.sizeTitle}>Alto</Text>
            <Text style={styles.sizeTitle1}>{Producto.height}</Text>
          </View>
          <Divider orientation="vertical" />
          <View style={styles.sizeBox}>
            <Text style={styles.sizeTitle}>Largo</Text>
            <Text style={styles.sizeTitle1}>{Producto.length}</Text>
          </View>
        </View>
        {/* <View style={styles.ContainerSelect}>
        <ColorSelectComponent />
        <ColorSelectComponent />
      </View> */}
        {/* <Text style={styles.desc}>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.</Text> */}
      </ScrollView>
      {FS && (
        <View style={styles.FullContainer}>
          <TouchableHighlight style={styles.close} onPress={() => setFS(!FS)}>
            <Text style={{ color: "#0F50A7", fontWeight: "700", fontSize: 20 }}>
              X
            </Text>
          </TouchableHighlight>
          {Producto?.images.length > 0 ? (
              <Image
                source={{
                  uri: `https://popeyemayorista.com.ar/uploads/products/${Producto?.images[currentImage].url}`,
                }}
                style={styles.FullImage}
              />
          ) : (
            <Image
              source={{
                uri: `https://popeyemayorista.com.ar/uploads/products/${Producto?.image_web}`,
              }}
              style={styles.FullImage}
            />
          )}

          {Producto?.images.length > 0 && currentImage != 0 ? (
            <TouchableHighlight style={styles.prevImage} onPress={() => setCurrentImage(currentImage - 1)}>
              <Text
                style={{ color: "#0F50A7", fontWeight: "700", fontSize: 20 }}
              >
              </Text>
            </TouchableHighlight>
          ) : null}

          {Producto?.images.length > 0 && currentImage != Producto?.images.length - 1 ? (
            <TouchableHighlight style={styles.nextImage} onPress={() => setCurrentImage(currentImage + 1)}>
              <Text
                style={{ color: "#0F50A7", fontWeight: "700", fontSize: 20 }}
              >
              </Text>
            </TouchableHighlight>
          ) : null}
        </View>
      )}
    </ScrollView>
  );
};

export default DetalleProductoQrComponent;

const styles = StyleSheet.create({
  prevImage: {
    position: "absolute",
    top: heigth / 2,
    left: 20,
    width: 35,
    height: 35,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  nextImage: {
    position: "absolute",
    top: heigth / 2,
    right: 20,
    width: 35,
    height: 35,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
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
    zIndex: 99,
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
    fontSize: 20,
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
    marginTop: heigth * 0.13,
  },
  botonMenos: {
    backgroundColor: "#E2E3E9",
    width: 32,
    display: "flex",
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
  },
  botonMas: {
    backgroundColor: "#474A5C",
    display: "flex",
    width: 32,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  botonCantidad: {
    backgroundColor: "white",
    display: "flex",
    width: 60,
    height: 50,
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
    marginTop: heigth * 0.035,
    marginBottom: heigth * 0.05,
    //position: "absolute",
    //bottom: 0,
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
  sizeContainer: {
    display: "flex",
    flexDirection: "row",
    width: width,
    paddingHorizontal: width * 0.05,
    justifyContent: "space-evenly",
    marginTop: heigth * 0.05,
  },
  sizeTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#222831",
    textAlign: "center",
  },
  sizeTitle1: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#222831",
    textAlign: "center",
    marginTop: 10,
  },
});
