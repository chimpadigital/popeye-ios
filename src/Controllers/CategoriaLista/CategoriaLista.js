import React, {  useState } from 'react'
import CategoriaListaComponent from '../../Components/CategoriaLista/CategoriaLista'

const CategoriaLista = ({ route, navigation,  }) => {
    const { cat, i } = route.params;
    const [subCat, setSubCat]=useState([])
   
    
  return (
    <CategoriaListaComponent cat={cat} i={i} navigation={navigation}/>
  )
}

export default CategoriaLista

/*
libreria escolar
navidad
peluche
juguetes
playa y agua
juegos de mesa
libreria comercial
art de escritura
bolsas
*/