import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MetodoEntregaComponent from '../../Components/Carrito/MetodoEntrega'
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { shippingMethod } from '../../Redux/actions';
const MetodoEntrega = () => {
    const navigation = useNavigation();
    const Initial = useSelector(s=>s.Initial)

    const [method, setMethod]= useState(null)
    const dispatch = useDispatch()
    const onSubmit = () => {

        dispatch(shippingMethod(method))
        if(Initial){
          navigation.navigate("Checkout")
        }
      
        
    }
  return (
    <MetodoEntregaComponent navigation={navigation} method={method} onSubmit={onSubmit}
    setMethod={setMethod} />
  )
}

export default MetodoEntrega