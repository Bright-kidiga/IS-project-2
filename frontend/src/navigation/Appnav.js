import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Onboarding from '../screens/Onboarding';
import GetStarted from '../screens/GetStarted';
import SignupCare from '../screens/signupcare';
import homeCaregiver from '../screens/homeCaregiver';
import Home from '../screens/home';
import CaregiverProfile from '../screens/CaregiverProfile';
import application from '../screens/Application';
import { AuthProvider, AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

export default function App (){
  const {retrieveToken, getUser} = useContext(AuthContext);
  const [isLoggedIn,setIsLoggedIn] =useState(false) 
  const [isCaregiver,setIsCaregiver] = useState(false)
  const Navigator = () => {
      retrieveToken().then((value) => {

            setIsLoggedIn(!!value);
            console.log(value, isLoggedIn);
      })
      useEffect(() => {
        // setFetchedState('loading')
        getUser().then((value) => {
          setIsCaregiver(value?.is_caregiver)
          console.log(isCaregiver)
          console.log(value)
          console.log(value?.is_caregiver)
        })
      },[])
      
    if (!isLoggedIn){
      return (
        <Stack.Navigator>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              // options={{headerShown: false}}
            />
            <Stack.Screen
              name="signUp"
              component={Signup}
            />
            <Stack.Screen
              name="signUpCare"
              component={SignupCare}
              // options={{headerShown: false}}
            />
            <Stack.Screen
              name="login"
              component={Login}
              // options={{headerShown: false}}
            />
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator>
       {!isCaregiver && (<>
       
         <Stack.Screen
          name= "home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name= "CaregiverProfile"
          component={CaregiverProfile}
          // options={{headerShown: false}}
        />
        </>)}
      {isCaregiver && (<>
        <Stack.Screen
          name= "homeCaregiver"
          component={homeCaregiver}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name= "Caregiver Application"
          component={application}
          // options={{headerShown: false}}
        />
      </>)}
      </Stack.Navigator>
    )
  }
  return(
  <AuthProvider>
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  </AuthProvider>
  )
}