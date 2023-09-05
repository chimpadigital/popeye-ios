import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginNavigator from "./src/Navigation/LoginNavigator";
import TabNavigator from "./src/Navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { initial, resetAdded, resetUser } from "./src/Redux/actions";
import RecepcionNavigator from "./src/Navigation/RecepcionNavigator";

const Root = () => {
  const User = useSelector((state) => state.User);
  
  const Initial = useSelector((state) => state.Initial);
  const Hash = useSelector((state) => state.SessionHash);
  const OnBoard = useSelector((state) => state.OnBoard);
  const PaymentMethod = useSelector(state=>state.PaymentMethod)
  const ShippingMethod = useSelector(state=>state.ShippingMethod)
  const dispatch = useDispatch();
  useEffect(async () => {
        dispatch(initial(false))
        dispatch(resetUser());
        dispatch(resetAdded())
  }, []);

 
  if (User == null || OnBoard == true || !PaymentMethod.length || !ShippingMethod) {
    return <LoginNavigator />;
  } else{
    if(Initial){
   return <TabNavigator />}
      else return <RecepcionNavigator/>
   ;}
}

export default Root;

const styles = StyleSheet.create({});
