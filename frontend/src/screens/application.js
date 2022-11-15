import React, { Component,  useState } from 'react';
import { View, Text, Switch, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';

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
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const [isNurse, setIsNurse] = useState(false);
    const [isBabysitter, setIsBabysitter] = useState(false);
    const [isPetcarer, setIsPetcarer] = useState(false);

    const toggleNurse = () => setIsNurse(previousState => !previousState);
    const toggleBabysitter = () => setIsBabysitter(previousState => !previousState);
    const togglePetcarer = () => setIsPetcarer(previousState => !previousState);
    return (
        <View style={styles.container}>  
           <View style={styles.application}>
           <View style={styles.formContainer}>
                    <TextInput
                       
                        style={styles.inputDescription}
                        label= "Description"
                        placeholder="Write your description here..."
                        onChange={event => setDescription(event.target.value)}
                    />
                    <TextInput
                    
                        style={styles.inputAge}
                        label= "Age"
                        placeholder="Age"
                        onChange={event => setAge(event.target.value)}
                    />
                    <TextInput
                        
                        style={styles.input}
                        label= "Phone Number"
                        placeholder="Phone Number"
                        onChange={event => setPhone(event.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        label= "Confirm Password"
                        placeholder="Confirm Password"
                        secureTextEntry
                    />
                </View>
                <View style={styles.switchContainer}>
                  <View style={styles.switch}>
                    <Text style={styles.switchText}>Nurse</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isNurse ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleNurse}
                        value={isNurse}
                    />
                  </View>
                  <View style={styles.switch}>
                    <Text style={styles.switchText}>Babysitter</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isBabysitter ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleBabysitter}
                        value={isBabysitter}
                     />
                  </View>
                  <View style={styles.switch}>
                    <Text style={styles.switchText}>Pet carer</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isPetcarer ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={togglePetcarer}
                        value={isPetcarer}
                     />
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
application: {
    margin: 20,
},
inputDescription: {
    height: 100,
},
switchContainer: {
    width: 300,
},
switch: {
    flexDirection: 'row',
    height: '20'
},
switchText: {
    fontSize: 20,
    color: 'black'
},
});