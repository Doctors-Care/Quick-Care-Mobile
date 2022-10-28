import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import link from "../../Adress";

function Done({ route }) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [patient, setPatient] = useState({});

  // const Locationget = () => {
  //     return {
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //     }
  // }

 

  const getOne = () => {
    var PatientId = {
      id: route.params.id,
    };
    axios
      .post(`${link}/user/One`, PatientId)
      .then((result) => {
        setPatient(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(route);
    (async () => {
      getOne();

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      console.log(location);
      // setLocation({
      //     latitude: location.coords.latitude,
      //     longitude: location.coords.longitude,
      // });
    })();
  }, []);


  const assignDoc = () => {

  }



  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>First name :{patient.firstName}</Text>
      <Text style={styles.text}>Last name :{patient.lastName}</Text>

      <View style={styles.mapcontainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 36.894674,
            longitude: 10.186805,
            latitudeDelta: 0.02,
            longitudeDelta: 0.03,
          }}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            title="i m here"
            description="emergency"
          >
            <Image
              source={require("../../assets/urgence.png")}
              style={{ height: 35, width: 35 }}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: 36.898674,
              longitude: 10.186805,
            }}
          ></Marker>
        </MapView>
      </View>
      <Text style={styles.text}>{patient.email}</Text>
      <Text style={styles.text}>{patient.phoneNumber}</Text>
      <Text style={styles.text}>{patient.age}</Text>
      <Text style={styles.text}>{patient.chronicDiseases}</Text>
      <Text style={styles.text}>{patient.gender}</Text>
      <TouchableOpacity
      onPress={async()=>{
       await  axios
      .put(`${link}/request/markasdone`, {id :route.params.requestId})
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
      alert("request avaible on history tab")
      }}      
      ><Text>Mark as done</Text></TouchableOpacity>
      
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapcontainer: {
    width: 300,
    height: 300,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: "#44b3bb",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#44b3cc",
    fontSize: 20,
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#44b3cc",
    borderRadius: 70,
    width: "90%",
    height: 50,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textinButton: {
    color: "#ffffff",
    fontSize: 20,
  },
});
export default Done;
