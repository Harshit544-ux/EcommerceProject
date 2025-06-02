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
import AccountScreen from './Screen/AccountScreen';
import AccountItem from './Component/AccountItem';
import BottomTabs from './Component/BottomTab';
import SearchScreen from './Screen/SearchScreen';


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
        <Stack.Screen name="BottomTab" component={BottomTabs}/>
        <Stack.Screen name="CardDetailScreen" component={CardDetailScreen}/>
        <Stack.Screen name="CartItemsScreen" component={CartItemScreen}/>
         <Stack.Screen name='AccountScreen' component={AccountScreen}/> 
         <Stack.Screen name='SearchScreen' component={SearchScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};

export default App;



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import WelcomeScreen from './Screen/WelcomeScreen';
// import LoginScreen from './Screen/LoginScreen';
// import RegisterScreen from './Screen/Register';
// import CardDetailScreen from './Screen/CardDetailScreen';
// // import CardList from './Screen/CardScreen';
// import { RootStackParamList } from './types/navigation';
// import LocationScreen from './Screen/LocationScreen';
// import { Provider } from 'react-redux';
// import { store } from './src/store';
// import CartItemScreen from './Screen/CartItemsScreen';
// import AccountScreen from './Screen/AccountScreen';
// import AccountItem from './Component/AccountItem';
// import SearchScreen from './Screen/SearchScreen';

// // import ProductScreen from './Screen/ProductScreen';


// const Stack = createNativeStackNavigator<RootStackParamList>();

// const App = () => {







//   return (
//     // <Provider store={store}>
//     // <NavigationContainer>
//     //   <Stack.Navigator 
//     //     initialRouteName="WelcomeScreen"
//     //     screenOptions={{ headerShown: false }}
//     //   >
//     //     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//     //     <Stack.Screen name="LoginScreen" component={LoginScreen} />
//     //     <Stack.Screen name="Register" component={RegisterScreen}/>
//     //     <Stack.Screen name="CardDetailScreen" component={CardDetailScreen}/>
//     //     <Stack.Screen name="CardScreen" component={CardList}/>
//     //     <Stack.Screen name="CartItemsScreen" component={CartItemScreen}/>
//     //     <Stack.Screen name='AccountScreen' component={AccountScreen}/>
//     //     <Stack.Screen name='SearchScreen' component={SearchScreen}/>
//     //     {/* <Stack.Screen name='LocationScreen' component={LocationScreen}/> */}
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     // </Provider>
 
   
// {/* <ProductScreen/> */}








//       //  <SearchScreen/>




 




//   );
// };

// export default App;

