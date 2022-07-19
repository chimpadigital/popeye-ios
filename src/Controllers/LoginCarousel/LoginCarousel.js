import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginCarouselComponent from '../../Components/LoginCarousel/LoginCarousel'

const LoginCarousel = () => {
    const [dots, setDots]= useState(1)
  return (
        <LoginCarouselComponent dots={dots} setDots={setDots} />
  )
}

export default LoginCarousel

const styles = StyleSheet.create({})