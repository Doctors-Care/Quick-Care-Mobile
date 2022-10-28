import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import link from "../../../Adress";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProfilePatient({ navigation, route }) {
  const [Patient, setPatient] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    const res = await axios
      .post(`${link}/user/One`, { id: route.params.id })
      .then((result) => {
        setPatient(result.data);

        console.log(result.data);
      })
      .catch((err) => console.log(err));
    setRefreshing(false);
  }, [refreshing]);
  useEffect(() => {
    const Request = {
      id: route.params.id,
    };

    axios
      .post(`${link}/user/One`, Request)
      .then((result) => {
        setPatient(result.data);

        console.log("data", result.data);
      })
      .catch((err) => console.log(err));
  }, [navigation]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.header}>
  
        </View>
        <Image style={styles.avatar} source={{ uri: Patient.image }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>
              {Patient.firstName} {Patient.lastName}
            </Text>
            <View style={styles.box}>
            <Text style={styles.info}>{Patient.email}</Text>
            <Text style={styles.description}>Phone Number : {Patient.phoneNumber}</Text>
            <Text style={styles.description}>Address : {Patient.adress}</Text>
            <Text style={styles.description}>Age : {Patient.age}</Text>
            <Text style={styles.description}>Gender : {Patient.gender}</Text>
            <Text style={styles.description}>Medical Records : {Patient.chronicDiseases}</Text>
            </View>
          </View>
        </View>
        <View 
        style={styles.buttonContainer}>
          <TouchableOpacity
          style={styles.logout1}
          onPress={() => {
            navigation.navigate("EditProfilePatient", { patient: Patient });
          }}
          >
            <MaterialCommunityIcons
              name="account-edit-outline"
              size={40}
              color={"#000000"}
              />
            <Text style={styles.loginText}> Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logout}
            onPress={() => {
              const res = axios.get(`${link}/user/logout`);
              console.log(res);
              navigation.navigate("LoginForUser");
            }}
          >
            <MaterialCommunityIcons style={styles.logouticon} name="logout" size={40} color={"#000000"} />
            <Text style={styles.loginText}>Log out</Text>
          </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#077871",
    height: 160,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 90,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    borderBottomWidth: 2,
    borderColor: "#077871",
  },
  info: {
    fontSize: 20,
    color: "#077871",
    marginTop: 10,
  },
  description: {
    fontSize: 20,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  
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
  loginBtn1: {
    width: "50%",
    borderRadius: 25,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#077871",
    marginTop: 80,
  },
  loginText: {
    color: "#077871",
  },
  logout: {
left:225
  },
  logout1:{
left:50
  },
  logouticon:{
    left:7
  },
  box:{
    justifyContent:"flex-start",
    borderWidth:2,
    borderColor:"#077871",
    alignItems:"baseline",
    width:330,
    height:350,
    margin:20,
    padding:20,
    borderRadius:20
  }
});

export default ProfilePatient;
