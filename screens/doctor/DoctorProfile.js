import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  RefreshControl,
} from "react-native";
import axios from "axios";
import link from "../../Adress";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DoctorProfile = ({ navigation, route }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    speciality: "",
    status: "",
    image: "",
  });
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    const res = await axios

      .post(`${link}/doctor/getOne`, { id: route.params.id })
      .then((res) => {
        // console.log(res.data);
        setDoctor(res.data);
      })
      .catch((err) => console.error(err));
    setRefreshing(false);
  }, [refreshing]);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    const res = axios
      .post(`${link}/doctor/getOne`, { id: route.params.id })
      .then((res) => {
        // console.log(res);
        setDoctor({
          id: res.data.id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          adress: res.data.adress,
          speciality: res.data.speciality,
          status: res.data.status,
          image: res.data.image,
        });
      })
      .catch((err) => console.error(err));
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{ uri: doctor.image }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{doctor.firstName}</Text>
            <Text style={styles.name}>{doctor.lastName}</Text>

            <Switch
              trackColor={{ false: "#ffffff", true: "#ffffff" }}
              thumbColor={isEnabled ? "#00BFFF" : "black"}
              ios_backgroundColor="#00BFFF"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.info}> Email : {doctor.email}</Text>
            <Text style={styles.description}>
              Phone Number : {doctor.phoneNumber}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.logout1}
              onPress={() => {
                navigation.navigate("EditPageDoc", {
                  doctor: doctor,
                });
              }}
            >
              <MaterialCommunityIcons
                name="account-edit-outline"
                size={40}
                color={"#046B82"}
              />
              <Text style={styles.loginText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logout}
              onPress={() => {
                const res = axios.get(`${link}/doctor/logout`);
                console.log(res);
                navigation.navigate("LoginFormDoctor");
              }}
            >
              <MaterialCommunityIcons
                name="logout"
                size={40}
                color={"#046B82"}
              />
              <Text style={styles.loginText}>log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#44b3cc",
    height: 200,
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
    marginTop: 130,
  },
  name: {
    fontSize: 300,
    color: "#046B82",
    fontSize: 28,
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#44b3cc",
    marginTop: 30,
  },
  logout: {
    left: 225,
  },
  logout1: {
    left: 50,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  textContainer: {
    margin: 10,
    borderWidth: 2,
    borderColor: "#046B82",
    height: 230,
    borderRadius: 20,
    alignItems: "center",
  },
});
