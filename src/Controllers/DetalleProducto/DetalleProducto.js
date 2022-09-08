import { View, Text } from 'react-native'
import React from 'react'
import DetalleProductoComponent from '../../Components/DetalleProducto/DetalleProducto'
import { useState } from 'react';
import { addProducto } from '../../Redux/actions';
import { useDispatch } from 'react-redux';

const DetalleProducto = ({route}) => {
    const { Producto, navigation} = route.params;
      const [cantidad, setCantidad] = useState(1)
      const dispatch = useDispatch()
      const addToCart = ()=>{
          dispatch(addProducto({
            Producto:Producto,
            Precio: Producto.price,
            Nombre: Producto.name,
            Cantidad: cantidad
          }))
      }
  return (
    <DetalleProductoComponent
    cantidad={cantidad}
    setCantidad={setCantidad}
    addToCart={addToCart}
    Producto={Producto}
    navigation={navigation}
    />
  )
}

export default DetalleProducto