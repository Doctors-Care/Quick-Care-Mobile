import axios from "axios";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import link from "../../../Adress";
import io from "socket.io-client"
const socket =io.connect ("http://localhost:3001")

function Chat({ navigation, route }) {
  const [idrequest, setidrequest] = useState("");
  const [message, setMessage] = useState("");
  const SendMessage = () => {
    socket.emit("send_message", )
    useEffect(()=>{
socket.on("receive_message",(data)=>{
    socket.broadcast.emit("receive_message", data)
})
    },[socket])
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.container1}>
            <Text>Message</Text>
            <View style={styles.inputView}>
              <TextInput
                styles={styles.TextInput}
                placeholder="Write your message here"
                placeholderTextColor="black"
                onChangeText={(a) => {
                  setMessage(a);
                }}
              ></TextInput>
            </View>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => SendMessage()}
            >
              <Text style={styles.loginText}>Send</Text>
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
    backgroundColor: "#fff",
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
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
    color: "white",
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
    marginTop: 50,
    multiline: true,
  },

  TextInput: {
    height: 200,
    flex: 1,
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
  },
});
export default Chat;
