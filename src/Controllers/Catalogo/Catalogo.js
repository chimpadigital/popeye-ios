import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CatalogoComponent from '../../Components/Catálogo/Catalogo'
import { DataTemp } from '../../../dataTemo'
import { useSelector } from 'react-redux'
const Catalogo = ({navigation, route}) => {
    const [search, setSearch ]= useState("")
    const [products, setProducts] = useState([])

    // const { id } = route.params;
    const [Cat, setCat]=useState([])
    const hash = useSelector(state=>state.SessionHash)
    useEffect(() => {
        fetch(`https://devtesting.gq/backend/public/api/Auth/Rubros`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + hash,
            },
          }).then(async (res) => {
             const jsonRes = await res.json();
             setCat(jsonRes);
          })
       
    }, [hash])

    useEffect(()=>{
      search.length>3&&
      fetch(`https://devtesting.gq/backend/public/api/Auth/Productos?pagination=10&search=${search}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + hash,
            },
          }).then(async (res) => {
             const jsonRes = await res.json();
             setProducts(jsonRes.data);
          })
    },[search])
  return (
    <CatalogoComponent search={search}
    navigation={navigation}
    setSearch={setSearch}
    products={products}
    Cat={Cat}
    />
  )
}

export default Catalogo