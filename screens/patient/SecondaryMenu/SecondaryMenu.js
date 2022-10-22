import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity } from 'react-native';

import LottieView from 'lottie-react-native';

function SecondaryMenu({ navigation, route }) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.emergencyButton}
                    onPress={() =>{console.log(route);
                        navigation.navigate('DoctorRequest', { email: route.params.email })}}>
                    <LottieView
                       style={styles.imageForMenu }
                       source={require("../../../assets/64216-super-nurse-animation.json")}
                       autoPlay />
                    <Text style={styles.TextForMenu}>Doctor at home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.emergencyButton}
                    onPress={() => navigation.navigate('DoctorRequest')}>
                  <LottieView
                       style={styles.imageForMenu}
                       source={require("../../../assets/22477-pharmacy-store-drug-home-building-maison-mocca-animation.json")}
                       autoPlay />
                    <Text style={styles.TextForMenu}>Pharmacies</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.emergencyButton}
                    onPress={() => navigation.navigate('DoctorRequest')}>
                    <LottieView
                       style={styles.imageForMenu}
                       source={require("../../../assets/94815-calendar-booking-by-josh-wood.json")}
                       autoPlay />
                    <Text style={styles.TextForMenu}>Appointtement</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.emergencyButton}
                    onPress={() => navigation.navigate('Chat')}>
                    <LottieView
                        style={styles.imageForMenu}
                        source={require('../../../assets/107925-doctor.json')
                        } />
                    <Text style={styles.TextForMenu}>Chat with Doctor</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
    container2: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: "100%",
        height: "50%"
    },
    emergencyButton: {
        height: "75%",
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
    },
    imageForMenu: {
        width: 200,
        height:140

    },
    TextForMenu: {
        fontSize: 20,
        paddingTop:10
    }

});
export default SecondaryMenu