import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useTogglePasswordVisibility } from "../../../hooks/TogglePassword";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import LottieView from "lottie-react-native";
import link from "../../../Adress";

//login screen for doctor component
export default function LoginForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [id, setid] = useState("");

  //login function (get doctor by email and check the password)
  const login = async () => {
    try {
      //email and password of the doctor
      const doctor = {
        email: email,
        password: password,
      };
      //axios function to send the email and password of the doctor
      const res = await axios.post(`${link}/doctor/loginDoc`, doctor, {
        withCredentials: true,
      });
      console.log(res);
      //alert the doctor to check his credentials
      if (res.data.message !== "welcome Back") {
        alert("Please check your credentials");
      }
      //accept the emal and password and navigate to doc home screen
      else {
        console.log(res.data);
        alert("welcome back");
        setid(res.data);
        navigation.navigate("DoctorNav", { id: res.data.doctorAuth.id });
      }
    } catch (err) {
      alert(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  //login screen
  return (
    <ScrollView style={styles.container1}>
      <LottieView
        style={styles.logo}
        source={require("../../../assets/lf30_editor_ny61x23y.json")}
        autoPlay
      />
      <View style={styles.container}>
      <Text  style={styles.titleofApp}>Quick Care</Text>
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
            <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#44b3cc"
              />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          //navigate to sign up screen for Doctor
          onPress={() => {
            navigation.navigate("SignUpFormDoctor", { id: id });
          }}
        >
          <Text style={styles.forgot_button}>Signup here</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          //button who activate the login function
          onPress={login}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

//style for the login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  //styling

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
    fontSize: 18,
    color: "#44b3cc",
  },

  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#44b3cc",
    marginTop: 10,
  },
  container1: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 200,
    height: 250,
    top: 10,
    borderRadius: 0,
    left: 28,
  },
  loginText: {
    color: "#ffffff",
  },
  eye: {
    left: 40,
    top: 5,
 
  },
  inputViewPassword: {
    display: "flex",
    flexDirection: "row",
  },
    titleofApp:{
    fontSize:50,
    paddingBottom:20,
    color:"#046B82"
  }
});
