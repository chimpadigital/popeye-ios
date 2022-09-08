import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DividirPagoComponent from "../../Components/Carrito/DividirPago";
import { useDispatch } from "react-redux";
import { delPaymentMethod, paymentMethod } from "../../Redux/actions";
import { useNavigation } from "@react-navigation/native";
const DividirPago = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [method1, setMethod1] = useState(null);
  const [method2, setMethod2] = useState(null);
  const [page, setPage] = useState(1);
  const onSubmit1 = () => {
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
