import React, { Component,  useState, useContext } from 'react';
import { View, Text, Switch, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const {width, height} = Dimensions.get('window')

export default function Application ({ navigation }) {
    
    const {apply} = useContext(AuthContext); 
    
    const [cgiver, setIsCaregiver] = useState('28');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const [is_nurse, setIsNurse] = useState(false);
    const [is_babysitter, setIsBabysitter] = useState(false);
    const [is_petcarer, setIsPetcarer] = useState(false);
   
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
                    
                        style={styles.input}
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
                        label= "Location"
                        placeholder="Location"
                        secureTextEntry
                    />
                </View>
                <View style={styles.switchContainer}>
                  <View style={styles.switch}>
                    <Text style={styles.switchText}>Nurse</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={is_nurse ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleNurse}
                        value={is_nurse}
                    />
                  </View>
                  <View style={styles.switch}>
                    <Text style={styles.switchText}>Babysitter</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={is_babysitter ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleBabysitter}
                        value={is_babysitter}
                     />
                  </View>
                  <View style={styles.switch}>
                    <Text style={styles.switchText}>Pet carer</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={is_petcarer ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={togglePetcarer}
                        value={is_petcarer}
                     />
                  </View>
                </View>
           </View>
           <View style={styles.buttonContainer}>
                   <TouchableOpacity onPress={() => apply(
                     cgiver, description, age, phone, is_nurse, is_petcarer, is_babysitter
                   )}  >
                    <View style={styles.getStartedContainer}>
                        <Text style={styles.getStarted}>Make Application</Text>
                    </View>
                   </TouchableOpacity>
           </View>
        </View>
    )}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
    // fontFamily: Poppins,
},
application: {
    margin: 20,
},
formContainer: {
    marginBottom: 50,
},
inputDescription: {
    height: 100,
    fontSize: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#60DCE4",
    backgroundColor: '#fff',
    margin: 5,
    marginLeft: 10,
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
},
switchContainer: {
    width: width,     
},
switch: {
    flexDirection: 'row',
    height: '20',
    alignItems: 'center',
    textAlign: 'center',
},
switchText: {
    fontSize: 20,
    color: 'black',
    marginRight: 20,
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
    width: 250,
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