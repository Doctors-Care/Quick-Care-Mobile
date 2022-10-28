// import React, { useEffect, useState } from "react";
// import {
//   SafeAreaView,
//   TouchableOpacity,
//   View,
//   Text,
//   StyleSheet,
// } from "react-native";
// import { Row, Rows, Table, TableWrapper } from "react-native-table-component";
// import axios from "axios";

// export default function History({ route }) {
//   const [requests, setRequests] = useState([]);
//   const headers = ["Doctor", "Hospital", "Date", "Description"];
//   const rows = requests
//   useEffect(() => {
//     console.log(route);
//     const Request = {
//       id: route.params.id,
//     };
//     axios
//       .post("http://192.168.11.215:3000/request/getAllofOnePatient", Request)
//       .then((result) => {
//         console.log("result", result.data);
//         result.data.map((element) => {
//           console.log("req", element);
//          return setRequests((prevState) => { console.log(element.DoctorId===null); if(element.DoctorId === null){
//             return [...prevState,[ "---", element.hce.name, element.createdAt, element.description]]}
//             else {return [...prevState,[element.Doctor.lastName, "---", element.createdAt, element.description]]}
//           });
//         });
//       })
//       .catch((error) => console.log(error));
//   },[]);
//   return (
//     <>
//       {console.log("requests", requests)}
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text style={styles.Title1}>History of Requests</Text>
//       </View>
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={{ flex: 1, padding: 10 }}>
//           <Table borderStyle={{ borderWidth: 1 }}>
//             <Row
//               data={headers}
//               style={{
//                 backgroundColor: "lightgray",
//               }}
//               height={40}
//               flexArr={[1, 1, 1, 1]}
//               textStyle={{
//                 textAlign: "center",
//               }}
//             />
//             <TableWrapper>
//               <Rows data={rows} />
//             </TableWrapper>
//           </Table>
//         </View>
//       </SafeAreaView>
    
//     </>
//   );
// }
// const styles = StyleSheet.create({
//   Title1: {
//     fontSize: 50,
//     padding: "10%",
//     color: "#077871",
//   },
// });
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
  import link from "../../../Adress";
  import moment from "moment/moment";
  
  const DocRequests = ({ route, navigation }) => {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(async () =>{
          setRefreshing(true);
          const Request = {
            id: route.params.id,
          };
          fetch(`${link}/request/getAllDocOfOnePatient`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Request),
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
        const Request = {
                  id: route.params.id,
                };
                console.log(route);
      fetch(`${link}/request/getAllDocOfOnePatient`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Request),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((err) => console.error(err));
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.data}>Request :{index + 1}</Text>
                <Text style={styles.data}>{item.description}</Text>
                <Text>{moment(item.createdAt).format('LL')}</Text>
  
                <View style={styles.buttonContainer}>
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
  
  export default DocRequests;
  
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
      borderColor: "#077871",
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
      backgroundColor: "#077871",
      borderRadius: 10,
      width: 120,
      margin: 20,
      justifyContent: "center",
      alignItems: "center", 
    },
    fontStyle:{
      color: "#ffffff"
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
  