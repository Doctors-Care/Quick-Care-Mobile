import axios from "axios";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  List,
  TextInput,
  ListItem,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import io from "socket.io-client";

function DoctorChat() {
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = io.connect("http://192.168.11.82:3001");

  //   useEffect(() => {
  socket.on("Doctor_message", (message) => {
    setMessages([...messages, message]);
  });
  console.log(messages);
  //   }, [socket]);

  const sendMessage = () => {
    socket.emit("doctor_send_message", { chat });
    setChat("");
  };

  return (
    
      <View style={styles.container}>
        <View>
          <View style={styles.container1}>
            <Text style={styles.Title1}>Chat</Text>
            <View style={styles.containerForMessage}>
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={styles.messages}>
                    <Text style={styles.messagetext}> {item.chat} </Text>
                  </View>
                );
              }}
            />
            </View>
            <View style={styles.inputView}>
              <TextInput
                styles={styles.TextInput}
                onChangeText={(e) => {
                  setChat(e);
                }}
                value={chat}
                placeholder="Write your message here"
                placeholderTextColor="black"
              ></TextInput>
            </View>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => sendMessage()}
            >
              <Text style={styles.loginText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    alignItems:"center"
  },
  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#44b3cc",
    marginTop: 20,
  },
  loginText: {
    color: "white",
  },
  areaView: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    width: "90%",
    height: 200,
    marginBottom: 50,
    alignItems: "center",
    borderColor: "#077871",
    borderWidth: 2,
    marginTop: 50,
    multiline: true,
  },
  container1: {
    alignItems: "flex-start",
    justifyContent: "center",
    left:13,
    right:13
  },
  TextInput: {
    height: 200,
    flex: 1,
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  Title1: {
    fontSize: 50,
    padding: 10,
    color: "#44b3cc",
  },
  containerForMessage:{
    width:350,
    height:400
  },
  messages:{
    borderWidth:3,
    borderColor:"#00BFFF",
    borderRadius:20,
    margin:7,
    backgroundColor:"#44b3cc",
    marginRight:22

  },
  inputView:{
    borderWidth:2,
    borderColor:"#00BFFF",
    width:"90%",
    height:70,
    borderRadius:50,
    textAlign:"center",
    alignItems:"center"
  },
  messagetext:{
    padding:10,
    color:"#ffffff",
    fontSize:18
  },
});
export default DoctorChat;
