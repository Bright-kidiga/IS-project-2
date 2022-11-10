import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Onboarding from '../screens/Onboarding';
import GetStarted from '../screens/GetStarted';
import SignupCare from '../screens/signupcare';
import homeCaregiver from '../screens/homeCaregiver';
import Home from '../screens/home';
import caregiverProfile from '../screens/CaregiverProfile';
import application from '../screens/application';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

export default function App (){
  const {} = useContext(AuthContext);

  const Navigator = () => {
    const isLoggedIn = true;

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
         {/* <Stack.Screen
          name= "home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name= "homeCaregiver"
          component={homeCaregiver}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name= "CaregiverProfile"
          component={caregiverProfile}
          // options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name= "Caregiver Application"
          component={application}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    )
  }
  return(
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}