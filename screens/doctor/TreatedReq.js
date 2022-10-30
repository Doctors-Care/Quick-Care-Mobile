import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
 RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import link from "../../Adress";
import moment from "moment/moment";

const TreatedReq = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(async () =>{
        setRefreshing(true);
    fetch(`${link}/request/getAllOKRequests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    fetch(`${link}/request/getAllOKRequests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);
  //

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.data}>Request :{index + 1}</Text>
              <Text style={styles.data}>{item.description}</Text>
              <Text>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  title="Accept"
                  onPress={() =>
                    navigation.navigate("Done", {
                      id: item.patientId,
                      requestId: item.id,
                      doctorId: route.params.id,
                    })
                  }
                >
                  <Text>details</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default TreatedReq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderColor: "#44b3cc",
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
    fontSize: 32,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    padding: 10,
    backgroundColor: "#44b3cc",
    borderRadius: 10,
    width: 120,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    fontSize: 28,

    fontWeight: "bold",
  },
  data: {
    fontSize: 18,
    color: "black",
  },
});
