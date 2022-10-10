import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity, ScrollView } from 'react-native';



function DoctorRequest({navigation,route}) {
    const [idrequest, setidrequest] = useState("");
    const createEmergency = ()=>{
        const Request ={
            email:route.params.email,
            state:'HCE'
        }
        console.log(Request)
          axios.post("http://192.168.11.207:3000/request/addingRequest",Request).then((result)=>{setidrequest(result.data.id);navigation.navigate('LoadingScreen',{requestid:idrequest})}).catch((error)=>console.log(error))
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                <View style={styles.container1}>
                <Text>Symptoms</Text>
                    <Text>tttt</Text>
                    <Text>tttt</Text>
                    <Text>tttt</Text>
                    <Text>tttt</Text>
                    <Text>tttt</Text>
                    <TextInput placeholder="Details"
                    ></TextInput>
                    
                    
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => navigation.navigate('DoctorLoadingScreen')}
                    >
                        <Text style={styles.loginText}>confirm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => Alert.alert("done")}
                    >
                        <Text style={styles.loginText}>Cancel</Text>
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
    container1:{
        alignItems:"center",
        justifyContent:"center"
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

});
export default DoctorRequest