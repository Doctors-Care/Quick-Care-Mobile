import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import LottieView from "lottie-react-native";

export default function LoginForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    try {
      const doctor = {
        email: email,
        password: password,
      };
      const res = await axios.post(
        `http://192.168.11.247:3000/doctor/loginDoc`,
        doctor,
        { withCredentials: true }
      );
      if (res.data.message === "welcome Back") {
        alert(res.data.message);

        navigation.navigate("DoctorNav");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(res.data.message);
      console.log(err);
    }
  };
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container}>
        <LottieView
          style={styles.logo}
          source={require("../../../assets/64216-super-nurse-animation.json")}
          autoPlay
        />
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="black"
            onChangeText={(password) => setPassword(password)}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUpFormDoctor");
          }}
        >
          <Text style={styles.forgot_button}>Signup here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={login}>
          <Text style={styles.loginText}>Login</Text>
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
    marginTop: 150,
  },
  img: {
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "#44b3cc",
    borderWidth: 2,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    marginTop: 100,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#44b3cc",
    marginTop: 80,
  },
  container1: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 200,
    top: 10,
    borderRadius: 0,
  },
});
