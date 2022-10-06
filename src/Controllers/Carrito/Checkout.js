import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CheckoutComponent from "../../Components/Carrito/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { clearCarro } from "../../Redux/actions";
const Checkout = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const paymentMethod = useSelector((e) => e.PaymentMethod);
  const shippingMethod = useSelector((e) => e.ShippingMethod);
  const Pedido = useSelector((e) => e.Pedido);
  const [observation, setObservation] = useState("");
  const hash = useSelector((e) => e.SessionHash);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false);
  const [Message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [openTerm, setOpenTerm] = useState(false)
  useEffect(() => {
    let temp = 0;
    Pedido.map((e) => {
      temp = temp + e.Cantidad * parseFloat(e.Precio);
    });
    setTotal(temp);
  }, [Pedido]);

  const onSubmitPedido = () => {
    const body = {
      articles: JSON.stringify(
        Pedido.map((e) => {
          return { id: e.Producto.id, quantity: e.Cantidad };
        })
      ),
      payment_methods: JSON.stringify(paymentMethod),
      shipping_methods_id: shippingMethod,
    };
    observation.length && (body.observation = observation);

    fetch(`https://devtesting.gq/backend/public/api/Auth/Pedidos/Crear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + hash,
      },
      body: JSON.stringify(body),
    }).then(async (response) => {
      try {
        const jsonRes = await response.json();
        if (response.status !== 200) {
          setError(true);
          setMessage(jsonRes?.msg);
          setModalVisible(true);
        } else {
          dispatch(clearCarro())
        navigation.navigate("Finalizado")
        }
      } catch {
        (err) => console.log("error");
      }
    });
  };

  useEffect(() => console.log(observation), [observation]);

  return (
    <CheckoutComponent
      total={total}
      paymentMethod={paymentMethod}
      shippingMethod={shippingMethod}
      Pedido={Pedido}
      observation={observation}
      setObservation={setObservation}
      onSubmitPedido={onSubmitPedido}
      modalVisible={modalVisible}
      error={error}
      Message={Message}
      setModalVisible={setModalVisible}
      setError={setError}
      setMessage={setMessage}
openTerm={openTerm}
      setOpenTerm={setOpenTerm}
    />
  );
};

export default Checkout;
