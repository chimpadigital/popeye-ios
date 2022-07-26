import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Escr from "../Catálogo/assets/escr";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { Icon } from "react-native-elements/dist/icons/Icon";
import HeaderComponent from "../Elementos/Header/Header.jsx";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const CategoriaListaComponent = ({ route, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent navigation={navigation} Titulo="Catálogo" Atras={true} />
      <View style={styles.CategoriaHeader}>
        <TouchableOpacity style={styles.CatCirc}>
          <Escr />
        </TouchableOpacity>
        <Text style={styles.CatTitle}>Escolar</Text>
      </View>
      <View style={styles.SubCatListCont}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Brillantina, lentejuelas, lupas, palitos</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Carpetas escolares y aros de carpeta</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Cartucheras y canoplas</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Cintas adhesivas y portarrollos</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Gomas, correctores y cinta correctora</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Láminas, tab. periódicas y diccionarios</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Mochilas y bolsos</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Pizarras, tableros, tizas y borradores</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Sacapuntas, reglas, compás y set ge...</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Separadores, etiquetas, ojalillos, asig...</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Set de jardín y cantimploras</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Témperas, plastlina, pinceles y acuar...</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Tijeras y cutters</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Una subcategoria aqui</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Una subcategoria aqui</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Una subcategoria aqui</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Una subcategoria aqui</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Una subcategoria aqui</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Una subcategoria aqui</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductosListaCategoriaComponent")
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>Una subcategoria aqui</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CategoriaListaComponent;

const styles = StyleSheet.create({
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
  SubCatListCont: {
    paddingHorizontal: width * 0.04,
    height: "90%",
  },
  SubCatCont: {
    display: "flex",
    justifyContent: "space-evenly",
    height: 40,
  },
  SubCatText: {
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
  },
  TextCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
