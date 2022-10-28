import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import link from "../../Adress";

function DetailsForDoctor({ route, navigation }) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [patient, setPatient] = useState({});
  const [Patientlatitude, setPatientLatitude] = useState(Number(route.params.latitude));
  const [Patientlongitude, setPatientLongitude] = useState(Number(route.params.longitude));

  // const Locationget = () => {
  //     return {
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //     }
  // }

  const acceptDoctorCall = () => {
    let request = {
      id: route.params.requestId,
      doctorId: route.params.doctorId,
    };
    axios
      .put(`${link}/request/putDoctorId`, request)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      console.log(Patientlatitude,Patientlongitude);
      // setLocation({
      //     latitude: location.coords.latitude,
      //     longitude: location.coords.longitude,
      // });
    })();
  }, [Patientlatitude]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>
          {patient.firstName} {patient.lastName}
        </Text>

        <View style={styles.mapcontainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: Patientlatitude,
              longitude: Patientlongitude,
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
                latitude:Patientlatitude,
                longitude: Patientlongitude,
              }}
            ></Marker>
          </MapView>
        </View>
        <View style={styles.BoxForText}>
          <Text style={styles.text}>Diseases : {patient.chronicDiseases}</Text>
          <Text style={styles.text}>Phone Number: {patient.phoneNumber}</Text>
          <Text style={styles.text}>Gender : {patient.gender}</Text>
          <Text style={styles.text}>Age :{patient.age}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            acceptDoctorCall();
            navigation.navigate("AcceptedreaDetail", { id: route.params.id });
          }}
        >
          <Text style={styles.textinButton}>Take in charge</Text>
        </TouchableOpacity>
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
    borderRadius: 20,
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
    color: "#046B82",
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
  BoxForText: {},
});
export default DetailsForDoctor;
