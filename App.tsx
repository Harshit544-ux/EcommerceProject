import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screen/WelcomeScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/Register';
import CardDetailScreen from './Screen/CardDetailScreen';
import CardList from './Screen/CardScreen';
import { RootStackParamList } from './types/navigation';
import LocationScreen from './Screen/LocationScreen';
import { Provider } from 'react-redux';
import { store } from './src/store';
import CartItemScreen from './Screen/CartItemsScreen';
import { Text } from 'react-native-gesture-handler';
import AccountScreen from './Screen/AccountScreen';
import AccountItem from './Component/AccountItem';


// import RegisterScreen from './Screen/RegisterScreen';

// Define the same type across your app
// export type RootStackParamList = {
//   WelcomeScreen: undefined;
//   LoginScreen: undefined;
//   RegisterScreen: undefined;
// };

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="WelcomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="CardDetailScreen" component={CardDetailScreen}/>
        <Stack.Screen name="CardScreen" component={CardList}/>
        <Stack.Screen name="CartItemsScreen" component={CartItemScreen}/>
        <Stack.Screen name='AccountScreen' component={AccountScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
     
    //  <AccountScreen/>
  
      // <LocationScreen/>
  );
};

export default App;

