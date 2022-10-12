import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTogglePasswordVisibility } from "../../../hooks/TogglePassword";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from "axios";
import LottieView from 'lottie-react-native';



export default function LoginPageForUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const [message, setMessage] = useState("");



  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
  }
  const login = () => {
    const user = {
      email: email,
      password: password
    }
    getData();

    axios.post("http://192.168.101.3:3000/user/signin", user).then((ok) => {
      setMessage("Welcome");
      navigation.navigate("EmergencyHome", { email: email })
    }).catch((err) => { console.log(err); setMessage("wrong entries") })
  }

  return (
    <ScrollView style={styles.out}>

      <LottieView
        style={styles.logo}
        source={require("../../../assets/64216-super-nurse-animation.json")}
        autoPlay />
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <View style={styles.inputViewPassword}>
            <TextInput
              styles={styles.TextInput}
              placeholder="Password"
              secureTextEntry={passwordVisibility}
              placeholderTextColor="black"
              onChangeText={(password) => setPassword(password)}
            ></TextInput>
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => login()}
        >
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
  inputView: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "#077871",
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
    backgroundColor: "#077871",
    marginTop: 80,
  },
  logo: {
    width: 150,
    height: 200,
    top: 10,
    borderRadius: 0,
    left: 40
  },
  inputViewPassword: {
    display: 'flex',
    flexDirection: 'row',

  },
  loginText: {
    color: "#ffffff"
  }
});