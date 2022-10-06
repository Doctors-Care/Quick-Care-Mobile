import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity,ScrollView } from 'react-native';
import React, { useState } from "react";

function RegistrationForUser({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <ScrollView style={styles.out}>

            <Image
                style={styles.logo}
                source={{
                    uri: 'https://media.discordapp.net/attachments/1024223915582689342/1026412844360679515/Capture.png',
                }} />
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        styles={styles.TextInput}
                        placeholder="First Name"
                        placeholderTextColor="black"
                        onChangeText={(name) => setName(name)}
                    ></TextInput>
                </View>
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
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        onChangeText={(password) =>{setPassword(password);console.log(password)}}
                    ></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        styles={styles.TextInput}
                        placeholder="PhoneNumber"
                        placeholderTextColor="black"
                        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                    ></TextInput>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                onPress={() => navigation.navigate("LoginForUser")}>
                    <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    out: {
      
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
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
        marginTop: 40,
        backgroundColor: "#077871",
        marginTop: 20,
    },
    logo: {
        width: 130,
        height: 150,
        top: 10,
        borderRadius: 0,
        left: 120
    },
    loginText: {
color:"white"
    }
});

export default RegistrationForUser;