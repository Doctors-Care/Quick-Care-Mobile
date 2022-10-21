import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPageForUser from "./screens/patient/Auth/LoginPageForUser";
import RegistrationForUser from "./screens/patient/Auth/RegistrationForPatient";
import Welcome from "./screens/IntroPage";
import LoginFormDoctor from "./screens/doctor/auth/LoginFormDoc";
import SignUpFormDoctor from "./screens/doctor/auth/SignUpFormDoc";
import DoctorNav from "./screens/doctor/DoctorNav";
import DoctorProfile from "./screens/doctor/DoctorProfile";
import MyTabs from "./screens/patient/Home/AppForUserHomePage";
import LoadingScreenEmergency from "./screens/patient/Emergency/LoadingScreen";
import EmergencyAccepted from "./screens/patient/Emergency/EmergencyAcceptedPatient";
import TrackAmbulance from "./screens/patient/Emergency/TrackAmbulance";
import ProfilePatient from "./screens/patient/Profile/ProfilePatient";
import EditProfilePatient from "./screens/patient/Profile/EditProfilePatient";
import SecondaryMenu from "./screens/patient/SecondaryMenu/SecondaryMenu";
import DoctorRequest from "./screens/patient/SecondaryMenu/DoctorRequest";
import DoctorLoadingScreen from "./screens/patient/SecondaryMenu/DoctrLoadingScreen";
import AcceptedDoctor from "./screens/patient/SecondaryMenu/AcceptedDoctorCall";
import History from "./screens/patient/Home/historyOfRequests";
import EditPageDoc from "./screens/doctor/EditPageDoc";
import DetailsForDoctor from "./screens/doctor/detailsforDoctor";
import Chat from "./screens/patient/SecondaryMenu/Patientchat";
import VerificationScreen from "./screens/patient/Auth/VerificationPage";

export default function App() {
  //creating the Stack navigation
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Welcome">       
        <Stack.Screen 
        //the welcome page
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        //login for user screen
          name="LoginForUser"
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#077871",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={LoginPageForUser}
        />
        <Stack.Screen name="Registration" 
              options={{
                title: "Registration",
                headerStyle: {
                  backgroundColor: "#077871",
                },
                headerTintColor: "#fff",
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontWeight: "bold",
                },}}
        //login for doctor screen
        component={RegistrationForUser}
         />
        <Stack.Screen
          name="LoginFormDoctor"
          options={{
            title: "Welcome Doc",
            headerStyle: {
              backgroundColor: "#44b3cc",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={LoginFormDoctor}
        />
        <Stack.Screen name="SignUpFormDoctor" component={SignUpFormDoctor} />
        <Stack.Screen
          name="DoctorNav"
          component={DoctorNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
        <Stack.Screen
          name="EmergencyHome"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoadingScreen" component={LoadingScreenEmergency} />
        <Stack.Screen name="EmergencyAccepted" component={EmergencyAccepted} />
        <Stack.Screen name="TrackAmbulance" component={TrackAmbulance} />
        <Stack.Screen name="ProfilePatient" component={ProfilePatient} />
        <Stack.Screen
          name="EditProfilePatient"
          component={EditProfilePatient}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="secondaryMenu" component={SecondaryMenu} />
        <Stack.Screen name="DoctorRequest" component={DoctorRequest} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen
          name="DoctorLoadingScreen"
          component={DoctorLoadingScreen}
        />
        <Stack.Screen name="AcceptedDoctor" component={AcceptedDoctor} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="EditPageDoc" component={EditPageDoc} />
        <Stack.Screen name="DetailsForDoctor" component={DetailsForDoctor} />
        <Stack.Screen name="VerificationScreen"
        options={{
          title: "Verification",
          headerStyle: {
            backgroundColor: "#077871",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }} component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
