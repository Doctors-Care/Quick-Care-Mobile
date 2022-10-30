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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import link from "../../../Adress";

function DoctorChat() {
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = io.connect(`${link}`);

  //   useEffect(() => {
  socket.on("Doctor_message", (message) => {
    setMessages([...messages, message]);
  });
  // console.log(messages);
  //   }, [socket]);

  const sendMessage = () => {
    socket.emit("doctor_send_message", { Doctor: chat });
    setMessages([...messages, { chat }]);
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
              renderItem={({ item }) => {
                console.log("Doctor log el item", item);
                return item.chat ? (
                  <View style={styles.messages}>
                    <Text style={styles.messagetext}> {item.chat} </Text>
                  </View>
                ) : (
                  <View style={styles.PatientMessages}>
                    <Text style={styles.messagetext}> {item.Patient} </Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.sendArea}>
            <View style={styles.inputView}>
              <TextInput
                styles={styles.TextInput}
                onChangeText={(e) => {
                  setChat(e);
                }}
                value={chat}
                placeholder="    Write your message here              "
                placeholderTextColor="black"
              ></TextInput>
              <TouchableOpacity onPress={() => sendMessage()}>
                <MaterialCommunityIcons
                  name="send-outline"
                  size={20}
                  color={"#44b3cc"}
                  marginTop={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
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
    left: 13,
    right: 13,
  },
  TextInput: {
    height: "100%",
    flex: 1,
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
    marginRight: 50,
  },
  Title1: {
    fontSize: 50,
    padding: 10,
    color: "#44b3cc",
  },
  containerForMessage: {
    width: 350,
    height: 290,
  },
  messages: {
    borderWidth: 3,
    borderColor: "#00BFFF",
    borderRadius: 20,
    margin: 7,
    backgroundColor: "#44b3cc",
    marginRight: 22,
  },
  inputView: {
    borderWidth: 2,
    borderColor: "#00BFFF",
    width: "100%",
    height: 70,
    borderRadius: 50,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 50,
  },
  PatientMessages: {
    borderWidth: 3,
    borderColor: "#077871",
    borderRadius: 20,
    margin: 7,
    backgroundColor: "#6CA86B",
    marginRight: 22,
  },
  messagetext: {
    padding: 10,
    color: "#ffffff",
    fontSize: 18,
  },
  sendArea: {
    flexDirection: "row",
    width: 360,
  },
});
export default DoctorChat;
