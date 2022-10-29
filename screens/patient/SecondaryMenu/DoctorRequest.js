import axios from "axios";
import { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import link from "../../../Adress";
import * as Location from "expo-location";

function DoctorRequest({ navigation, route }) {
  const [idrequest, setidrequest] = useState("");
  const [description, setDescription] = useState("");
  const [latitude,setLatitude]=useState(0);
  const [longitude,setLongitude]=useState(0)

  useEffect(() => {
    localisation()
  })
  async function localisation(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
  
    let location = await Location.getCurrentPositionAsync({});
    setLatitude( location.coords.latitude);
    setLongitude( location.coords.longitude);
  }

  const createDoctorrequest = async () => {
    const Request = {
      email: route.params.email,
      status: "Doctor",
      description: description,
      latitude: latitude,
      longitude: longitude,
    };
    axios
      .post(`${link}/request/addingRequest`, Request)
      .then((result) => {
        setidrequest(result.data.id);
        navigation.navigate("DoctorLoadingScreen", { id: result.data.id });
      })
      .catch((error) => console.log(error));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.container1}>
            <Text style={styles.Title1}>Symptoms</Text>
            <View style={styles.inputView}>
              <TextInput
                styles={styles.TextInput}
                placeholder="Write your symptoms here"
                placeholderTextColor="black"
                onChangeText={(a) => {
                  setDescription(a);
                }}
              ></TextInput>
            </View>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={createDoctorrequest}
            >
              <Text style={styles.loginText}>confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#077871",
    marginTop: 20,
  },
  loginText: {
    color: "white",
  },
  inputView: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    width: "90%",
    height: 200,
    marginBottom: 50,
    alignItems: "center",
    borderColor: "#077871",
    borderWidth: 2,
    marginTop: 50,
    multiline: true,
  },

  TextInput: {
    height: 200,
    flex: 1,
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  Title1: {
    fontSize: 50,
    padding: "10%",
    color: "#077871",
  },
});
export default DoctorRequest;
