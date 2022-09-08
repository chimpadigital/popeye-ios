import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import LoginComponent from "../Components/Login/Login";
import { useDispatch } from "react-redux";
import { SessionHash, user } from "../Redux/actions";

const Login = () => {
  const [form, setForm] = useState({});
  const [Email, setEmail] = useState("caro_locatelli@hotmail.com");
  const [Password, setPassword] = useState("CAROLINA");
  const [error, setError]= useState(false)
  const [Message, setMessage]= useState("")
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = () => {
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
        if (response.status !== 200) {setError(true); setMessage("Credenciales Invalidas");setModalVisible(true)}
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
          });
        }
      } catch {
        (err) => console.log(error);
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
/>;
};

export default Login;
