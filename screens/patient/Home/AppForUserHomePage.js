import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfilePatient from "../Profile/ProfilePatient";
import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";
import axios from "axios";
import { useState } from "react";

function Emergency({ navigation, route }) {
  const [idrequest, setidrequest] = useState("");
  const createEmergency = () => {
    const Request = {
      email: route.params.email,
      status: "Doctor",
    };
    console.log(Request);
    axios
      .post("http://192.168.1.16:3000/request/addingRequest", Request)
      .then((result) => {
        setidrequest(result.data.id);
        navigation.navigate("LoadingScreen", { requestid: idrequest });
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.Title1}>Emergency</Text>
      <TouchableOpacity
        style={styles.emergencyButton}
        onPress={() => createEmergency()}
      >
        <Image
          style={styles.emergencyButton}
          source={require("../../../assets/urgence.png")}
        />
      </TouchableOpacity>
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

export default function MyTabs({ navigation, route }) {
  return (
    <Tab.Navigator
      style={styles.navigationBar}
      initialRouteName="Emergency"
      activeColor="#ffffff"
      barStyle={{ backgroundColor: "#077871" }}
      labelStyle={{ fontSize: 15 }}
    >
      <Tab.Screen
        name="Emergency"
        component={Emergency}
        initialParams={{ email: route.params.email }}
        options={{
          tabBarLabel: "Emergency",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="alert-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={SecondaryMenu}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="menu" color={"#fff"} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePatient"
        component={ProfilePatient}
        initialParams={{ email: route.params.email }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  emergencyButton: {
    height: 300,
    width: 300,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 300,
    backgroundColor: "red",
  },
  Title1: {
    fontSize: 50,
    padding: "10%",
    color: "#077871",
  },
});
