// import React from 'react';
// import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
// import CustomButton from '../Component/CustomButton';
// import CustomInput from '../Component/CustomInput';
// import { useNavigation } from '@react-navigation/native';
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// // type RootStackParamList = {
// //   LoginScreen: undefined;
// //   RegisterScreen: undefined;
// // };

// // const { width, height } = Dimensions.get('window');

// const LoginScreen: React.FC = () => {
//     // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//     return (
//         // <View style={styles.rootContainer}>
//         //     <View style={styles.headerContainer}>
//         //         <Text style={styles.titleText}>Login Here</Text>
//         //         <Text style={styles.subtitleText}>
//         //             Welcome back you've{'\n'}been missed!
//         //         </Text>
//         //     </View>
//         //     <View>
//         //         <CustomInput
//         //             placeholder="Email"

//         //         />
//         //         <CustomInput
//         //             secureTextEntry={true}
//         //             placeholder="Password"

//         //         />
//         //         <Text style={{
//         //             color: "#1F41BB",
//         //             alignSelf: "flex-end",
//         //             fontSize: 14,
//         //             fontFamily: "Poppin",
//         //             fontWeight: "semibold"
//         //         }}>Forget your Password ?</Text>
//         //         <View style={styles.buttonContainer}>
//         //             <CustomButton
//         //                 text="Login"
//         //                 isActive={true}
//         //                 onPress={() => {
//         //                     console
//         //                         .log('Login button pressed');
//         //                 }}
//         //             />
//         //         </View>
//         //         <Text style={{ color: "#494949", fontSize: 14, fontFamily: "Poppoins" }}>Create a new account</Text>
//         //     </View>
//         // </View>
//         <View style={styles.rootContainer}>
//     <View style={styles.headerContainer}>
//         <Text style={styles.titleText}>Login Here</Text>
//         <Text style={styles.subtitleText}>
//             Welcome back you've{'\n'}been missed!
//         </Text>
//     </View>
//     <View style={{flexDirection:"column", gap: 18}}>
//         <CustomInput
//             placeholder="Email"
//         />
//         <View style={{gap:1}}>
//         <CustomInput
//             secureTextEntry={true}
//             placeholder="Password"
//         />
//         <Text style={styles.forgotPasswordText}>
//             Forget your Password ?
//         </Text>
//         </View>
//         <View style={styles.buttonContainer}>
//             <CustomButton
//                 text="Sign In"
//                 isActive={true}
//                 style={styles.signInButton}
//                 onPress={()=>{Alert.alert("Login button pressed")}}
//             />
//         </View>
//         <Text style={styles.createAccountText}>
//             Create a new account
//         </Text>
//     </View>
// </View>
//     );
// };

// export default LoginScreen;

// // const styles = StyleSheet.create({
// //     rootContainer: {
// //         flex: 1,
// //         backgroundColor: '#ffffff',
// //         borderRadius: 50,
// //         width: '100%',
// //         paddingHorizontal: 20,
// //     },
// //     headerContainer: {
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         marginTop: 50,
// //         gap: 26,
// //     },
// //     titleText: {
// //         fontSize: 30,
// //         color: '#1F41BB',
// //         fontFamily: 'Poppins',
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //     },
// //     subtitleText: {
// //         fontSize: 20,
// //         color: '#000000',
// //         fontFamily: 'Poppins',
// //         fontWeight: '600',
// //         textAlign: 'center',
// //         marginTop: 10,
// //     },
// //     buttonContainer: {
// //         width: '100%',
// //         marginTop: 20,
// //         alignItems: 'center'
// //     }
// // });


// const styles = StyleSheet.create({
//     rootContainer: {
//         flex: 1,
//         backgroundColor: '#ffffff',
//         borderRadius: 50,
//         width: '100%',
//         paddingHorizontal: 20,
//         paddingTop: 40
//     },
//     headerContainer: {
//         flexDirection: 'column',
//         marginTop: 50,
//         marginBottom: 30,
//         gap: 26,
//     },
//     titleText: {
//         fontSize: 30,
//         color: '#1F41BB',
//         fontFamily: 'Poppins',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     subtitleText: {
//         fontSize: 20,
//         color: '#000000',
//         fontFamily: 'Poppins',
//         fontWeight: '600',
//         textAlign: 'center',
//         marginTop: 10,
//     },
//        buttonContainer: {
//         width: '100%',
//         paddingHorizontal: 20, 
//         marginTop: 30,
//         marginBottom: 20,
//         alignItems: 'center'
//     },
//     signInButton: {
//         width: '100%',
//         height: 50
//     },
//     forgotPasswordText: {
//         color: "#1F41BB",
//         alignSelf: "flex-end",
//         fontSize: 14,
//         fontFamily: "Poppins",
//         fontWeight: "600",
//         marginTop: 10,
//         marginBottom: 0
//     },
//     createAccountText: {
//         color: "#494949",
//         fontSize: 14,
//         fontFamily: "Poppins",
//         textAlign: 'center',
       
//     }
// });


import React from 'react';
import { View, StyleSheet, Text, Alert, Dimensions, ScrollView } from 'react-native';
import CustomButton from '../Component/CustomButton';
import CustomInput from '../Component/CustomInput';

const { width, height } = Dimensions.get('window');

const LoginScreen: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.rootContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>Login Here</Text>
                    <Text style={styles.subtitleText}>
                        Welcome back you've{'\n'}been missed!
                    </Text>
                </View>
                <View style={styles.inputSection}>
                    <CustomInput placeholder="Email" />
                    <View style={styles.passwordSection}>
                        <CustomInput secureTextEntry={true} placeholder="Password" />
                        <Text style={styles.forgotPasswordText}>
                            Forget your Password ?
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            text="Sign In"
                            isActive={true}
                            style={styles.signInButton}
                            onPress={() => { Alert.alert("Login button pressed") }}
                        />
                    </View>
                    <Text style={styles.createAccountText}>
                        Create a new account
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: width * 0.06,
        paddingTop: height * 0.08,
        paddingBottom: height * 0.04,
        minHeight: height,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: height * 0.04,
    },
    titleText: {
        fontSize: width * 0.08,
        color: '#1F41BB',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: width * 0.045,
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 22,
    },
    inputSection: {
        gap: 18,
    },
    passwordSection: {
        gap: 4,
    },
    forgotPasswordText: {
        color: "#1F41BB",
        alignSelf: "flex-end",
        fontSize: 14,
        fontFamily: "Poppins",
        fontWeight: "600",
        marginTop: 4,
        marginBottom: 0
    },
    buttonContainer: {
        width: '100%',
        marginTop: 24,
        marginBottom: 10,
    },
    signInButton: {
        width: '100%',
        height: 50
    },
    createAccountText: {
        color: "#494949",
        fontSize: 14,
        fontFamily: "Poppins",
        textAlign: 'center',
        marginTop: 16
    }
});