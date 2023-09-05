import React, { useEffect, useState } from 'react'
import HomeComponent from '../../Components/Home/Home'
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import RecepcionComponent from '../../Components/Recepcion/Recepcion'

export default function Recepcion() {
  const dispatch = useDispatch()
    const navigation = useNavigation();
    const User = useSelector((e) => e.User);

    const [promotions, setPromotions] = useState(null);
    const hash = useSelector((e) => e.SessionHash);

    useEffect(() => {
      fetch(
        `https://api.popeyemayorista.com.ar/backend/public/api/Auth/Promociones`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + hash,
          },
        }
      ).then(async (res) => {
        const jsonRes = await res.json();
        let result = [];
  
        jsonRes.data.map((p, index) => {
          if (result.length < 3 && p.status_id == 1) {
            result.push(p);
          }
        });
  
        setPromotions(result);
      });
    }, [hash]);

  return <RecepcionComponent User={User} navigation={navigation} dispatch={dispatch} promotions={promotions}  />
}