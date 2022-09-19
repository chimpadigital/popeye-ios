import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductosCategoriaComponent from '../../Components/ProductosLista/ProductosListaCategoria'

import {  useSelector } from 'react-redux';

const ProductosCategoria = ({navigation, route}) => {
     
    const { subCat, cat } = route.params;
    const [Prod, setProd]=useState([])
    const [Pagination, setPagination]=useState(1)
    const hash = useSelector(state=>state.SessionHash)
  
    const Added = useSelector(state=>state.Added)

    
    useEffect(() => {
      setProd([])
        fetch(`https://devtesting.gq/backend/public/api/Auth/Productos?pagination=10&rubros[0]=${cat.name}&subrubros[0]=${subCat.name}&page=${Pagination}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + hash,
            },
          }).then(async (res) => {
             const jsonRes = await res.json();
             setProd(jsonRes.data);
             console.log(Prod)
          })
       
    }, [hash, subCat, Pagination])

  return (
  
<ProductosCategoriaComponent Prod={Prod} navigation={navigation} route={route}subCat={subCat.name} cat={cat.name}
Pagination={Pagination}
setPagination={setPagination}
Added={Added} />
  )
}

export default ProductosCategoria

