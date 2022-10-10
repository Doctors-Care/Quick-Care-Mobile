import { useState } from 'react'
import { StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch, } from 'react-native'
import React from 'react'

const DoctorProfile = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
    <View style={styles.header}></View>
    <Image
      style={styles.avatar}
      source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
    />
    <View style={styles.body}>
      <View style={styles.bodyContent}>
        <Text style={styles.name}>John Doe</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.info}>UX Designer / Mobile developer</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
          electram expetendis, omittam deseruisse consequuntur ius an,
        </Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          // onPress={() => navigation.navigate("EditprofileForm")}
        >
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 2</Text> 
            </TouchableOpacity> */}
      </View>
    </View>
  </View>
  );
}

export default DoctorProfile

const styles = StyleSheet.create({ header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 300,
    color: "#000000",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },})