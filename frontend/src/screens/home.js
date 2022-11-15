import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import Card from '../components/card'
import { BASE_URL } from '../config';

const {width, height} = Dimensions.get('window')

export default function Home({ navigation, props}) {
      
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)

    // const loadData = () => {
    //     fetch(`${BASE_URL}/userlist`, {
    //         method:"GET"
    //     })

    //     .then(resp => resp.json())
    //     .then(data => {
    //         setData(data)
    //         setLoading(false)
    //     })
    //     .catch(error => Alert.alert("error"))
    // }

    // useEffect(() => {
    //     loadData();
    // }, [])

    const [usersData,setUsersData]=useState([])
    const [fetchedState,setFetchedState]=useState(null);

    const getData=async()=>{
        try{
          const response=await fetch(`${BASE_URL}/userlist`);
          const data=await response.json();
          setUsersData(data)
        }
        catch(error){
          console.log(error)
        }
        finally{
          setFetchedState(null);
        }
      }
    
    useEffect(() => {
        setFetchedState('loading')
        setTimeout(()=>getData(),3000);
      },[])
    
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                   <View style={styles.grt}>
                    <Text style={styles.greeting}>Welcome back </Text>
                    <Text style={styles.name}>..name.. </Text>
                   </View>
                    <TouchableOpacity style={styles.prfBtn}>
                    <Image
                            style={styles.profileToggle}
                            source={
                                require('../../assets/images/nav.png')
                            }
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchContainer}>
                <Image
                    style={styles.searchIcon}
                    source={ require('../../assets/images/search.png')}
                />
                    <TextInput style={styles.searchBar}
                               placeholder= "Search..."
                               icon=""
                    />
                </View>
                <View style={styles.feedContainer}>
                    {/* cards go here */}
                    <ScrollView style={styles.scrollView}>
                    {
                        fetchedState ? <Text style={styles.loadingtext}>Loading Data...</Text> :
                        usersData.map(_user=><Text style={styles.text} key={_user.id}>{_user.name}</Text>)
                    }
                    <Card/>
                        {/* <View style={styles.card}>
                         <Text>caregiver name.</Text>
                        </View>
                        <View style={styles.card}>
                         <Text>caregiver name.</Text>
                        </View>
                        <View style={styles.card}>
                         <Text>caregiver name.</Text>
                        </View>
                        <View style={styles.card}>
                         <Text>caregiver name.</Text>
                        </View>
                        <View style={styles.card}>
                         <Text>caregiver name.</Text>
                        </View>
                        <View style={styles.card}>
                         <Text>caregiver name.</Text>
                        </View> */}
                    </ScrollView>
                </View>
            </View>
        )}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf7f8",
        // fontFamily: Poppins,
    },
    titleContainer: {
        margin: 15,
        height: 120,
        flexDirection: 'row',
        width: width,
    },
    prfBtn: {
        marginTop: 40,
    },
    profileToggle: {
        height: 25,
        width: 25,
        position: 'absolute',
    },
    grt: {
        marginRight: 200,
        marginTop: 40,
        flexDirection: 'column',
    },
    greeting: {
        fontSize: 20,
        fontStyle: 'bold',
    },
    name: {
        fontSize: 30,
        fontStyle: 'bold',
    },
    searchContainer: {
        margin: 20,
        flexDirection: 'row',  
        backgroundColor: '#ffcccc',
        borderRadius: 15,
        opacity: .8,
    },
    searchBar: {
        padding: 10,
        height: 40, 
        width: 250,
        fontSize: 20,
    },
    searchIcon: {
        height: 20,
        width: 20,
        margin: 10,
    },//fix
    feedContainer: {
        flex: 1,
        backgroundColor: '#bfd3d5',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        // marginTop: 30,
        
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 120,
        width: 350,
        marginTop: 15,
        borderRadius: 15,
    },
    cardInfo: {
        height: 80,
        margin: 15,
    },
    profile: {
        height: 90,
        width: 90,
        borderRadius: 15,
        margin: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    loci: {
        flexDirection: 'row',
    },
    loc: {
        height: 10,
        width: 10,
        margin: 3,
        color: 'black',
    },
    location: {
        fontSize: 15,
        fontWeight: 'regular',
        marginBottom: 2,
    },
    rating: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlign: 'right'
    },
    rate: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 90,
       
    },
    star: {
        height: 10,
        width: 10,
        margin: 3,
    },
    rt: {
        marginTop: 20,
        flexDirection: 'row',
    }
});