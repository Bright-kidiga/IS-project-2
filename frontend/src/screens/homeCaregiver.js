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
                   </View>
                    <TouchableOpacity style={styles.prfBtn}>
                    <Image
                            style={styles.profileToggle}
                            source={{
                            uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                            }}
                        />
                    </TouchableOpacity>
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
        height: 70,
        verticalAlign: 'middle',
        flexDirection: 'row',
        width: width,
    },
    prfBtn: {
        
    },
    profileToggle: {
        height: 25,
        width: 25,
    },
    grt: {
        marginRight: 230
    },
    greeting: {
        fontSize: 20,
        fontStyle: 'bold',
    },
    searchContainer: {
        margin: 20,
        verticalAlign: 'middle',
        flexDirection: 'row',  
        backgroundColor: '#ffcccc',
        borderRadius: 15,
        opacity: .8,
    },
});