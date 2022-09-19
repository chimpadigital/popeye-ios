import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginNavigator from "./src/Navigation/LoginNavigator";
import TabNavigator from "./src/Navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { resetUser } from "./src/Redux/actions";

const Root = () => {
  const User = useSelector((state) => state.User);
  const Hash = useSelector((state) => state.SessionHash);
  const dispatch = useDispatch();
  useEffect(async () => {
    fetch(`https://devtesting.gq/backend/public/api/Auth/Me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Hash,
      },
    }).then(async (res) => {
           if (res.status !== 200&&res.status !== 204) {
        dispatch(resetUser());
      }
    });
  }, []);

  if (User == null) {
    return <LoginNavigator />;
  } else return <TabNavigator />;
};

export default Root;

const styles = StyleSheet.create({});
