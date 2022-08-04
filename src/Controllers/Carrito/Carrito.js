import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CarritoComponent from "../../Components/Carrito/Carrito";
import HeaderComponent from "../../Components/Elementos/Header/Header";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Carrito = () => {
  const navigation = useNavigation();
  const Pedido = useSelector((state) => state.Pedido);
  const [total, setTotal]= useState()
  useEffect(() => {
    let temp = 0
    Pedido.map(e => {
      temp = temp + (e.Precio*e.Cantidad)
    })
    setTotal(temp)
  }, [Pedido])
  
  return (
    <>
      <HeaderComponent Atras Titulo="Pedido"  navigation={navigation}/>
      <CarritoComponent navigation={navigation} Pedido={Pedido} total={total}/>
    </>
  );
};
export default Carrito;

const styles = StyleSheet.create({});
