import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeComponent from '../../Components/Home/Home'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import RecepcionComponent from '../../Components/Recepcion/Recepcion'

export default function Recepcion() {
    const navigation = useNavigation();
    const User = useSelector((e) => e.User);
  return (
    <RecepcionComponent User={User} navigation={navigation}/>
  )
}