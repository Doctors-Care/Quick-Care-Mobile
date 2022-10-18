import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";

function Welcome({ navigation }) {
  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <LottieView
          style={styles.logo}
          source={require("../assets/64216-super-nurse-animation.json")}
          autoPlay
        />
              <Text style={styles.TextTuto}>
                Make emergency call with one click
              </Text>
        <ScrollView style={styles.tutoScroll} horizontal={true}>
            <View>
              <Image
                style={styles.tuto}
                source={require("../assets/Screenshot_20221016-193158.png")}
              />
          </View>
          <Image
            style={styles.tuto}
            source={require("../assets/Screenshot_20221016-193218.png")}
          />
          <Image
            style={styles.tuto}
            source={require("../assets/Screenshot_20221016-193321.png")}
          />
          <Image
            style={styles.tuto}
            source={require("../assets/Screenshot_20221016-193335.png")}
          />
        </ScrollView>
        <StatusBar style="auto" />
        <View style={styles.viewforbutton}>
          <Pressable
            style={styles.buttonBottom}
            title="Log In"
            color="#077871"
            onPress={() => navigation.navigate("LoginForUser")}
          >
            <Text style={styles.ButtonText}>Patient</Text>
          </Pressable>
          <Pressable
            style={styles.buttonBottomDoctor}
            title="Register"
            onPress={() => navigation.navigate("LoginFormDoctor")}
          >
            <Text style={styles.ButtonText}>Doctor</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

//style for welcome page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 200,
    top: 10,
    borderRadius: 0,
  },
  buttonBottom: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 70,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 40,
    elevation: 3,
    color: "#077871",
    borderColor: "#077871",
    backgroundColor: "#077871",
    margin: 10,
  },
  ButtonText: {
    color: "white",
  },
  viewforbutton: {
    display: "flex",
    flexDirection: "row",
  },
  containerScroll: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  buttonBottomDoctor: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 70,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 40,
    elevation: 3,
    color: "#077871",
    borderColor: "#077871",
    backgroundColor: "#44b3cc",
    margin: 10,
  },
  tutoScroll: {
    horizontal: true,
    top: 10,
    marginBottom: 50,
    paddingLeft: 50,
  },
  tuto: {
    width: 162
    
    ,
    height: 360,
    top: 10,
    Button: 300,
    marginRight: 50,
  },
  TextTuto: {
    fontSize: 20,
    color:"#077871",
  },
});

export default Welcome;
