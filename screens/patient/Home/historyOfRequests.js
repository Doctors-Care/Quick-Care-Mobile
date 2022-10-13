import  React, { useEffect, useState } from 'react';
import { SafeAreaView,TouchableOpacity,View,Text,StyleSheet } from "react-native";
import {Row, Rows, Table, TableWrapper} from "react-native-table-component";
import axios from 'axios';

export default function History ({route}){
    const [requests, setRequests] = useState([]);
    const headers = ["Doctor","Hospital","Date","Description"]
    // const rows = [
    //     request
    // ]
    useEffect(()=>{
        console.log(route)
        const Request = {
            id: route.params.id,
        }
        axios.post("http://192.168.11.224:3000/request/getAllofOnePatient", Request).then((result) => { result.data.map((req)=> setRequests(()=>{console.log(req); return requests.push(["req.Doctor.lastName" , "req.hce.name", req.createdAt ,"req.description"])}))
        }).catch((error) =>
            console.log(error))
    })
    return(<>
    {console.log(requests)}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.Title1}>History of Requests</Text>
        </View>
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1 , padding: 10}}>
                <Table borderStyle={{borderWidth: 1}}>
                    <Row data={headers}
                    style={{
                        backgroundColor: 'lightgray'
                    }}
                    height ={40}
                    flexArr={[1, 1, 1, 1]}
                   textStyle={{
                   textAlign: "center"
                }}
                />
                  <TableWrapper>
                    <Rows data={requests} />
                  </TableWrapper>
                </Table>
            </View>
        </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    Title1: {
        fontSize: 50,
        padding: '10%',
        color: "#077871"
    }
})