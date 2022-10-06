import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MetodoPagoComponent from '../../Components/Carrito/MetodoPago'
import { coeficiente, delPaymentMethod, paymentMethod } from '../../Redux/actions';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const MetodoPago = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [method1, setMethod1] = useState(null);
  const hash = useSelector((e) => e.SessionHash);
  const [Coefi, setCoefi]= useState(null)
  useEffect(() => {
      fetch(`https://devtesting.gq/backend/public/api/Auth/MetodosDePago`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + hash,
          },
        }).then(async (res) => {
           const jsonRes = await res.json();
           setCoefi(jsonRes);
           
        })
     
  }, [hash])

  const onSubmit = () => {
    let temp = Coefi.filter(e=>e.id==method1[0].id)
    dispatch(coeficiente(Number(temp[0].coefficient)/100))
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

