import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DoctorProfile from "./DoctorProfile";
import  { useState } from "react";

const GetAllRequests = () => {
  const [data, setData] = useState([]);
  fetch('http://192.168.11.247:3000/request/getAllRequests',{
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
      setData(data);
  })
  .catch(err => console.error(err));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.status}</Text>
            <TouchableOpacity><Text>Accept</Text></TouchableOpacity>
            <TouchableOpacity><Text>Reject</Text></TouchableOpacity>

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

const DoctorNav = () => {
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

const styles = StyleSheet.create({});
