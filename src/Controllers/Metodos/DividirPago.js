import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MetodoPagoComponent from '../../Components/Carrito/MetodoPago'
import { coeficiente, delPaymentMethod, paymentMethod } from '../../Redux/actions';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DividirPagoComponent from "../../Components/Carrito/DividirPago";
const DividirPago = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [method1, setMethod1] = useState(null);
  const [method2, setMethod2] = useState(null);
  const [page, setPage] = useState(1);

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




  const onSubmit1 = () => {
    let temp = Coefi.filter(e=>e.id==method1[0].id)
    dispatch(coeficiente(Number(temp[0].coefficient)/100))
    dispatch(delPaymentMethod([]))
    dispatch(paymentMethod(method1));
    setPage(2);
  };
  const onSubmit2 = () => {
    dispatch(paymentMethod(method2));
    navigation.navigate("MetodoEntrega")
  };

  return (
    <DividirPagoComponent
      method1={method1}
      setMethod1={setMethod1}
      method2={method2}
      setMethod2={setMethod2}
      onSubmit1={onSubmit1}
      onSubmit2={onSubmit2}
      page={page}
      navigation={navigation}
      setPage={setPage}
    />
  );
};

export default DividirPago;

const styles = StyleSheet.create({});
