import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import LogoLogin from "../../assets/LogoLogin";
import Dots1 from "../../assets/Dots1";
import Dots2 from "../../assets/Dots2";
import Dots3 from "../../assets/Dots3";
import Slide from "../../assets/Slide";
import Slide1 from "../../assets/Slide1";
import Slide2 from "../../assets/Slide2";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { FlatList } from "react-native";
import { useCallback } from "react";
import { useState } from "react";
import { onBoard } from "../../Redux/actions";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
const LoginCarouselComponent = ({dispatch, PaymentMethod,navigation }) => {

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatRef = React.useRef(FlatList); 
  
  const nextPress = key => {
   
      flatRef.current.scrollToIndex({
            animated: true,
            index: `${parseFloat(key)}`
        });
  
};

  const data = [
    {
      key: 0,
      title: "REALIZÁ TU PEDIDO",
      description:
        "Hacé tus pedidos, guardá productos, consultá precios y revisá el estado de tus pedidos",
    },
    {
      key: 1,
      title: "COMUNICATE CON TU ASESOR COMERCIAL",
      description:
        "Accedé a los datos de contacto de tu asesor comercial para facilitar tu experiencia de compra",
    },
    {
      key: 2,
      title: "REALIZÁ TU PEDIDO",
      description:
        "Ingresá a la lista personalizada de los precios de todos los productos, revisá precios y disponibilidad.",
    },
  ];

  const Item = ({ key, title, description, item }) => {
 
    return (
      <View style={{ width: width, height: heigth * 0.85 }}>
        <View style={styles.ImageContainer}>
          {item.key == "1" ? (
            <Dots1 />
          ) : item.key == "2" ? (
            <Dots2 />
          ) : (
            <Dots3 />
          )}
        </View>
        <View style={styles.BodyContainer}>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.Text}>{description}</Text>
        
        </View>
        <View style={styles.containerButton}>
          {item.key !== 2 ? (
            <TouchableOpacity style={styles.Button1}>
              <Text style={styles.ButtonText}>OMITIR</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.Button1}></View>
          )}
          {item.key !== 2 ? (
            <TouchableOpacity style={styles.Button2}>
              <Text
                style={styles.ButtonText1}
                onPress={() => nextPress(item.key+1)}
              >
                SIGUIENTE
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.Button2}>
              <Text
                style={styles.ButtonText1}
                onPress={() => {dispatch(onBoard()); navigation.navigate("MetodoPago")}}
              >
                COMENZAR
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => {
  
    return (
      <Item
        key={item.key}
        description={item.description}
        title={item.title}
        item={item}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <LogoLogin />
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        pagingEnabled
        ref={flatRef}
        numColumns={1}
        horizontal
        decelerationRate={"normal"}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
     
      <ExpandingDot
        data={data}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
          width: 8,
          height: 8,
          backgroundColor: "#2D9CDB",
          borderRadius: 5,
          marginHorizontal: 5,
        }}
        containerStyle={{
          bottom: 140,
        }}
      />
      {/* <View style={styles.ImageContainer}>
        {dots == 1 ? <Dots1 /> : dots == 2 ? <Dots2 /> : <Dots3 />}
      </View>
      {dots == 1 ? (
        <View style={styles.BodyContainer}>
          <Text style={styles.Title}>REALIZÁ TU PEDIDO</Text>
          <Text style={styles.Text}>
            Hacé tus pedidos, guardá productos, consultá precios y revisá el
            estado de tus pedidos
          </Text>
          <Slide />
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.Button1}><Text style={styles.ButtonText}>OMITIR</Text></TouchableOpacity>
            <TouchableOpacity style={styles.Button2} onPress={()=>{setDots(2)}}><Text style={styles.ButtonText1}>SIGUIENTE</Text></TouchableOpacity>
          </View>
        </View>
      ) : dots == 2 ? (
        <View style={styles.BodyContainer}>
          <Text style={styles.Title}>COMUNICATE CON TU ASESOR COMERCIAL</Text>
          <Text style={styles.Text}>
            Accedé a los datos de contacto de tu asesor comercial para facilitar
            tu experiencia de compra
          </Text>
          <Slide1 />
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.Button1}><Text style={styles.ButtonText}>OMITIR</Text></TouchableOpacity>
            <TouchableOpacity style={styles.Button2} onPress={()=>setDots(3)}><Text style={styles.ButtonText1}>SIGUIENTE</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.BodyContainer}>
          <Text style={styles.Title}>CONSULTÁ PRECIOS</Text>
          <Text style={styles.Text}>
            Ingresá a la lista personalizada de los precios de todos los
            productos, revisá precios y disponibilidad.
          </Text>
          <Slide2  />
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.Button1}><Text style={styles.ButtonText}></Text></TouchableOpacity>
            <TouchableOpacity style={styles.Button2} ><Text style={styles.ButtonText1}>SIGUIENTE</Text></TouchableOpacity>
          </View>
        </View>
      )} */}
    </View>
  );
};

export default LoginCarouselComponent;

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 120,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  Header: {
    marginBottom: 8,
    height: 90,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "8%",
    paddingHorizontal: width * 0.04,
    alignItems: "flex-end",
  },
  ImageContainer: {
    alignItems: "center",
    height: "35%",
    maxHeight: "35%",
  },
  BodyContainer: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: width * 0.04,
    justifyContent: "space-between",
    height: "40%",
    paddingTop: "15%",
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position:"absolute",
    alignSelf:"center",
    bottom:0,
    paddingHorizontal: width * 0.02,
  },
  Button1: {
    width: width * 0.46,
    height: 56,
    paddingBottom: 3,
    justifyContent: "center",
    
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  Button2: {
    width: width * 0.46,
    height: 56,
    paddingBottom: 3,
    justifyContent: "center",
    backgroundColor: "#0F50A7",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  ButtonText1: {
    fontSize: 12,
    lineHeight: 25,
    color: "#FFF",
  },
  ButtonText: {
    fontSize: 12,
    lineHeight: 25,
    color: "#7A8D9C",
  },
  Title: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    marginTop:30,
    color: "#322843",
  },
  Text: {
    fontSize: 18,
    color: "#7A8D9C",
    textAlign: "center",
    paddingHorizontal: 50,

    height: 90,
  },
});
