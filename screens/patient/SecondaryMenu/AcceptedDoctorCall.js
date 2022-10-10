import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity } from 'react-native';


function AcceptedDoctor() {
    return(
    <View style={styles.container}>
        <Text>Doctor Accepted</Text>
        <Image
    style={styles.emergencyButton}
    source={require('../../../assets/Capture12.png')
    } />
    <Text>doctor name</Text>
    <Text>time needed</Text>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CancelButton: {
        width: "90%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#077871",
        marginTop: 80,
    },
    buttonText: {
        color: "#ffffff"
    },
    emergencyButton: {
        height: 300,
        width: 300,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 300,
        backgroundColor: "red",
    }

});
export default AcceptedDoctor