import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';

const {width, height} = Dimensions.get('window')

export default function application({ navigation }) {
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
           <Text style={styles.title}>Make Application</Text>    
           <View style={styles.application}></View>
        </View>
    )}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    // fontFamily: Poppins,
},
title: {
    fontSize: 20,
    color: '#60DCE4'
}
});