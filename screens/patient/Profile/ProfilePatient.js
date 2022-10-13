import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity, Alert} from 'react-native';
import { useState,useEffect } from "react";
import axios from 'axios';



function ProfilePatient({navigation,route}){
  const [Patient, setPatient] = useState("");
  useEffect(()=>{
    const Request ={
      id:route.params.id
  }
  
    axios.post("http://192.168.101.9:3000/user/One",Request).then((result)=>{setPatient(result.data);
    console.log(result)}
    ).catch((err)=>console.log(err))
   
  },[navigation])
 
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{Patient.firstName}  {Patient.lastName}</Text>
              <Text style={styles.info}>{Patient.email}</Text>
              <Text style={styles.description}>{Patient.phoneNumber}</Text>
              <Text style={styles.description}>{Patient.createdAt}</Text>
              <Text style={styles.description}>{Patient.adress}</Text>
              <Text style={styles.description}>{Patient.age}</Text>
              <Text style={styles.description}>{Patient.gender}</Text>
              <TouchableOpacity
          style={styles.loginBtn}
          onPress={() =>{navigation.navigate("EditProfilePatient",{patient:Patient})}}
        >
          <Text style={styles.loginText}>Edit</Text>
        </TouchableOpacity>
            </View>
        </View>
        
      </View>
    );
  }


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#077871",
    height:120,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:60
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    borderBottomWidth:2,
    borderColor:"#077871"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#077871",
    marginTop: 80,
  },
  loginText:{
    color:"#ffffff"
      }
});

export default ProfilePatient