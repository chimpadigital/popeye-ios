import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import LoginComponent from "../Components/Login/Login";
import { useDispatch } from "react-redux";
import { SessionHash, user } from "../Redux/actions";

const Login = () => {
  const [form, setForm] = useState({});
  const [Email, setEmail] = useState("baldo.olga@gmail.com");
  const [Password, setPassword] = useState("BALBO OLGA");
  const [error, setError]= useState(false)
  const [Message, setMessage]= useState("")
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [fetching, setFetching] = useState(false);
  const onSubmit = () => {
    setFetching(true)
  console.log({email:Email, password:Password})
    fetch(`https://devtesting.gq/backend/public/api/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
     
      },
      body: JSON.stringify({email:Email, password:Password}),
    }).then(async (response) => {
     
      try {
        const jsonRes = await response.json();
        if (response.status !== 200) {setFetching(false);setError(true); setMessage("Credenciales Invalidas");setModalVisible(true);}
        else {
         
          dispatch(SessionHash(jsonRes.data));
          fetch(`https://devtesting.gq/backend/public/api/Auth/Me`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jsonRes.data,
            },
          }).then(async (res) => {
            const jsonRes = await res.json();
            
            dispatch(user(jsonRes.data));
            setFetching(false)
          });
        }
      } catch {
        (err) => {console.log(error);    setFetching(false)}
      }
    });
  };

  return <LoginComponent form={form} setForm={setForm} onSubmit={onSubmit} 
  Email={Email}
setEmail={setEmail}
Password={Password}
setPassword={setPassword}
error={error}
modalVisible={modalVisible}
setModalVisible={setModalVisible}
Message={Message}
fetching={fetching}
/>;
};

export default Login;
