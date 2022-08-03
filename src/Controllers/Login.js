import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginComponent from '../Components/Login/Login'
import { useDispatch } from 'react-redux'
import { user } from '../Redux/actions'

const Login = () => {
    const dispatch = useDispatch()
    const onSubmit = ()=>{
        dispatch(user({Pes:"seP"}))
    }
  return (
   <LoginComponent onSubmit={onSubmit}/>
  )
}

export default Login

