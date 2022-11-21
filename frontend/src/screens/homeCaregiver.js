import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';

const {width, height} = Dimensions.get('window')

export default class HomeCaregiver extends Component {
    render() {
        // function getCaregiverList(){
        //     return fetch('localhost:8000/api/')
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log(json, "json");
        //       return json;
        //     })
        //     .catch((error) => {
        //       console.error(error);
        //     });
        // }
        return (
            <View style={styles.container}>
                 <View style={styles.titleContainer}>
                   <View style={styles.grt}>
                    <Text style={styles.greeting}>Welcome back </Text>
                    <Text style={styles.name}>..name.. </Text>
                   </View>
                    <TouchableOpacity>
                    <Image
                            style={styles.profile}
                            source={{
                            uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                            }}
                        />
                    </TouchableOpacity>
                </View>
            <View style={styles.feedContainer}>
              <View style={styles.head}>
                <View style={styles.jobs}>
                    <Text style={styles.jobtext}>Jobs completed</Text>
                    <Text style={styles.jobCount}>1244</Text>
                </View>
                <View style={styles.status}>
                    <Text style={styles.jobCount}>Approved</Text>
                </View>
              </View>
                <View style={styles.jobs}>
                    <Text style={styles.jobtext}>Rating</Text>
                    <Text style={styles.jobCount}>4.5/5</Text>
                </View>
            <View style={styles.buttonContainer}>
                   <TouchableOpacity onPress={() => navigation.navigate("application")}  >
                    <View style={styles.btnContainer}>
                        <Text style={styles.getStarted}>Log in</Text>
                    </View>
                   </TouchableOpacity>
            </View>
            </View>
            </View>
        )}
 }
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe5fc',
    },
    titleContainer: {
        margin: 15,
        marginTop: 25,
        marginBottom: 60,
        height: 70,
        verticalAlign: 'middle',
        flexDirection: 'row',
        width: width,
    },
    profile: {
        height: 70,
        width: 70,
        marginRight: 10,
        marginTop: 30,
        borderRadius: 50,
    },
    grt: {
        marginTop: 40,
        marginRight: 160
    },
    greeting: {
        fontSize: 20,
        fontStyle: 'bold',
    },
    name: {
        fontSize: 30,
        fontStyle: 'bold',
    },
    feedContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    head: {
        flexDirection: 'row',
    },
    jobs: {
        height: 100,
        margin: 15,
        marginRight: 160,
    },
    jobCount: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#60DCE4'
    },
    status: {
        height: 100,
        margin: 15,
    },
    buttonContainer: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: width,
        bottom: 50,
        height: 60,
    },
    btn: {
        height: 40,
        width: 150,
        backgroundColor: 'red',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        width: 160,
        height: 60,
        borderColor: "#60DCE4",
        borderWidth: 2,
        borderRadius: 15,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    getStarted: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#60DCE4",
    },
});