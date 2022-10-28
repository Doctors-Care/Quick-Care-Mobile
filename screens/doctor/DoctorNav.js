import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import DoctorProfile from "./DoctorProfile";
import { useState } from "react";
import link from "../../Adress";
import DoctorChat from "../patient/SecondaryMenu/doctorChat";
import TreatedReq from "./TreatedReq";
import Done from "./Done";

const GetAllRequests = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(async () =>{
    setRefreshing(true);
fetch(`${link}/request/getAllRequests`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    setData(data);
  })
  .catch((err) => console.error(err));
setRefreshing(false);
}, [refreshing]);

  useEffect(() => {
    console.log(route.params.id);

    fetch(`${link}/request/getAllRequests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item ,index }) => (
          <View style={styles.item}>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.boxText}>request  : {index +1}</Text>
              <Text style={styles.boxText}>{item.description}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  title="Accept"
                  onPress={() =>
                    navigation.navigate("DetailsForDoctor", {
                      id: item.patientId,
                      requestId: item.id,
                      doctorId: route.params.id,
                      longitude:item.longitude,
                      latitude:item.latitude
                    })
                  }
                >
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

function History({ navigation, route }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(async () =>{
    setRefreshing(true);
    fetch(`${link}/request/getAllOKDoneRequests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
    setRefreshing(false);
    }, [refreshing]);

  useEffect(() => {
    console.log(route.params.id);

    fetch(`${link}/request/getAllOKDoneRequests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.data}>Request :{index + 1}</Text>
              <Text style={styles.data}>{item.description}</Text>
              <Text>{item.createdAt}</Text>

              <View style={styles.buttonContainer}></View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}
const Tabt = createMaterialTopTabNavigator();

function Notifications({ route }) {
  return (
    <Tabt.Navigator
      style={styles.topNavBar}>
      <Tabt.Screen
        name="In progress"
        component={TreatedReq}
        initialParams={{ id: route.params.id }}
      />
      <Tabt.Screen
        name="History"
        component={History}
        initialParams={{ id: route.params.id }}
      />
    </Tabt.Navigator>
  );
}
const Tab = createMaterialBottomTabNavigator();

const DoctorNav = ({ route }) => {
  return (
    <Tab.Navigator
      initialRouteName="GetAllRequests"
      activeColor="#4169E1"
      inactiveColor="#AFEEEE"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "#44b3cc" }}
      style={{ backgroundColor: "#ffffff" }}
    >
      <Tab.Screen
        name="GetAllRequests"
        component={GetAllRequests}
        initialParams={{ id: route.params.id }}
        options={{
          tabBarLabel: "Incoming ",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        initialParams={{ id: route.params.id }}
        options={{
          tabBarLabel: "Treated",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="archive-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={DoctorChat}
        initialParams={{ id: route.params.id }}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat-outline" color={color} size={26} />
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
            <MaterialCommunityIcons name="face-man-outline" color={color} size={26} />
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
    marginTop: 50,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 5,
    borderColor: "#44b3cc",
    borderWidth: 1,
    borderRadius: 20,
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
    width: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
  },
  topNavBar:{
    paddingTop:50
  },
  buttonText:{
    color:"#ffffff"
  },
  boxText:{
    padding:4,
    fontSize:20,
    color: "#046B82",
  }
});
