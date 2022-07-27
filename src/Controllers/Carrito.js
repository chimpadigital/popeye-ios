import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarritoComponent from '../Components/Carrito/Carrito'
import HeaderComponent from '../Components/Elementos/Header/Header'

const Carrito = () => {
  return (
    <>
    <HeaderComponent Atras Titulo="Pedido"/>
<CarritoComponent/></>
)
  }
export default Carrito

const styles = StyleSheet.create({})