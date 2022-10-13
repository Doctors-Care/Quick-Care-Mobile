import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity } from 'react-native';


function EmergencyAccepted({ navigation, route }) {

  return (
    <View style={styles.container}>
      <Text style={styles.textInput1}>{route.params.Hce.name}</Text>
      <Text style={styles.textInput1}>{route.params.Hce.adress}</Text>
      <Text style={styles.textInput1}>{route.params.Hce.phoneNumber}</Text>
      <Image
        style={styles.emergencyButton}
        source={require('../../../assets/urgence.png')
        } />
      <TouchableOpacity
        style={styles.CancelButton}
        onPress={() => navigation.navigate('TrackAmbulance')}
      >
        <Text style={styles.buttonText}>Track Your Ambulance</Text>
      </TouchableOpacity>
    </View>
  );
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
  textInput1: {
    fontSize: 40,
  }
});
export default EmergencyAccepted