import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  LoginScreen: undefined;
  Register: undefined;
  CardScreen: undefined;
};

const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
  const [active, setActive] = useState<'Login' | 'Register'>('Login');
  const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  
  const handleButtonPress = (type: 'Login' | 'Register') => {
    setActive(type);
    if (type === 'Login') {
      navigation.navigate('LoginScreen');
    } else {
      navigation.navigate('Register');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image 
          source={require('../assets/Work_from_home.png')} 
          style={styles.image} 
        />
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Find the Right</Text>
          <Text style={styles.title}>Medicine for You</Text>
          <Text style={styles.subtitle}>
            Browse a wide range of medicines based on your{'\n'}
            health needs and prescriptions
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <CustomButton 
            text="Login"
            isActive={active === 'Login'}
             style={[
              styles.button,
              {
                backgroundColor: active === 'Login' ? '#1F41BB' : '#FFFFFF',
              }
            ]}
            textStyle={{
              color: active === 'Login' ? '#FFFFFF' : '#1F41BB'
            }}
            onPress={() => handleButtonPress('Login')}
          />
          <CustomButton
            text="Register"
            isActive={active === 'Register'}
             style={[
              styles.button,
              {
                backgroundColor: active === 'Register' ? '#1F41BB' : '#FFFFFF',
              }
            ]}
            textStyle={{
              color: active === 'Register' ? '#FFFFFF' : '#1F41BB'
            }}
            onPress={() => handleButtonPress('Register')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",   
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: width * 0.05, 
    paddingTop: height * 0.02, 
    alignItems: 'center',
    marginTop: height * 0.05, 
  },
  headerContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: height * 0.02,
    gap: height * 0.01, 
  },
  image: {
    width: width * 0.9, 
    height: height * 0.35, 
    resizeMode: 'contain',
  },
  title: {
    color: "#1F41BB",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: width * 0.085, 
    lineHeight: width * 0.1, 
  },
  subtitle: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: width * 0.035, 
    textAlign: "center",
    lineHeight: width * 0.05,
    marginTop: height * 0.02,
    color: "#000000"
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.10,
    width: '70%',
    gap: width * 0.03 
  },
   button: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1F41BB'
  }
});