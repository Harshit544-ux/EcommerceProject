// import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
// import React, { useState } from 'react';
// import CustomButton from '../Component/CustomButton';

// const WelcomeScreen = () => {
//   const [active , setActive]=useState<'Login' | 'Register'>('Login')
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image source={require('../assets/Work_from_home.png')} style={styles.image} />
//       <View style={styles.headerContainer}>
//         <Text style={styles.text}>Discover Your</Text>
//         <Text style={styles.text}>Dream Job</Text>
//         <Text style={styles.smallpara}>Explore all the existing job roles based on your{'\n'}interest and study major</Text>
//       </View>
//       <View style={styles.buttonGroup}>
//       <CustomButton 
//         text="Login"
//         isActive={active === 'Login'}
//         onPress={() => setActive('Login')}
//       />
//        <CustomButton
//         text="Register"
//         isActive={active === 'Register'}
//         onPress={() => setActive('Register')}
//       />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default WelcomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     width: 420,
//     height: 90,
//     borderRadius: 50,
//     backgroundColor: "#ffffff",
//     flex: 1,
//   },
//   headerContainer:{
//          justifyContent:"center",
//          alignItems:"center",
//   },
//   image: {
//     width: 385,
//     height: 422,
//     resizeMode: 'contain',
//     marginVertical:20
//   },
//   text:{
//     color:"#1F41BB",
//     fontFamily:"Poppins",
//     fontWeight:"semibold",
//     fontSize:35,
//   },
//   smallpara:{
//     fontFamily:"Poppins",
//     fontWeight:"regular",
//     fontSize:14,
//     textAlign:"center",
//     lineHeight:20,
//     marginTop:30,
//     color:"#000000"
//   },
//   buttonGroup:{
//     flexDirection:"row",
//     justifyContent:"center",
//     alignItems:"center",
//     marginTop:20
//   }
  


// });
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type RootStackParamList = {
//   LoginScreen: undefined;
//   RegisterScreen: undefined;
// };
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();  

type RootStackParamList = {
  LoginScreen: undefined;
  Register: undefined;
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
          <Text style={styles.title}>Discover Your</Text>
          <Text style={styles.title}>Dream Job</Text>
          <Text style={styles.subtitle}>
            Explore all the existing job roles based on your{'\n'}
            interest and study major
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
    paddingHorizontal: width * 0.05, // 5% padding on each side
    paddingTop: height * 0.02, // 2% padding on top
    alignItems: 'center',
    marginTop: height * 0.05, // 5% margin on top
  },
  headerContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: height * 0.02,
    gap: height * 0.01, // Space between title and subtitle
  },
  image: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.35, // 35% of screen height
    resizeMode: 'contain',
  },
  title: {
    color: "#1F41BB",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: width * 0.085, // Responsive font size
    lineHeight: width * 0.1, // Responsive line height
  },
  subtitle: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: width * 0.035, // Responsive font size
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
    gap: width * 0.03 // Space between buttons
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