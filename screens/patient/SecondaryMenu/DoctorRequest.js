import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity, ScrollView } from 'react-native';




function DoctorRequest({ navigation, route }) {
    const [idrequest, setidrequest] = useState("");
    const [description ,setDescription] = useState("")
    const createDoctorrequest = () => {
        console.log(route)
        const Request = {
            email: route.params.email,
            status: 'Doctor',
            description :description
        }
        console.log(Request)
        axios.post("http://192.168.101.7:3000/request/addingRequest", Request).then((result) => { setidrequest(result.data.id);navigation.navigate("DoctorLoadingScreen", { requestid: idrequest }) }).catch((error) => console.log(error))
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <View style={styles.container1}>
                        <Text>Symptoms</Text>
                        <View style={styles.inputView}>
                        <TextInput
                            styles={styles.TextInput}
                            placeholder="Write your symptoms here"
                            placeholderTextColor="black"
                            onChangeText={(description) => { setDescription(description)}}
                        ></TextInput>
                    </View>



                        <TouchableOpacity
                            style={styles.loginBtn}
                            onPress={() => createDoctorrequest()}
                        >
                            <Text style={styles.loginText}>confirm</Text>
                        </TouchableOpacity>

                 
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    container1: {
        alignItems: "center",
        justifyContent: "center"
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
    loginText: {
        color: "white"
    },
    inputView: {
        backgroundColor: "#F6F6F6",
        borderRadius: 30,
        width: "90%",
        height: 200,
        marginBottom: 50,
        alignItems: "center",
        borderColor: "#077871",
        borderWidth: 2,
        marginTop:50,
        multiline:true
        

    },

    TextInput: {
        height: 200,
        flex: 1,
        padding: 20,
        marginLeft: 20,
        marginTop: 10,

    },

});
export default DoctorRequest