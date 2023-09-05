import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Added as ADD, addProducto } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import DetalleProductoQrComponent from '../../Components/DetalleProducto/DetalleProductoQr';

const DetalleProductoQr = ({ route }) => {
  const { Producto, navigation } = route.params;
  console.log("PEDROOOOOOO", Producto)
  const [FS, setFS] = useState(false)
  const dispatch = useDispatch()
  
  

  console.log(Producto)
  return (
    <DetalleProductoQrComponent
      Producto={Producto}
      navigation={navigation}
      FS={FS}
      setFS={setFS}
    />
  )
}

export default DetalleProductoQr