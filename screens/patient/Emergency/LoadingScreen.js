import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import link from '../../../Adress';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";





function LoadingScreenEmergency({ navigation ,route}) {
const [patient,setPatient]=useState({});
useEffect (()=>{
   getData()
   requestAccepted()
},[])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Patient')
      const Patient = JSON.parse(jsonValue)
      console.log('hethi e reponse',jsonValue)
       setPatient(Patient)

    } catch(error) {
      console.log (error)
      return error
    }
  }
  const requestAccepted = () => {

console.log("hetha l mrith ",route);
    const ActifRequest = { id: route.params.id };
    axios.post(`${link}/request/checkRequest`, ActifRequest).then((result) => {
      console.log(result);
      if (result.data === 'waiting') {setTimeout(() => {
        requestAccepted()
      }, 10000) }
      else navigation.navigate("EmergencyAccepted", { Hce: result.data }).catch((err) =>
        console.log(err))
    }).catch((err)=>console.log(err))
  }
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottie}
        source={require("../../../assets/4096-heal.json")}
        autoPlay
      />
      <Text style={styles.Text}>Your emergency </Text>
      <Text style={styles.Text}>will be treated </Text>
      <Text style={styles.Text}>as soon as possible </Text>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 400,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#ffffff"
  },
  Text:{
    fontSize:20,
    justifyContent:"center",
    alignItems:"center"
  }

});
export default LoadingScreenEmergency