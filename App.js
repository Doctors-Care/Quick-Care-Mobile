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

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginForUser" component={LoginPageForUser}/>
        <Stack.Screen name="Registration" component={RegistrationForUser}/>
        <Stack.Screen name="LoginFormDoctor" component={LoginFormDoctor}/>
        <Stack.Screen name="SignUpFormDoctor" component={SignUpFormDoctor}/>
        <Stack.Screen name="DoctorNav" component={DoctorNav}/>
        <Stack.Screen name="DoctorProfile" component={DoctorProfile}/>
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
