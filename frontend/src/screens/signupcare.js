import React, { Component, useState, useContext } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';


const {width, height} = Dimensions.get('window')

export default function SignupCare({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [is_caregiver, setIsCaregiver] = useState();

    const {register} = useContext(AuthContext);
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.title}>Register as caregiver</Text>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                       
                        style={styles.input}
                        label= "Name"
                        placeholder="Name"
                        onChange={event => setName(event.target.value)}
                    />
                    <TextInput
                    
                        style={styles.input}
                        label= "E-mail"
                        placeholder="E-mail"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <TextInput
                        
                        style={styles.input}
                        label= "Password"
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        label= "Confirm Password"
                        placeholder="Confirm Password"
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                   <TouchableOpacity onPress={() => register(
                      name, email, password, is_caregiver
                   )}  >
                    <View style={styles.getStartedContainer}>
                        <Text style={styles.getStarted}>Sign Up</Text>
                    </View>
                   </TouchableOpacity>
                </View>
            </View>
        );
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe5fc',
    },
    formContainer: {
        margin: 15,
        marginTop: 250,
        
    },
    textContainer: {
        width: width,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
        
    },
    titleContainer: {
        width: 300,
        height: 60,
        backgroundColor: '#60DCE4',
        opacity: 0.9,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        // color: "white",
        letterSpacing: 2,
    },    
    input: {
        height: 60,
        fontSize: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#60DCE4",
        backgroundColor: '#fff',
        opacity: 0.8,
        margin: 5,
        marginLeft: 10,
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
        color: "#60DCE4",
    },
});