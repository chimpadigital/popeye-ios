import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CatalogoComponent from '../../Components/Catálogo/Catalogo'
import { DataTemp } from '../../../dataTemo'
const Catalogo = ({navigation}) => {
    const [search, setSearch ]= useState("")
    const [filProducts, setFilProducts]= useState([])
    useEffect(() => {
   
     setFilProducts(DataTemp.filter(e=>e.des_art.includes(search.toUpperCase())))
    }, [search])
    
  return (
    <CatalogoComponent search={search}
    navigation={navigation}
    setSearch={setSearch}
    filProducts={filProducts}
    setFilProducts={setFilProducts}/>
  )
}

export default Catalogo