import {
  Dimensions,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useState } from "react";
const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const ColorSelectComponent = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(null);
  return (
    <View style={styles.main}>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => {
          setOpen(!open);
        }}
      >
        {!color?
        <>
        <Text style={styles.botonText}>Color</Text>
        <Icon name="navigate-next" type="material" color="#7A8D9C" size={22} /></>
        :
        <>
        <View style={styles.selectedColor}>
        <View style={color.name=="Negro"?styles.cuadrado1:color.name=="Rojo"?styles.cuadrado2:styles.cuadrado3}></View>
        <Text style={styles.botonText}>{color.name}</Text></View>
        <Icon name="navigate-next" type="material" color="#7A8D9C" size={22} /></>
    }
      </TouchableOpacity>
      {open ? (
       <>
          <TouchableOpacity style={styles.color} onPress={()=>{setColor({name:"Negro"}); setOpen(false)}}>
            <View style={styles.cuadrado1}></View>
            <Text style={styles.Text}>Negro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.color} onPress={()=>{setColor({name:"Rojo"}); setOpen(false)}}>
          <View style={styles.cuadrado2}></View>
            <Text style={styles.Text}>Rojo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.color} onPress={()=>{setColor({name:"Azul"}); setOpen(false)}}>
          <View style={styles.cuadrado3}></View>
            <Text style={styles.Text}>Azul</Text>
          </TouchableOpacity>
    </>
      ) : (
        <></>
      )}
    </View></View>
  );
};

export default ColorSelectComponent;

const styles = StyleSheet.create({
  boton: {
    width: width * 0.4,
    height: heigth * 0.05,
    backgroundColor: "#F6F6F7",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  color: {
    width: width * 0.4,
    height: heigth * 0.05,

    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    
  },
  container: {
    width: width * 0.4,
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
    
  
    
  },
  botonText: {
    fontSize: 16,
    fontWeight: "700",
  },
  Text: {
    fontSize: 16,
    fontWeight: "600",
  },
  cuadrado1:{
    width:width*0.04,
    height:width*0.04,
    backgroundColor:"#000",
    marginRight:6,
    borderRadius:3
  },
  cuadrado2:{
    width:width*0.04,
    height:width*0.04,
    backgroundColor:"#B71C46",
    marginRight:6,
    borderRadius:3
  },
  cuadrado3:{
    width:width*0.04,
    height:width*0.04,
    backgroundColor:"#2F80ED",
    marginRight:6,
    borderRadius:3
  },
  selectedColor:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
  
  },
  main:{
    maxHeight: heigth * 0.05,
    zIndex:10,
    backgroundColor:"yellow",
  }
});
