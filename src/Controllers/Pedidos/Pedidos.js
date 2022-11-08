import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import PedidosComponent from '../../Components/Pedidos/Pedidos'
import { useDispatch, useSelector } from 'react-redux';

export default function Pedidos() {
    const [pedidoS, setPedidoS] = useState({})
    const hash = useSelector((e) => e.SessionHash);
    const [pedidos, setPedidos]= useState([])
    useEffect(() => {
        fetch(`https://api.popeyemayorista.com.ar/backend/public/api/Pedidos?pagination=10`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + hash,
            },
          }).then(async (res) => {
             const jsonRes = await res.json();
             setPedidos(jsonRes.data.filter(e=>e.status_id!==6).reverse());
             
          })
       
    }, [hash])

    const dispatch = useDispatch()


  return (
    <PedidosComponent
    pedidos={pedidos}
     setPedidos={setPedidos}
pedidoS={pedidoS}
     setPedidoS={setPedidoS}
     dispatch={dispatch}
    />
  )
}