import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView ,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import axios from 'axios';



function EditProfilePatient({ navigation,route }) {
    const [firstname, setFirstName] = useState(route.params.patient.firstName);
    const [lastName,setLastName]=useState(route.params.patient.lastName);
    const [email, setEmail] = useState(route.params.patient.email);
    const [password, setPassword] = useState(route.params.patient.password);
    const [phoneNumber, setPhoneNumber] = useState(route.params.patient.phoneNumber);
    const [age, setAge] = useState(route.params.patient.age);
    const [gender, setGender] = useState(route.params.patient.gender);
    const [Chronical,setChronical]=useState(route.params.patient.chronicDiseases)
    const data = [
        { label: 'male', value: 'male' },
        { label: 'female', value: 'female' },
        { label: "Other", value: "don't want to tell" },

    ];

const changerFirstName=()=>{
    axios.put()
}


    return (
        <ScrollView>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>
                <View style={styles.bodyContent}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}>

                    <TextInput style={styles.name}>{firstname}</TextInput>
                    <TextInput style={styles.name}>{lastName}</TextInput>
                    <TouchableOpacity style={styles.editbigIcon}>
                            <MaterialCommunityIcons name="check" size={40} color={"#077871"} />
                        </TouchableOpacity>
                    <TextInput style={styles.info}>{email}</TextInput>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                            onChangeText={(email) => setEmail(email)}
                            defaultValue={email}
                            >
                            </TextInput>
                        <TouchableOpacity style={styles.editIcon}>
                            <MaterialCommunityIcons name="check" size={20} color={"#077871"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                            onChangeText={(password) => setPassword(password)}
                            defaultValue={phoneNumber}
                        >
                            </TextInput>
                        <TouchableOpacity style={styles.editIcon}>
                            <MaterialCommunityIcons name="check" size={20} color={"#077871"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                            onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
                            keyboardType='numeric'
                            placeholder={phoneNumber}
                            defaultValue={phoneNumber}
                        >
                           </TextInput>
                        <TouchableOpacity style={styles.editIcon}>
                            <MaterialCommunityIcons name="check" size={20} color={"#077871"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                        onChangeText={(age)=>setAge(age)}
                        defaultValue={age}
                        >a</TextInput>
                        <TouchableOpacity style={styles.editIcon}>
                            <MaterialCommunityIcons name="check" size={20} color={"#077871"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerForEdit}>
                        <TextInput style={styles.description}
                         onChange={(Chronical)=>setChronical(Chronical)}
                         
                         ></TextInput>
                        <TouchableOpacity style={styles.editIcon} onPress={()=>{functiontoConsole()}} >
                            <MaterialCommunityIcons name="check" size={20} color={"#077871"} />
                        </TouchableOpacity>
                    </View>
                    <Dropdown
                        style={styles.dropdown}
                        data={data}
                        labelField="label"
                        placeholder="Gender"
                        value={gender}
                        onChange={item => {
                            setGender(item.value);
                            console.log('selected', item);
                        }}
                    />
                    <TouchableOpacity style={styles.editIcon}>
                    </TouchableOpacity>


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
        height: 120,
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
        marginTop: 30
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
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
        borderRadius:12,
        borderColor:"#077871",
        borderWidth: 2,
        backgroundColor:"#fff",
        height:40

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
    },
    dropdown: {
        backgroundColor: '#fff',
        width: 300,
        shadowColor: '#fff',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        borderRadius:12,
        borderColor:"#077871",
        borderWidth: 2,
        marginTop:20,
        alignContent:"center",
        textAlign:"center"

    },
    editbigIcon:{
        position: "absolute",
        left: 300,
        top: "14%"
    }


});

export default EditProfilePatient