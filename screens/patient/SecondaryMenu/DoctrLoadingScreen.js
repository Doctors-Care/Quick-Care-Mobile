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
} from "react-native";
import LottieView from "lottie-react-native";
import axios from "axios";
import link from "../../../Adress";

function DoctorLoadingScreen({ navigation, route }) {
  const requestAccepted = () => {
    const ActifRequest = { id: route.params.id };
    axios
      .post(`${link}/request/checkDocRequest`, ActifRequest)
      .then((result) => {
        console.log(result);
        if (result.data === "waiting") {
          requestAccepted(),
            console.log("--*-------------------------------->", "waiting");
        } else navigation.navigate("AcceptedDoctor", { Doctor: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Title1}>Loading</Text>
      <LottieView
        style={styles.lottie}
        source={require("../../../assets/47137-doctor-and-health-symbols.json")}
        autoPlay
      />
      <Text>Your Doctor Call will be treated as soon as possible</Text>
      <TouchableOpacity
        style={styles.CancelButton}
        onPress={() => requestAccepted()}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => requestAccepted()}
        style={styles.CancelButton}
      >
        <Text style={styles.buttonText}>Loading end</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  lottie: {
    width: 250,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  Title1: {
    paddingBottom: 100,
    fontSize: 50,
    padding: "10%",
    color: "#077871",
  },
});
export default DoctorLoadingScreen;
