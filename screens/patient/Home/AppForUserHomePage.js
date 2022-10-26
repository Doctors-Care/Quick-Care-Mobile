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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfilePatient from "../Profile/ProfilePatient";
import SecondaryMenu from "../SecondaryMenu/SecondaryMenu";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import link from "../../../Adress";
import HCERequests from "./HCERequests";
import DocRequests from "./DoctorRequests";
import Permissions from "expo-permissions";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function Emergency({ navigation, route }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [idrequest,setidrequest]=useState("")
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }

    let deviceToken = {
      email: route.params.email,
      NotifToken: token,
    };
    axios
      .put(`${link}/user/addTokenNotif`, deviceToken)
      .then((aa) => console.log(aa.data))
      .catch((err) => console.log(err));
  }

  const createEmergency = async () => {
    var Request = {
      email: route.params.email,
      status: "HCE",
      description: "alert",
    };
    axios
      .post(`${link}/request/addingRequest`, Request)
      .then((result) => {
        setidrequest(result.data.id);
        navigation.navigate("LoadingScreen", { id: result.data.id });
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.Title1}>Quick Care</Text>
      <Text style={styles.Title1}>Emergency</Text>
      <View style={{ flex: 1,justifyContent:"center", alignItems: "center" }}>
      <TouchableOpacity
        style={styles.emergencyButton}
        onPress={() => {
          createEmergency();
        }}
      >
        <Image
          style={styles.emergencyButton}
          source={require("../../../assets/urgence.png")}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();


const Tabt = createMaterialTopTabNavigator();

function Requests({ route }) {
  return (
    <Tabt.Navigator
    style={styles.navigationBar1}>
      <Tabt.Screen
        name="HCE Requests"
        component={HCERequests}
        initialParams={{ id: route.params.id }}
      />
      <Tabt.Screen
        name="Doctor Requests"
        component={DocRequests}
        initialParams={{ id: route.params.id }}
      />
    </Tabt.Navigator>
  );
}

export default function MyTabs({ route }) {
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
        name="History"
        component={Requests}
        initialParams={{ id: route.params.id }}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={SecondaryMenu}
        initialParams={{ email: route.params.email }}
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
    top:50,
    fontSize: 50,
 
    color: "#077871",
  },
  navigationBar1:{
    paddingTop:50
  }
});
