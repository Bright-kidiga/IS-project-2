import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Swiper from 'react-native-swiper/src';




const {width, height} = Dimensions.get('window')

export default function Onboarding ({ navigation }) {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Swiper autoplay={true} showsButtons={false}>
                    <View style={styles.slider}>
                        <Image source={{uri: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                               style={styles.image}
                        />
                    </View>
                    <View style={styles.slider}>
                        <Image source={{uri: 'https://images.pexels.com/photos/9263448/pexels-photo-9263448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                               style={styles.image}
                        />
                    </View>
                    <View style={styles.slider}>
                        <Image source={{uri: 'https://images.pexels.com/photos/3786233/pexels-photo-3786233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                               style={styles.image}
                        />
                    </View>
                    <View style={styles.slider}>
                        <Image source={{uri: 'https://images.pexels.com/photos/6393346/pexels-photo-6393346.jpeg?auto=compress&cs=tinysrgb&w=600'}}
                               style={styles.image}
                        />
                    </View>
                </Swiper>
                <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.title}>Tutela.</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                   <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}  >
                    <View style={styles.btnContainer}>
                        <Text style={styles.getStarted}>Sign up</Text>
                    </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate("login")}  >
                    <View style={styles.btnContainer}>
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
    },
    slider: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: width,
        height: height,
    },
    textContainer: {
        width: width,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: 400,
        marginBottom: 0,
        
    },
    titleContainer: {
        width: 300,
        height: 90,
        backgroundColor: '#60DCE4',
        opacity: .8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
    },
    title: {
        fontWeight: "bold",
        fontSize: 80,
        fontFamily: "Helvetica",
        // color: "white",
        letterSpacing: 2,
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
    btnContainer: {
        width: 160,
        height: 60,
        borderColor: "#3e9ea5",
        borderWidth: 2,
        borderRadius: 15,
        margin: 10,
        backgroundColor: "#b4dde0",
        opacity: .9,
        alignItems: "center",
        justifyContent: "center",
    },
    getStarted: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Helvetica",
        color: "#3e9ea5",
    }
})