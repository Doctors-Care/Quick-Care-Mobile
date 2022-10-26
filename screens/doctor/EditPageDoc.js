import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker"
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";
import link from "../../Adress";

function EditPageDoc({ navigation, route }) {
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    adress: "",
    disponibility: "",
    image: "https://bootdey.com/img/Content/avatar/avatar6.png",
    id:""
  });

  useEffect(() => {
    axios
      .post(`${link}/doctor/getOne`, {
        id: route.params.doctor.id,
      })
      .then((a) => {
        setDoctor(a.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const update = () => {
    axios
      .put(`${link}/doctor/update`, doctor)
      .then((result) => {
        console.log("result",result.data);
        setDoctor(result.data);
      })
      .catch((err) => console.log(err, data));
  };
  let pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });

    if (!result.cancelled) {
      // setData({...data,image:result.uri});

      let base64Img = `data:image/jpg;base64,${result.base64}`;

      let apiUrl = "https://api.cloudinary.com/v1_1/dtwuychif/image/upload";

      let picture = {
        file: base64Img,
        upload_preset: "gaoi5z2y",
      };

      fetch(apiUrl, {
        body: JSON.stringify(picture),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      })
        .then(async (r) => {
          let info = await r.json();
          console.log("info",info.secure_url);
          setDoctor({ ...doctor, image: info.secure_url });
          console.log("data",data);
          axios
            .put(`${link}/doctor/update`, data)
            .then((a) => {console.log(a.data);setDoctor({...doctor, image:a.secure_url})})
            .catch((err) => console.log(err));
          
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <ScrollView>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: doctor.image }}
      />
      <TouchableOpacity style={styles.logout1} onPress={() => {pickImage()}}>
        <MaterialCommunityIcons
          name="account-edit-outline"
          size={40}
          color={"#000000"}
        />
        <Text style={styles.loginText}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.body}>
        <View
          style={styles.bodyContent}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.name}
            placeholder="First Name"
            key="firstName"
            value={doctor.firstName}
            name="firstName"
            onChangeText={(text) => setDoctor({ ...doctor, firstName: text })}
          ></TextInput>
          <TextInput
            style={styles.name}
            placeholder="last Name"
            key="last Name"
            value={doctor.lastName}
            name="lastname"
            onChangeText={(text) => setDoctor({ ...doctor, lastName: text })}
          ></TextInput>
          <TextInput
            style={styles.info}
            onChangeText={(email) => setDoctor({ ...doctor, email: email })}
          >
            {doctor.email}
          </TextInput>

          <Text>password :</Text>
          {/* <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              secureTextEntry={true}
              onChangeText={(text) => setData({ ...data, password: text })}
              defaultValue={data.phoneNumber}
            ></TextInput>
          </View> */}
          <Text>phoneNumber :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(phoneNumber) =>
                setDoctor({ ...doctor, phoneNumber: phoneNumber })
              }
              keyboardType="numeric"
              placeholder={doctor.phoneNumber}
              defaultValue={doctor.phoneNumber}
            ></TextInput>
          </View>
          <Text>Adress :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(last) => console.log("haha")}
              defaultValue={doctor.age}
            ></TextInput>
          </View>

          <View style={styles.containerForEdit}>
            {/* <Dropdown
              style={styles.dropdown}
              data={data}
              labelField="label"
              placeholder="Gender"
              value={gender}
              onChange={(item) => {
                setGender(item.value);
                console.log("selected", item);
              }}
            /> */}
          </View>
          <TouchableOpacity
            style={styles.confirm}
            onPress={() => {
              update();
              navigation.dispatch(
                CommonActions.navigate({
                  name: "DoctorNav",
                  params: { id: route.params.doctor.id },
                })
              );
            }}
          >
            <MaterialCommunityIcons name="check" size={50} color={"#44b3cc"} />
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
    backgroundColor: "#44b3cc",
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
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  bodyContent: {
    alignItems: "center",
    padding: 70,
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
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#696969",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    width: 300,
    borderRadius: 12,
    borderColor: "#44b3cc",
    borderWidth: 2,
    backgroundColor: "#fff",
    height: 40,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#44b3cc",
    marginTop: 80,
  },
  loginText: {
    color: "#ffffff",
  },
  editIcon: {
    position: "absolute",
    left: 300,
    top: "40%",
  },
  editbigIcon: {
    position: "absolute",
    left: 300,
    top: "8%",
  },
  confirm: {
    borderWidth: 2,
    borderColor: "#44b3cc",
    marginTop: 15,
    borderRadius: 50,
  },
});

export default EditPageDoc;
