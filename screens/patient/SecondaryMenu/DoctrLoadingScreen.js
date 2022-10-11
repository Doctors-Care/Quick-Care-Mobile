import { StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable,TouchableOpacity } from 'react-native';


function DoctorLoadingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <Text>Your Doctor Call will be treated as soon as possible</Text>
            <TouchableOpacity
                style={styles.CancelButton}
                onPress={() => navigation.navigate('Emergency')}
            >
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('AcceptedDoctor')}
                style={styles.CancelButton}
            >
                <Text style={styles.buttonText}>Loading end</Text>
            </TouchableOpacity>
        </View>
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
export default DoctorLoadingScreen