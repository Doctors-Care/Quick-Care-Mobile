import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from "react";
import axios from 'axios';
import LottieView from 'lottie-react-native';
import link from '../../../Adress';


function RegistrationForUser({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [adress, setAdress] = useState("");
    

    const adduser = () => {
        const NewUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            adress: adress,
        }
        axios.post(`${link}/user/signup`, NewUser, { withCredentials: true }).then((ok) => { console.log(ok); return "valid" }).catch((err) => console.log(err))
    }

    return (
        <ScrollView style={styles.containerScroll}>

            <LottieView
                style={styles.logo}
                source={require("../../../assets/64216-super-nurse-animation.json")}
                autoPlay />
            <View style={styles.container}>
                <View style={styles.NameStyle} >
                    <View
                        style={styles.viewforInputName}
                    >
                        <TextInput
                            styles={styles.TextInput}
                            placeholder="First Name"
                            placeholderTextColor="black"
                            onChangeText={(name) => setFirstName(name)}
                        ></TextInput>
                    </View>
                    <View
                        style={styles.viewforInputName}
                    >
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
                        dataDetectorTypes='address'
                        placeholderTextColor="black"
                        keyboardType='email-address'
                        onChangeText={(email) => setEmail(email)}
                    ></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        styles={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        onChangeText={(password) => { setPassword(password); console.log(password) }}
                    ></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        styles={styles.TextInput}
                        placeholder="PhoneNumber"
                        dataDetectorTypes="phoneNumber"
                        placeholderTextColor="black"
                        keyboardType='numeric'
                        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                    ></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        styles={styles.TextInput}
                        placeholder="Adress"
                        placeholderTextColor="black"
                        onChangeText={(adress) => { setAdress(adress) }}
                    ></TextInput>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => { navigation.navigate("Registration") }}>
                    <Text style={styles.loginText}>Register</Text>
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
        marginTop: 30,
    },
    inputView: {
        backgroundColor: "#F6F6F6",
        borderRadius: 30,
        width: "90%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderColor: "#077871",
        borderWidth: 2

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
        backgroundColor: "#077871",
        marginTop: 10,
    },
    logo: {
        width: 150,
        height: 200,
        top: 10,
        borderRadius: 0,
        left: 40
    },
    loginText: {
        color: "#ffffff"
    },
    containerScroll:{
        flex:1,
        backgroundColor:"#ffffff"
      },
      NameStyle:{
        display:'flex',
        flexDirection:'row',
      },
      viewforInputName:{
        backgroundColor: "#F6F6F6",
        borderRadius: 30,
        width: 150,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderColor: "#077871",
        borderWidth: 2,
        marginHorizontal:10
        
        
      }
});

export default RegistrationForUser;