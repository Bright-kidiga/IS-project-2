import axios from 'axios';
import React, {createContext, useState} from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';
import isLoggedIn from '../navigation/Appnav'

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null);
    // const [isLoggedIn, setIsLoggedIn] = useState(null);
    const register = (name, email, password) => {
        console.log({name, email, password});
        fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name, email, password
            }),
            mode: 'cors'
        }).then(res => {
            let userInfo = res.data;
            console.log("Client registration successful")
            console.log(userInfo);
        }).catch(e => {
            console.log(`Register Error ${e}`)
        });
    }
    const apply = (cgiver, description, age, phone, is_nurse, is_petcarer, is_babysitter) => {
        console.log({cgiver, description, age, phone, is_nurse, is_petcarer, is_babysitter});
        fetch(`${BASE_URL}/apply`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                cgiver, description, age, phone, is_nurse, is_petcarer, is_babysitter
            }),
            mode: 'cors'
        }).then(res => {
            let userInfo = res.data;
            console.log("Caregiver Application successful")
            console.log(userInfo);
        }).catch(e => {
            console.log(`Application Error ${e}`)
        });
    }
    const registerCaregiver = (name, email, password, is_caregiver) => {
        console.log({name, email, password, is_caregiver});
        fetch(`${BASE_URL}/registerCaregiver`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name, email, password, is_caregiver
            }),
            mode: 'cors'
        }).then(res => {
            let userInfo = res.data;
            console.log("caregiver registration successful")
            console.log(userInfo);

        }).catch(e => {
            console.log(`Register Error ${e}`)
        });
    }
    const login = (email, password) => {
        console.log({email, password});
        fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                email, password
            }),
            mode: 'cors'
        }).then(res => {
            let userInfo = res.data;
            // console.log("login successful")
            // console.log(res.json());
            // setIsLoggedIn(True)
            return res.json()
        }).then(res => {
            console.log(res)
            storeLogin(res)
        }).catch(e => {
            console.log(`Register Error ${e}`)
        });
    }

    const storeLogin = async (token) => {
        try {
          await AsyncStorage.setItem(
            '@loginKey',
            
            JSON.stringify(token)
          );
        } catch (error) {
          // Error saving data
          console.log('error saving data', error);
        }
    }
    //retrieve token
    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('@loginKey');
          if (value !== null) {
            // We have data!!
            console.log('the value is', value);
          }
          } catch (error) {
            // Error retrieving data
            console.log('Error retrieving data', error);
          }
    }
    const logout = (email, password) => {
        console.log({email, password});
        fetch(`${BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                email, password
            }),
            mode: 'cors'
        }).then(res => {
            let userInfo = res.data;
            console.log("logout successful")
            console.log(userInfo);
        }).catch(e => {
            console.log(`Register Error ${e}`)
        });
    }
    const getUser=async()=>{
        try{
          const response=await fetch(`${BASE_URL}/userlist`);
          const data=await response.json();
          setUserData(data)
        }
        catch(error){
          console.log(error)
        }
        finally{
          setFetchState(null);
        }
    }

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
    
    
    return(
        <AuthContext.Provider value={{register, getUser, getData,registerCaregiver, login, logout, apply, retrieveData}}>{children}</AuthContext.Provider>
    );

    
}