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
        if (result.data === "waiting") {setTimeout(() => {
          requestAccepted()
        }, 10000) } else navigation.navigate("AcceptedDoctor", { Doctor: result.data });
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
      <Text style={styles.Text}>Your Doctor Call will be treated </Text>
      <Text style={styles.Text}>as soon as possible</Text>
      <Text style={styles.Text}>you will receive a notification</Text>
  
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
    Text:{
    fontSize:20,
    justifyContent:"center",
    alignItems:"center",
    margin:20
  }

});
export default DoctorLoadingScreen;
