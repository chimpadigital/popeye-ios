import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { Divider } from "react-native-elements/dist/divider/Divider";
import { Icon } from "react-native-elements/dist/icons/Icon";
import HeaderComponent from "../Elementos/Header/Header.jsx";
import {Rubros} from "../../../dataTemo"
import Uno from "../Catálogo/assets/1.jsx";
import Dos from "../Catálogo/assets/2.jsx";
import Tres from "../Catálogo/assets/3.jsx";
import Cuatro from "../Catálogo/assets/4.jsx";
import Cinco from "../Catálogo/assets/5.jsx";
import Seis from "../Catálogo/assets/6.jsx";
import Siete from "../Catálogo/assets/7.jsx";
import Ocho from "../Catálogo/assets/8.jsx";
import Nueve from "../Catálogo/assets/9.jsx";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const CategoriaListaComponent = ({ route, navigation,  cat, i}) => {

  

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent navigation={navigation} Titulo="Catálogo" Atras={true} />
      <View style={styles.CategoriaHeader}>
        <TouchableOpacity style={styles.CatCirc}>
        {
                           
                           i==0?<Dos/>:
                           i==1?<Siete/>:
                           i==2?<Cinco/>:
                           i==3?<Seis/>:
                           i==4?<Ocho/>:
                           i==5?<Cuatro/>:
                           i==7?<Uno/>:
                           i==8?<Tres/>:
                           i==9?<Nueve/>:
                           <Siete/>
                         }
        </TouchableOpacity>
        <Text style={styles.CatTitle}>{cat.name}</Text>
      </View>
      <View style={styles.SubCatListCont}>
      
      {
      cat.subrubros.map(e=>{
       
        return(
          <TouchableOpacity
          onPress={() =>{
            navigation.navigate("ProductosCategoria",
            {subCat:e, cat:cat})}
          }
          style={styles.SubCatCont}
        >
          <View style={styles.TextCont}>
            <Text style={styles.SubCatText}>{e.name}</Text>
            <Icon
              name="navigate-next"
              type="material"
              color="#7A8D9C"
              size={22}
            />
          </View>

          <Divider />
        </TouchableOpacity>
        )
      })
      
        }
       
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
    textTransform:"capitalize"
  },
  TextCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
