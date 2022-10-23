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
import link from "../../../Adress";
// import env from "react-dotenv";

function EditProfilePatient({ navigation, route }) {
  const [firstname, setFirstName] = useState(route.params.patient.firstName);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [lastName, setLastName] = useState(route.params.patient.lastName);
  const [email, setEmail] = useState(route.params.patient.email);
  const [password, setPassword] = useState(route.params.patient.password);
  const [phoneNumber, setPhoneNumber] = useState(
    route.params.patient.phoneNumber
  );
  const [age, setAge] = useState(route.params.patient.age);
  const [gender, setGender] = useState(route.params.patient.gender);
  const [Chronical, setChronical] = useState(
    route.params.patient.chronicDiseases
  );
  const data = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
    { label: "Other", value: "don't want to tell" },
  ];

  useEffect(() => {});

  const changerFirstName = () => {
    axios
      .put(`${link}/user/updateAll`, {
        id: route.params.patient.id,
        firstName: firstname,
      })
      .then((a) => setFirstName(a.data.firstName))
      .catch((err) => console.log(err));
  };

  const changeLastName = () => {
    axios
      .put(`${link}/user/updateAll`, {
        id: route.params.patient.id,
        lastName: lastName,
      })
      .then((a) => setLastName(a.data.lastName))
      .catch((err) => console.log(err));
  };

  const changeEmail = () => {
    axios
      .put(`${link}/user/updateAll`, {
        id: route.params.patient.id,
        email: email,
      })
      .then((a) => setEmail(a.data.email))
      .catch((err) => console.log(err));
  };

  const changePhonenumber = () => {
    axios
      .put(`${link}/user/updateAll`, {
        id: route.params.patient.id,
        phoneNumber: phoneNumber,
      })
      .then((a) => setPhoneNumber(a.data.phoneNumber))
      .catch((err) => console.log(err));
  };

  const changeAge = () => {
    axios
      .put(`${link}/user/updateAll`, { id: route.params.patient.id, age: age })
      .then((a) => setAge(a.data.age))
      .catch((err) => console.log(err));
  };
  const selectPhotoTapped = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibraryAsync(options, (response) => {

      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.uri;
        const type = response.type;
        const name = response.fileName;
        const source = {
          uri,
          type,
          name,
        }
        cloudinaryUpload(source)
      }
    });
  }
  const cloudinaryUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', 'akvv0jtv')
    data.append("cloud_name", "ogcodes")
    fetch("https://api.cloudinary.com/v1_1/dtwuychif/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        setPhoto(data.secure_url)

      }).catch(err => {
        Alert.alert("An Error Occured While Uploading")
      })
  }
  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   //   setFile(result.uri)
  //  try{
  //   const formData = new FormData ()
  //   formData.append("file",result.uri)
  //   formData.append("upload_preset", "akvv0jtv")
  //   console.log("formData",formData);
  //   fetch(`https://api.cloudinary.com/v1_1/dtwuychif/upload`,{
  //       method: "POST",
  //       body: formData,
  //       headers:{
  //           Accept: "application/json",
  //           "Content-Type":"application/json",
  //       },
  //   }) .then(response => {console.log("response", response);response.json();}
  //           )
  //           .then(data => {
  //               // if (data.secure_url !== ""){
  //                   console.log(data)
  //               // }
  //           })
  //           .catch(error => {
  //                  console.log("error",error);
  //                 })
  //  }  
  //  catch (err){ console.log(err)}
      
    //   await axios.post (`https://api.cloudinary.com/v1_1/dtwuychif/upload`,formData,{ withCredentials: true })
    //   .then(response => {
    //     console.log("response", response.data.secure_url);
    //     // axios.post('http://localhost:3000/addPost', newPost)
    //   })
    //   .catch(error => {
    //    console.log("error",error);
    //   })
    
                // }   

  const changegender = () => {
    axios
      .put(`${link}/user/updateAll`, {
        id: route.params.patient.id,
        gender: gender,
      })
      .then((a) => setGender(a.data.gender))
      .catch((err) => console.log(err));
  };

  const changechronicals = () => {
    axios
      .put(`${link}/user/updateAll`, {
        id: route.params.patient.id,
        chronicDiseases: Chronical,
      })
      .then((a) => setChronical(a.data.chronicDiseases))
      .catch((err) => console.log(err));
  };

  return (
    <ScrollView>
      <View style={styles.header}></View>
      {!image&& <Image 
        style={styles.avatar}
        source={{ uri: "file:///data/user/0/host.exp.exponent/cache/ImagePicker/cc0d33b8-53ac-48eb-a1b3-ad0280533d40.jpeg"}}
      /> }
      {image&& <Image 
        style={styles.avatar}
        source={{ uri: {image} }}
      /> 
       }
      
      <TouchableOpacity style={styles.editPicture} onPress={()=>selectPhotoTapped()}>
        <MaterialCommunityIcons name="image-edit" size={30} color={"#077871"} />
      </TouchableOpacity>
      <View style={styles.body}>
        <View
          style={styles.bodyContent}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.name}
            onChangeText={(first) => setFirstName(first)}
          >
            {firstname}
          </TextInput>
          <TextInput
            style={styles.name}
            onChangeText={(last) => setLastName(last)}
          >
            {lastName}
          </TextInput>
          <TextInput style={styles.info}>{email}</TextInput>
          <Text>Email :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(email) => setEmail(email)}
              defaultValue={email}
            ></TextInput>
          </View>
          {/* <Text>password :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(password) => setPassword(password)}
              defaultValue={phoneNumber}
            ></TextInput>
          </View> */}
          <Text>phoneNumber :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
              keyboardType="numeric"
              placeholder={phoneNumber}
              defaultValue={phoneNumber}
            ></TextInput>
          </View>
          <Text>Age :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(age) => setAge(age)}
              defaultValue={age}
            ></TextInput>
          </View>
          <Text>Medical records :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChange={(Chronical) => setChronical(Chronical)}
            ></TextInput>
          </View>
          <View style={styles.containerForEdit}>
            <Dropdown
              style={styles.dropdown}
              data={data}
              labelField="label"
              placeholder="Gender"
              value={gender}
              onChange={(item) => {
                setGender(item.value);
                console.log("selected", item);
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.confirm}
            onPress={() => {
              changerFirstName();
              changeLastName();
              changeEmail();
              changePhonenumber();
              changeAge();
              changechronicals();
              changegender();
              navigation.dispatch(
                CommonActions.navigate({
                  name: "EmergencyHome",
                  params: { id: route.params.patient.id },
                })
              );
            }}
          >
            <MaterialCommunityIcons name="check" size={50} color={"#077871"} />
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
    backgroundColor: "#077871",
    height: 160,
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
    marginTop: 100,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
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
    borderColor: "#077871",
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
    backgroundColor: "#077871",
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
  dropdown: {
    backgroundColor: "#fff",
    width: 300,
    shadowColor: "#fff",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    borderRadius: 12,
    borderColor: "#077871",
    borderWidth: 2,
    marginTop: 20,
    alignContent: "center",
    textAlign: "center",
  },
  editbigIcon: {
    position: "absolute",
    left: 300,
    top: "8%",
  },
  confirm: {
    borderWidth: 2,
    borderColor: "#077871",
    marginTop: 15,
    borderRadius: 50,
  },
  editPicture:{
paddingLeft:230,
paddingTop:30
  }
});

export default EditProfilePatient;
