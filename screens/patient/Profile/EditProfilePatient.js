import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, KeyboardAvoidingView,  ScrollView ,} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";



function EditProfilePatient({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("");
    return (
        <ScrollView>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>
                <View style={styles.bodyContent}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}>

                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.info}>UX Designer / Mobile developer</Text>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                            onChangeText={(email) => setEmail(email)}>
                            email</TextInput>
                        <Pressable style={styles.editIcon}>
                            <MaterialCommunityIcons name="book-edit-outline" size={20} />
                        </Pressable>
                    </View>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                            onChangeText={(password) => setPassword(password)}
                        >
                            password</TextInput>
                        <Pressable style={styles.editIcon}>
                            <MaterialCommunityIcons name="book-edit-outline" size={20} />
                        </Pressable>
                    </View>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                            onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
                            keyboardType='numeric'
                        >
                            phone Number</TextInput>
                        <Pressable style={styles.editIcon}>
                            <MaterialCommunityIcons name="book-edit-outline" size={20} />
                        </Pressable>
                    </View>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                        >Age</TextInput>
                        <Pressable style={styles.editIcon}>
                            <MaterialCommunityIcons name="book-edit-outline" size={20} />
                        </Pressable>
                    </View>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}>Chronical Diseases</TextInput>
                        <Pressable style={styles.editIcon}>
                            <MaterialCommunityIcons name="book-edit-outline" size={20} />
                        </Pressable>
                    </View>
                    <Dropdown style={styles.containerForEdit}>
                        <TextInput style={styles.description}>Gender</TextInput>
                        <Pressable style={styles.editIcon}>
                            <MaterialCommunityIcons name="book-edit-outline" size={20} />
                        </Pressable>
                    </Dropdown>

                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#077871",
        height: 150,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 50
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 15,
        color: "#696969",
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        width: 300,

    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
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
    loginText: {
        color: "#ffffff"
    },
    editIcon: {
        position: "absolute",
        left: 300,
        top: "40%"
    }
});

export default EditProfilePatient