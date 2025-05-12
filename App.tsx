import React from 'react';
import CardScreen from './Component/CardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardDetail from './Component/CardDetail';
import Flexbox from './Css/flexbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeScreen from './Screen/WelcomeScreen';
import { StyleSheet } from 'react-native';

type RootStackParamList = {
  CardScreen: undefined;
  CardDetail: { card: { id: number; image: string; description: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    // Handles navigation between different screens in the application
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="CardScreen" component={CardScreen} />
    //     <Stack.Screen name="CardDetail" component={CardDetail} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
      {/* <SafeAreaView style={{flex:1}}>
        <Flexbox />
      </SafeAreaView> */}
     <SafeAreaView style={{flex:1}}>
      <WelcomeScreen/>
      </SafeAreaView>
  

    </>

  );
};

export default App;







