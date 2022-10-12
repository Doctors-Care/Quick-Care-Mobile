import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';




function LoadingScreenEmergency({ navigation, route }) {

  const requestAccepted = () => {
    const ActifRequest = { id: route.params.requestid };
    console.log(route.params)
    axios.post("http://192.168.101.3:3000/request/checkRequest", ActifRequest).then((result) => {
      console.log(result);
      if (result.data === 'waiting') { requestAccepted(),console.log('--*-------------------------------->',"waiting") }
      else navigation.navigate("EmergencyAccepted", { Hce: result.data }).catch((err) =>
        console.log(err))
        throw error;
    })
  }
  return (
    <View style={styles.container}>
      {requestAccepted()}
      <Text>Loading</Text>
      <LottieView
        style={styles.lottie}
        source={require("../../../assets/4096-heal.json")}
        autoPlay
      />
      <Text>Your emergency will be treated as soon as possible</Text>
      <TouchableOpacity
        onPress={() => requestAccepted()}
      ><Text>kbngf</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 400,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#ffffff"
  }

});
export default LoadingScreenEmergency