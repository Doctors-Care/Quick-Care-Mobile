import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DoctorProfile from './DoctorProfile';



function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

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
    initialRouteName="Feed"
    activeColor="#4169E1"
    labelStyle={{ fontSize: 12 }}
    barStyle={{ backgroundColor: "#44b3cc" }}
    style={{ backgroundColor: "#4169E1" }}
  >
    <Tab.Screen
      name="Feed"
      component={Feed}
      options={{
        tabBarLabel: "Home",
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
      name="Profile"
      component={DoctorProfile}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default DoctorNav

const styles = StyleSheet.create({})