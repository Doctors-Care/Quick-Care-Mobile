import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import link from '../../../Adress';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";





function LoadingScreenEmergency({ navigation }) {
const [patient,setPatient]=useState({});
useEffect (async()=>{
  await getData()
},[])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Patient')
      const Patient = JSON.parse(jsonValue)
      console.log('hethi e reponse',jsonValue)
       setPatient(Patient)
       return patient
      console.log('patient',patient)
    } catch(e) {
      console.log (e)
    }
  }
  const requestAccepted = () => {
   
     var a = patient;
console.log(a);
    const ActifRequest = { id: a.id };
    axios.post(`${link}/request/checkRequest`, ActifRequest).then((result) => {
      console.log(result);
      if (result.data === 'waiting') { requestAccepted(),console.log('--*-------------------------------->',"waiting") }
      else navigation.navigate("EmergencyAccepted", { Hce: result.data }).catch((err) =>
        console.log(err))
        throw error;
    })
  }
  return (
    <View style={styles.container}>
      {requestAccepted()}
      <Text>Loading</Text>
      <LottieView
        style={styles.lottie}
        source={require("../../../assets/4096-heal.json")}
        autoPlay
      />
      <Text>Your emergency will be treated as soon as possible</Text>
      <TouchableOpacity
        onPress={() => requestAccepted()}
      ><Text>kbngf</Text></TouchableOpacity>
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
  }

});
export default LoadingScreenEmergency