import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';

const {width, height} = Dimensions.get('window')

export default function CaregiverProfile({ navigation }) {
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
           <View style={styles.profileContainer}>
                        <Image
                            style={styles.profile}
                            source={{
                            uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                            }}
                        />
            <View style={styles.profileInfo}>
                 <Text style= { styles.name}>Padme Amidala</Text> 
                 <View style={styles.location}>
                 <Image
                            style={styles.loc}
                            source={{
                            uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                            }}
                 />
                 <Text style={styles.loci}>gufgdfvjdf</Text>
                 </View>
            <View style={styles.performance}>
                <View style={styles.icon}>
                <Image
                            style={styles.ico}
                            source={{
                            uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                            }}
                 />
                 <Text>fuyasgfjasjd</Text>
                </View>
                <View style={styles.icon}>
                <Image
                            style={styles.ico}
                            source={{
                            uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                            }}
                 />
                 <Text>fuyasgfjasjd</Text>
                </View>
                <View style={styles.icon}>
                <Image
                            style={styles.ico}
                            source={{
                            uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                            }}
                 />
                 <Text>fuyasgfjasjd</Text>
                </View>
            </View> 
            <View style={styles.analytics}>

            </View>         
            </View>
           </View>
        </View>
    )}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    // fontFamily: Poppins,
},
profileContainer: {
    alignItems: 'center',
    
},
profile: {
    height: 150,
    width: 150,
    margin: 20,
    borderRadius: 100,
},
profileInfo: {
    alignItems: 'center',
},
name: {
    fontWeight: 'bold',
    fontSize: 30,
},
location: {
    flexDirection: 'row',
    margin: 10,
    verticalAlign: 'middle',
},
loc: {
    height: 20,
    width: 20,
    margin: 15,
    marginRight: 10,
},
loci: {
    fontSize: 20,
    margin: 5,
},
performance: {
    height: 100,
    width: 300,
    flexDirection: 'row',
    marginBottom: 25,
},
icon: {
    margin: 15,
    alignItems: 'center',
},
ico: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10,
},
analytics: {
    backgroundColor: '#f0f0f0',
    margin: 5,
    height: 200,
    width: width,
}
});