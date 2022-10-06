import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeComponent from '../../Components/Home/Home'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
const Home = () => {
    const navigation = useNavigation();
    const User = useSelector((e) => e.User);
    const hash = useSelector((e) => e.SessionHash);
    const [pedidos, setPedidos]= useState([])
    const [products, setProducts] = useState([])
    useEffect(()=>{
     
        fetch(`https://devtesting.gq/backend/public/api/Auth/Productos?pagination=2`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + hash,
              },
            }).then(async (res) => {
               const jsonRes = await res.json();
               setProducts(jsonRes.data);
            })
      },[hash])
    useEffect(() => {
        fetch(`https://devtesting.gq/backend/public/api/Pedidos?pagination=10`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + hash,
            },
          }).then(async (res) => {
             const jsonRes = await res.json();
             setPedidos(jsonRes.data.reverse());
            
          })
       
    }, [hash])


  return (
   <HomeComponent
   User={User}
hash={hash}
pedidos={pedidos}
products={products}
   setPedidos={setPedidos}
   setProducts={setProducts}
   navigation={navigation}
   />
  )
}

export default Home