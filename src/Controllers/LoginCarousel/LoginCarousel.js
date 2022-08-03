import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginCarouselComponent from '../../Components/LoginCarousel/LoginCarousel'
import { useNavigation } from "@react-navigation/native";

import {user} from "../../Redux/actions"
const LoginCarousel = () => {
  const navigation = useNavigation();
 
    const [dots, setDots]= useState(1)
  return (
        <LoginCarouselComponent dots={dots} setDots={setDots} user={user}/>
  )
}

export default LoginCarousel

const styles = StyleSheet.create({})