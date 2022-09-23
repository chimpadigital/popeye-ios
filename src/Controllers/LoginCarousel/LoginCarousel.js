import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginCarouselComponent from '../../Components/LoginCarousel/LoginCarousel'
import { useNavigation } from "@react-navigation/native";

import {user} from "../../Redux/actions"
import { useDispatch, useSelector } from 'react-redux';
const LoginCarousel = () => {
  const navigation = useNavigation();
  const PaymentMethod = useSelector(state=>state.PaymentMethod)
  const dispatch = useDispatch	()
    const [dots, setDots]= useState(1)
  return (
        <LoginCarouselComponent dispatch={dispatch} dots={dots} setDots={setDots} user={user} PaymentMethod={PaymentMethod} navigation={navigation}/>
  )
}

export default LoginCarousel

const styles = StyleSheet.create({})