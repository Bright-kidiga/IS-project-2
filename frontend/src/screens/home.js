import React, { Component, useState, useEffect,useContext} from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, FlatList } from 'react-native';
import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';

const {width, height} = Dimensions.get('window')


export default function Home ({ navigation, props}) {
    const {getUser} = useContext(AuthContext);
    const [usersData,setUsersData]=useState([])
    const [fetchedState,setFetchedState]=useState(null);
    const [appData,setAppData]=useState([])
    const [user,setUser]=useState([])
    const [fetchState,setFetchState]=useState(null);

    const getCaregivers=async()=>{
        try{
          const response=await fetch(`${BASE_URL}/caregiverlist`);
          const data=await response.json();
       
          return data
        }
        catch(error){
          console.log(error)
        }
        finally{
          setFetchedState(null);
        }
      }
    
    // useEffect(() => {
    //     setTimeout(()=>getCaregivers(),3000);
    //   },[])
    
      const getCaregiverData=async()=>{
        try{
          const response=await fetch(`${BASE_URL}/applications`);
          const data=await response.json();
          
          return data
        }
        catch(error){
          console.log(error)
        }
        finally{
          setFetchedState(null);
        }
      }
    const getCaregiverwithData = async() => {
        try {
          const caregivers = await getCaregivers();
          const caregiverDatas = await getCaregiverData();

          return caregivers.map((Caregiver) => {
            const caregiverData = caregiverDatas.find(({cgiver}) => cgiver === Caregiver.id)
            console.log(caregiverData)
            return {...caregiverData, ...Caregiver}

          })
      }
      catch(error){

      }
    }
    // getCaregiverData().then((value) => {
    //     setUsersData(value)
    // })
    // getUser().then((value) => {
    //     setUser(value);
    //   })
    useEffect(() => {
        setFetchedState('loading')
        getUser().then((value) => {
            setUser(value)
        })
      },[])
    useEffect(() => {
        setFetchedState('loading')
        getCaregiverwithData().then((value) => {
            setUsersData(value)
        })
      },[])
      useEffect(() => {
          setFetchState('loading')
          setTimeout(()=>getUser(),3000);
        },[])

      
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                   <View style={styles.grt}>
                    <Text style={styles.greeting}>Welcome back </Text>
                    {/* {
                        fetchState ? <Text style={styles.name}>Loading Data...</Text> : */}
                        <Text style={styles.name}>{user.name}</Text>
                   </View>
                   <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <View style={styles.prfBtn}>
                    <Image
                            style={styles.profileToggle}
                            source={
                                require('../../assets/images/nav.png')
                            }
                        />
                    </View>
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
                 <View style={styles.categoriesContainer}>
                   <TouchableOpacity>
                    <View style={styles.category}>
                        <Text>All</Text>
                    </View>
                   </TouchableOpacity>
                   <TouchableOpacity>
                    <View style={styles.category}>
                        <Text>Nurse</Text>
                    </View>
                   </TouchableOpacity>
                   <TouchableOpacity>
                    <View style={styles.category}>
                        <Text>Babysitter</Text>
                    </View>
                   </TouchableOpacity>
                   <TouchableOpacity>
                    <View style={styles.category}>
                        <Text>Petcare</Text>
                    </View>
                   </TouchableOpacity>
                 </View>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={usersData} 
                        renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate("CaregiverProfile", {profileId: item.id})}>
                             
                                <Image
                                    style={styles.profile}
                                    source={{
                                    uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                                    }}
                                />
                                <View style={styles.cardInfo}>
                                    <Text style= { styles.name}>{item.name}</Text>
                                    <View  style={styles.loci}>
                                    <Image
                                            style={styles.loc}
                                            source={
                                                require('../../assets/images/placeholder.png')
                                            }
                                        />
                                    <Text style= { styles.location}>{item.location}</Text>
                                    </View>
                                <View style={styles.rt}> 
                                    <Image
                                        style={styles.star}
                                        source={
                                            require('../../assets/images/star.png')
                                        }
                                    />  
                                    <Text style= { styles.rating}>{item.id}</Text>
                                    <Text style= { styles.rate}>Ksh 20/Hr</Text>
                                </View>
                                </View>
                                
                            </TouchableOpacity> 
                        )}
                        
                    />
                </View>
            </View>
        )}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf7f8",
        height:height,
        width: width
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
    },
    categoriesContainer: {
        flexDirection: 'row',
    },
    category: {
        margin: 8,
        borderRadius: 15,
        backgroundColor: '#fff',
        width: 70,
        alignItems: "center",
    }
});