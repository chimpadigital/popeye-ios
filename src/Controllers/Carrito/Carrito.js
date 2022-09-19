import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CarritoComponent from "../../Components/Carrito/Carrito";
import HeaderComponent from "../../Components/Elementos/Header/Header";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Carrito = () => {
  const paymentMethod = useSelector(e=>e.PaymentMethod)
  const shippingMethod = useSelector(e=>e.ShippingMethod)
  const navigation = useNavigation();
  const Pedido = useSelector((state) => state.Pedido);
  const [total, setTotal]= useState()
  const [temp, setTemp]=useState(1)
  useEffect(() => {
    let temp = 0
    Pedido.map(e => {
      temp = temp + (e.Precio*e.Cantidad)
    })
    setTotal(temp)
  }, [Pedido, temp])
  
  const onSubmitCarrito = () =>{
    if(!paymentMethod.length){
      navigation.navigate("MetodosComponent")
    }
    else if (!shippingMethod){
      navigation.navigate("MetodoEntrega")
    }
    else navigation.navigate("Checkout")
  }

  return (
    <>
      <HeaderComponent Atras Titulo="Pedido"  navigation={navigation}/>
      <CarritoComponent navigation={navigation} Pedido={Pedido} total={total} 
      temp={temp}
      setTemp={setTemp}
      onSubmitCarrito={onSubmitCarrito}
      />
    </>
  );
};
export default Carrito;

const styles = StyleSheet.create({});
