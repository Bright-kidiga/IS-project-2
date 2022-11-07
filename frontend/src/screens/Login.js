import React, { Component, useState, useContext } from 'react';
import { View, Text, TextInput, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, Button } from 'react-native';

import { AuthContext } from '../context/AuthContext';


const {width, height} = Dimensions.get('window')

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);

        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                {/* <Text>{val}</Text> */}
                <View style={styles.inputContainer}>
                <TextInput
                    
                    style={styles.input}
                    label= "Username"
                    placeholder="Username"
                    onChange={event => setEmail(event.target.value)}
                />
                <TextInput
                    
                    style={styles.input}
                    label= "Password"
                    placeholder="Password"
                    onChange={event => setPassword(event.target.value)}
                    secureTextEntry
                />
                </View>
                <View style={styles.buttonContainer}>
                   <TouchableOpacity onPress={() => login(
                       email, password)}>
                    <View style={styles.getStartedContainer}>
                        <Text style={styles.getStarted}>Log in</Text>
                    </View>
                   </TouchableOpacity>
                </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf7f8",
    },
    inputContainer: {
        marginTop: 300,
        margin: 15,
    },
    input: {
        height: 60,
        fontSize: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#60DCE4",
        backgroundColor: '#fff',
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: width,
        bottom: 50,
        height: 60,
    },
    getStartedContainer: {
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
        fontFamily: "Helvetica",
        color: "#60DCE4",
    },
});