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
  const [image, setImage] = useState( User.image?User.image:"");
  const [name, setName] = useState(User.name);
  const [last_name, setLast_name] = useState(User.last_name);
  const [address, setAddress] = useState(User.address);
  const [email, setEmail] = useState(User.email);
  const [phone, setPhone] = useState(User.phone);
  const [Uri, setUri] = useState("");
  const [type_image, setType_image] = useState(null);
  const hash = useSelector((state) => state.SessionHash);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    // let temp = form.name.split(" ");
    // setForm({ ...form, name: temp[0], last_name: temp[1] });
  console.log({ phone:phone, address:address, image_64:image, type_image:type_image})
    try {
      fetch(`https://api.popeyemayorista.com.ar/backend/public/api/Auth/Me/Actualizar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + hash,
        },
        body:JSON.stringify({ phone:phone, address:address, image_64:image, type_image:type_image}),
      })
        .then(async (res) => {
          const jsonRes = await res.json();
          res.status==200?
          

           dispatch(user(jsonRes.data)):
           navigation.navigate("Perfil");
        })
        
        
 
        
        
        
        .then((res) => {
          navigation.navigate("Perfil");
        });
    } catch {
      (err) => console.log(err);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64:true
    });

    console.log(result);

    if (!result.cancelled) {
      // Convert URI to a Blob via XHTML request, and actually upload it to the network
    
        let type 
        result.uri.substring(result.uri.length-3,result.uri.length)=="jpe"?
        type = "jpeg":
        type =  result.uri.substring(result.uri.length-3,result.uri.length)
        setUri(result.uri)
        setImage(result.base64)
        setType_image(type)
    
    }

  };

  return (
    <ModificarUserComponent
      pickImage={pickImage}
      email={email}
      setEmail={setEmail}
    
      onSubmit={onSubmit}
      navigation={navigation}
      User={User}
      image={image}

      name={name}
      setName={setName}
      last_name={last_name}
      setLast_name={setLast_name}
      address={address}
      setAddress={setAddress}
      phone={phone}
      setPhone={setPhone}
      
uri={Uri}
      

      

      
      
      
    />
  );
};

export default ModificarUser;

const styles = StyleSheet.create({});
