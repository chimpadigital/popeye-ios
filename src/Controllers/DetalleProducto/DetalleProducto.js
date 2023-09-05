import { View, Text } from 'react-native'
import React from 'react'
import DetalleProductoComponent from '../../Components/DetalleProducto/DetalleProducto'
import { useState } from 'react';
import { Added as ADD, addProducto } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const DetalleProducto = ({ route }) => {
  const COE = useSelector(e => e.Coeficiente)
  const { Producto, navigation } = route.params;
  //console.log("PEDROOOOOOO", Producto)
  const Pedido = useSelector((state) => state.Pedido);
  const [FS, setFS] = useState(false)
  const [cantidad, setCantidad] = useState(1)
  const dispatch = useDispatch()
  const Added = useSelector(state => state.Added)
  const addToCart = () => {
    dispatch(addProducto({
      Producto: Producto,
      Precio: Producto.price,
      Nombre: Producto.name,
      Code: Producto.code,
      Cantidad: cantidad
    }))
    dispatch(ADD(true))
    setTimeout(() => {
      dispatch(ADD(false))
    }, 4000)
  }
  return (
    <DetalleProductoComponent
      cantidad={cantidad}
      setCantidad={setCantidad}
      addToCart={addToCart}
      Producto={Producto}
      navigation={navigation}
      Added={Added}
      FS={FS}
      setFS={setFS}
      COE={COE}
    />
  )
}

export default DetalleProducto