import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPageForUser from './screens/patient/Auth/LoginPageForUser';
import RegistrationForUser from './screens/patient/Auth/RegistrationForPatient';
import Welcome from './screens/IntroPage';
import LoginFormDoctor from "./screens/doctor/auth/LoginFormDoc"
import SignUpFormDoctor from "./screens/doctor/auth/SignUpFormDoc"
import DoctorNav from './screens/doctor/DoctorNav';
import DoctorProfile from './screens/doctor/DoctorProfile';
import MyTabs from './screens/patient/Home/AppForUserHomePage'
import LoadingScreenEmergency from './screens/patient/Emergency/LoadingScreen'
import EmergencyAccepted from './screens/patient/Emergency/EmergencyAcceptedPatient'
import TrackAmbulance from './screens/patient/Emergency/TrackAmbulance'
import ProfilePatient from './screens/patient/Profile/ProfilePatient'
import EditProfilePatient from './screens/patient/Profile/EditProfilePatient'
import SecondaryMenu from './screens/patient/SecondaryMenu/SecondaryMenu'
import DoctorRequest from './screens/patient/SecondaryMenu/DoctorRequest'
import DoctorLoadingScreen from './screens/patient/SecondaryMenu/DoctrLoadingScreen'
import AcceptedDoctor from './screens/patient/SecondaryMenu/AcceptedDoctorCall'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginForUser" component={LoginPageForUser} />
        <Stack.Screen name="Registration" component={RegistrationForUser} />
        <Stack.Screen name="LoginFormDoctor" component={LoginFormDoctor} />
        <Stack.Screen name="SignUpFormDoctor" component={SignUpFormDoctor} />
        <Stack.Screen name="DoctorNav" component={DoctorNav} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
        <Stack.Screen name="EmergencyHome" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreenEmergency} />
        <Stack.Screen name="EmergencyAccepted" component={EmergencyAccepted} />
        <Stack.Screen name="TrackAmbulance" component={TrackAmbulance} />
        <Stack.Screen name="ProfilePatient" component={ProfilePatient} />
        <Stack.Screen name="EditProfilePatient" component={EditProfilePatient} options={{ headerShown: false }} />
        <Stack.Screen name="secondaryMenu" component={SecondaryMenu} />
        <Stack.Screen name="DoctorRequest" component={DoctorRequest} />
        <Stack.Screen name="DoctorLoadingScreen" component={DoctorLoadingScreen} />
        <Stack.Screen name="AcceptedDoctor" component={AcceptedDoctor} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
