import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ModificarUserComponent from "../../Components/Perfil/ModificarUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { user } from "../../Redux/actions";
import * as ImagePicker from "expo-image-picker";
import { Constants, DocumentPicker } from "expo";
const ModificarUser = () => {
  const User = useSelector((state) => state.User);
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    name: User.name,
    last_name: User.last_name,
    address: User.address,
    phone: User.phone,
  });
  const hash = useSelector((state) => state.SessionHash);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    // let temp = form.name.split(" ");
    // setForm({ ...form, name: temp[0], last_name: temp[1] });
    try {
      fetch(`https://devtesting.gq/backend/public/api/Auth/Me/Actualizar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + hash,
        },
        body:JSON.stringify(form),
      })
        .then(async (res) => {
          const jsonRes = await res.json();

          // dispatch(user(jsonRes.data));
        })
        .then((res) => {
          navigation.navigate("Perfil");
        });
    } catch {
      (err) => console.log(err);
    }
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        resolve(reader.result);
      };
    });
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      // Convert URI to a Blob via XHTML request, and actually upload it to the network
    
      let blob = await fetch(result.uri).then(r => r.blob())
      .then(r=>{
        let formData = new FormData();
          formData.append("name", `${Math.random()*51515151}`);
         formData.append("image", r);
        setForm({...form, ["image"]:formData}); 
      })
         
    
    }
    console.log(form.image)
  };

  return (
    <ModificarUserComponent
      pickImage={pickImage}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      navigation={navigation}
      User={User}
      image={image}
    />
  );
};

export default ModificarUser;

const styles = StyleSheet.create({});
