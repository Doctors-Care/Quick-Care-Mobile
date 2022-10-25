import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const Pharmacies = ({navigation}) => {
  return (
    <View>
      <MapView
          style={styles.map}
          initialRegion={{
            latitude: 36.894674,
            longitude: 10.186805,
            latitudeDelta: 0.02,
            longitudeDelta: 0.03,
          }}
          provider={PROVIDER_GOOGLE}
        ></MapView>
    </View>
  )
}
const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
      },
})

export default Pharmacies
