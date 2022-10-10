import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable, TouchableOpacity } from 'react-native';


function SecondaryMenu({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.emergencyButton}
                    onPress={() => navigation.navigate('DoctorRequest')}>
                    <Image
                        style={styles.imageForMenu}
                        source={require('../../assets/Capture12-removebg-preview.png')
                        } />
                        <Text style={styles.TextForMenu}>Doctor at home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.emergencyButton}
                    onPress={() => navigation.navigate('DoctorRequest')}>
                    <Image
                        style={styles.imageForMenu}
                        source={require('../../assets/Pharmacie-logo.jpg')
                        } />
                        <Text style={styles.TextForMenu}>Pharmacies</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
            <TouchableOpacity
                    style={styles.emergencyButton}
                    onPress={() => navigation.navigate('DoctorRequest')}>
                    <Image
                        style={styles.imageForMenu}
                        source={require('../../assets/Capture12-removebg-preview.png')
                        } />
                        <Text style={styles.TextForMenu}>Appointtement</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.emergencyButton}
                    onPress={() => navigation.navigate('DoctorRequest')}>
                    <Image
                        style={styles.imageForMenu}
                        source={require('../../assets/download.png')
                        } />
                        <Text style={styles.TextForMenu}>Forum</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        height:"100%"
    },
    container2:{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width:"100%",
        height:"50%"
    },
    emergencyButton: {
        height: "75%",
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
    },
    imageForMenu:{
        width:"90%",
        height:"90%",
        backgroundColor:"#44B3CC"
    },
    TextForMenu:{
        fontSize:20,
    }

});
export default SecondaryMenu