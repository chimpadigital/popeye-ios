import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import LoginNavigator from "./src/Navigation/LoginNavigator";
import TabNavigator from "./src/Navigation/TabNavigator";
import { NavigationContainer } from '@react-navigation/native';

const Root = () => {
  const User = useSelector((state) => state.User);
  
  
  
  if (User==null) {
    return (    <LoginNavigator />);
  } else 
  return (     <TabNavigator/>);
};

export default Root;

const styles = StyleSheet.create({});
