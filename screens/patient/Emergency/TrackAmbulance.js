import { StyleSheet, Text, View, TextInput, Image, Button, Alert ,Pressable ,TouchableOpacity} from 'react-native';


function TrackAmbulance({navigation}){
    return (
      <View style={styles.container}>
        <Text>ambulace Name</Text>
        <Text>Your emergency is treated</Text>
        <Text>waiting time</Text>
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
    CancelButton:{
        width: "90%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#077871",
        marginTop: 80,
    },
    buttonText:{
        color:"#ffffff"
    }
  
  });
  export default  TrackAmbulance