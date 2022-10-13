import  React, { useEffect, useState } from 'react';
import { SafeAreaView,TouchableOpacity,View,Text,StyleSheet } from "react-native";
import {Row, Rows, Table, TableWrapper} from "react-native-table-component";

const headers = ["Doctor","Hospital","Date","Description"]
const rows = [
    "Row11","Row12","Row13","Row14",
    "Row21","Row22","Row23","Row24",
    "Row31","Row32","Row33","Row34",
    "Row41","Row42","Row43","Row44"
]

export default function History (route){
    const [request, setRequest] = useState([]);
    useEffect(()=>{
        const Request = {
            email: route.params.email,
        }
        axios.post("http://192.168.101.3:3000/request/getAllofOnePatient", Request).then((result) => {
            result.data.map((request)=>{setRequest((prevRequest)=>{return [...prevRequest,[request.doctor, request.hce, request.hce, request.description]]})})
        }).catch((error) =>
            console.log(error))
    })
    return(<>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.Title1}>History of Requests</Text>
            <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => createEmergency()}>
            </TouchableOpacity>
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
                    <Rows data={rows} />
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