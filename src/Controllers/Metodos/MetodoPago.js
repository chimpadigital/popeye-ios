import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MetodoPagoComponent from '../../Components/Carrito/MetodoPago'
import { delPaymentMethod, paymentMethod } from '../../Redux/actions';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
const MetodoPago = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [method1, setMethod1] = useState(null);
  const onSubmit = () => {
    dispatch(delPaymentMethod([]))
    dispatch(paymentMethod(method1));
    navigation.navigate("MetodoEntrega")
  };
  return (
  <MetodoPagoComponent 
  method1={method1}
  setMethod1={setMethod1}
  onSubmit={onSubmit}
  navigation={navigation}
  />
  )
}

export default MetodoPago

