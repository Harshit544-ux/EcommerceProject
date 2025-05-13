import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screen/WelcomeScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/Register';
// import RegisterScreen from './Screen/RegisterScreen';

// Define the same type across your app
// export type RootStackParamList = {
//   WelcomeScreen: undefined;
//   LoginScreen: undefined;
//   RegisterScreen: undefined;
// };

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="WelcomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>

        {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;








