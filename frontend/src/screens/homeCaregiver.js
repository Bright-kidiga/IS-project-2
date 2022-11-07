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
             <View style={styles.buttonContainer}>
                <Text style={styles.apply}>Make application</Text>
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
    buttonContainer: {
        height: 40,
        width: 150,
        backgroundColor: 'red',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderwidth: 1,
    }
});