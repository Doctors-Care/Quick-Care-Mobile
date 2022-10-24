import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  Pressable,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../../../hooks/TogglePassword";
import axios from "axios";
import link from "../../../Adress";
import LottieView from "lottie-react-native";

// Sign up for doctor component

export default function SignUpForm({ navigation }) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [LicenseNumber, setLicenseNumber] = useState("");
  const [address, setaddress] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();



  const register = async () => {
    try {
      const NewDoctor = {
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        password: Password,
        phoneNumber: PhoneNumber,
        licenseNumber: LicenseNumber,
        adress: address,
        disponibility:true
      };
      await axios.post(
      `${link}/doctor/addDoctor`,
        NewDoctor,
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      alert("user already exist");
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
         <View style={styles.NameStyle}>
          <View style={styles.viewforInputName}>
            <TextInput
              styles={styles.TextInput}
              placeholder="First Name"
              placeholderTextColor="black"
              onChangeText={(name) => setFirstName(name)}
            ></TextInput>
          </View>
          <View style={styles.viewforInputName}>
            <TextInput
              styles={styles.TextInput}
              placeholder="Last Name"
              placeholderTextColor="black"
              onChangeText={(name) => setLastName(name)}
            ></TextInput>
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(Email) => setEmail(Email)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            autoCapitalize="none"
            enablesReturnKeyAutomatically={true}
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={passwordVisibility}
            placeholderTextColor="black"
            onChangeText={(Password) => setPassword(Password)}
          ></TextInput>
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons
              name={rightIcon}
              size={22}
              color="#232323"
            />
          </Pressable>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Phone Number"
            placeholderTextColor="black"
            onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="License Number"
            placeholderTextColor="black"
            onChangeText={(LicenseNumber) => setLicenseNumber(LicenseNumber)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Address"
            placeholderTextColor="black"
            onChangeText={(address) => setaddress(address)}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={register}
        onPressOut={()=>navigation.navigate('LoginFormDoctor')}>
          <Text style={styles.textButton}>Register</Text>
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
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
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
    marginTop: 10,
    backgroundColor: "#44b3cc",
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 200,
  },
  loginText: {
    color: "#ffffff",
  },
  containerScroll: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  NameStyle: {
    display: "flex",
    flexDirection: "row",
  },
  viewforInputName: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    width: 150,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "#44b3cc",
    borderWidth: 2,
    marginHorizontal: 10,
  },
  textButton:{
color:"#ffffff"
  },
});
