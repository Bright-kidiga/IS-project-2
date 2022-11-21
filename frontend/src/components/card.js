import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import CaregiverProfile from '../screens/CaregiverProfile';

export default class Card extends React.Component  {
    render() { 
        return (
            <TouchableOpacity onPress={() => navigation.navigate("CaregiverProfile")}>
            <View style={styles.card}>
            <Image
                style={styles.profile}
                source={{
                uri: 'https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=600',
                }}
            />
            <View style={styles.cardInfo}>
                <Text style= { styles.name}>Padme Amidala</Text>
                <View  style={styles.loci}>
                   <Image
                        style={styles.loc}
                        source={
                            require('../../assets/images/placeholder.png')
                        }
                    />
                  <Text style= { styles.location}>West Madaraka</Text>
                </View>
              <View style={styles.rt}> 
                <Image
                    style={styles.star}
                    source={
                        require('../../assets/images/star.png')
                    }
                />  
                <Text style= { styles.rating}>4.5/5</Text>
                <Text style= { styles.rate}>Ksh 20/Hr</Text>
              </View>
            </View>
            </View>
        </TouchableOpacity> 
        );
      }
    }
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 120,
        width: 350,
        marginTop: 15,
        borderRadius: 15,
        verticalAlign: 'middle',
        
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
        verticalAlign: 'middle',
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
})