import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DoctorProfile from "./DoctorProfile";
import { useState } from "react";
import link from "../../Adress";
import axios from "axios";

const GetAllRequests = () => {
  const [data, setData] = useState([]);
  const [patient,setPatient]=useState({})
  useEffect(() => {
    fetch(`${link}/request/getAllRequests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const getOne = async (item) => {
    var PatientId = {
      id: item.PatientId,
    };
    console.log(PatientId)
    await axios
      .post(`${link}/user/One`, PatientId)
      .then((result) => {
        setPatient(result.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>request :{item.id}</Text>

            <Text>{item.description}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                title="Accept"
                onPress={() => Alert.alert("accepted")}
              >
                <Text>accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                title="Reject"
                onPress={() => Alert.alert("reject")}
              >
                <Text>details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();

const DoctorNav = ({ route }) => {
  return (
    <Tab.Navigator
      initialRouteName="GetAllRequests"
      activeColor="#4169E1"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "#44b3cc" }}
      style={{ backgroundColor: "#4169E1" }}
    >
      <Tab.Screen
        name="GetAllRequests"
        component={GetAllRequests}
        options={{
          tabBarLabel: "GetAllRequests",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        initialParams={{ id: route.params.id }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DoctorNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderColor: "#44b3cc",
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
    fontSize: 32,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    padding: 10,
    backgroundColor: "#44b3cc",
    borderRadius: 20,
    width: 120,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: 200,
    height: 100,
  },
});
