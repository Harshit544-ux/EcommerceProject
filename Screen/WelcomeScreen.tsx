import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Component/CustomButton';

const WelcomeScreen = () => {
  const [active , setActive]=useState<'Login' | 'Register'>('Login')
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/Work_from_home.png')} style={styles.image} />
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Discover Your</Text>
        <Text style={styles.text}>Dream Job</Text>
        <Text style={styles.smallpara}>Explore all the existing job roles based on your{'\n'}interest and study major</Text>
      </View>
      <View style={styles.buttonGroup}>
      <CustomButton 
        text="Login"
        isActive={active === 'Login'}
        onPress={() => setActive('Login')}
      />
       <CustomButton
        text="Register"
        isActive={active === 'Register'}
        onPress={() => setActive('Register')}
      />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: 420,
    height: 90,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  headerContainer:{
         justifyContent:"center",
         alignItems:"center",
  },
  image: {
    width: 385,
    height: 422,
    resizeMode: 'contain',
    marginVertical:20
  },
  text:{
    color:"#1F41BB",
    fontFamily:"Poppins",
    fontWeight:"semibold",
    fontSize:35,
  },
  smallpara:{
    fontFamily:"Poppins",
    fontWeight:"regular",
    fontSize:14,
    textAlign:"center",
    lineHeight:20,
    marginTop:30,
    color:"#000000"
  },
  buttonGroup:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  }
  


});