import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';

export default function GetStarted({ navigation }) {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
                        <View style={styles.userContainer}>
                            <Text style={styles.userStart}>I'm a client</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("signUpCare")}>
                        <View style={styles.caregiverContainer}>
                            <Text style={styles.caregiverStart}>I'm a caregiver</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#b4dde0",
            alignItems: "center",
            justifyContent: "center",
            // fontFamily: Poppins,
        },
        buttonContainer: {
            flexDirection: "row",

        },
        userContainer: {
            backgroundColor: "#edf7f8",
            width: 160,
            height: 160,
            borderColor: "#60DCE4",
            borderWidth: 2,
            borderRadius: 15,
            margin: 8,
            opacity: 0.8,
            alignItems: "center",
            justifyContent: "center"
        },
        caregiverContainer: {
            backgroundColor: '#ffe5fc',
            width: 160,
            height: 160,
            borderColor: "#FD3CDE",
            borderWidth: 2,
            borderRadius: 15,
            margin: 10,
            opacity: 0.8,
            alignItems: "center",
            justifyContent: "center",
        },
    });
