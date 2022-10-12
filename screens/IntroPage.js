import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, Pressable, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

function Welcome({ navigation }) {

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.logo}
        source={require("../assets/64216-super-nurse-animation.json")}
        autoPlay />
      <Image
        style={styles.tuto}
        source={require('../assets/splash.png')
        } />
      <StatusBar style="auto" />
      <View
        style={styles.viewforbutton}
      >
        <Pressable
          style={styles.buttonBottom}
          title="Log In"
          color="#077871"
          onPress={() => navigation.navigate('LoginForUser')}>
          <Text
            style={styles.ButtonText}>Log In</Text>
        </Pressable>
        <Pressable
          style={styles.buttonBottom}
          title="Register"
          onPress={() => navigation.navigate('Registration')}>
          <Text
            style={styles.ButtonText}
          >Register</Text>
        </Pressable>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}
          onPress={() => navigation.navigate('LoginFormDoctor')}>Are you a doctor ?</Text>
      </TouchableOpacity>
    </View>
  );
}


//style for welcome page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 200,
    top: 10,
    borderRadius: 0,

  },
  tuto: {
    width: 330,
    height: 350,
    top: 10,
    Button: 300,

    borderRadius: 50,
  },
  buttonBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 40,
    elevation: 3,
    color: "#077871",
    borderColor: "#077871",
    backgroundColor: "#077871",
    margin: 10,
  },
  ButtonText: {
    color: "white",
  },
  viewforbutton: {
    display: "flex",
    flexDirection: "row"
  }
});

export default Welcome