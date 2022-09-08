import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MetodoEntregaComponent from '../../Components/Carrito/MetodoEntrega'
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { shippingMethod } from '../../Redux/actions';
const MetodoEntrega = () => {
    const navigation = useNavigation();
    const [method, setMethod]= useState(null)
    const dispatch = useDispatch()
    const onSubmit = () => {
        dispatch(shippingMethod(method))
        navigation.navigate("Checkout")
    }
  return (
    <MetodoEntregaComponent navigation={navigation} method={method} onSubmit={onSubmit}
    setMethod={setMethod} />
  )
}

export default MetodoEntrega