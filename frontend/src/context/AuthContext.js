import axios from 'axios';
import React, {createContext, useContext} from 'react';
import { BASE_URL } from '../config';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
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
            console.log("registration successful")
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
            console.log("login successful")
            console.log(userInfo);
        }).catch(e => {
            console.log(`Register Error ${e}`)
        });
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
    
    return(
        <AuthContext.Provider value={{register, login, logout}}>{children}</AuthContext.Provider>
    );

    
}