import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CarritoComponent from "../../Components/Carrito/Carrito";
import HeaderComponent from "../../Components/Elementos/Header/Header";
import { useSelector } from "react-redux";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";

const Carrito = () => {
  const isFocused = useIsFocused();
  const paymentMethod = useSelector(e=>e.PaymentMethod)
  const shippingMethod = useSelector(e=>e.ShippingMethod)
  const navigation = useNavigation();
  const Added = useSelector(state => state.Added)
  const Pedido = useSelector((state) => state.Pedido);
  const [pedidos, setPedidos] = useState(null)
  const [total, setTotal]= useState()
  const [temp, setTemp]=useState(1)

  useFocusEffect(() => {
    let temp = 0;
    Pedido.map(e => {
      temp = temp + (e.Precio*e.Cantidad)
    })
    setTotal(temp)
    setPedidos(Pedido)
  }, [Pedido, temp, isFocused])
  
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
      {
        pedidos 
        ? 
        <CarritoComponent navigation={navigation} Pedido={pedidos} total={total} 
        temp={temp}
        setTemp={setTemp}
        onSubmitCarrito={onSubmitCarrito}
        />
        : null
      }
    </>
  );
};
export default Carrito;

const styles = StyleSheet.create({});
