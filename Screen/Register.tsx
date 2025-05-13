// // import React from "react";
// // import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
// // import CustomInput from "../Component/CustomInput";
// // import CustomButton from "../Component/CustomButton";
// // const RegisterScreen = () => {
// //     return (
// //         <>
// //             <View style={styles.rootContainer}>
// //                 <View style={styles.headerContainer}>
// //                     <Text style={styles.titleText}>Create Account</Text>
// //                     <Text style={styles.subtitleText}>Create an account so you can explore all{'\n'} the existing jobs   </Text>
// //                 </View>

// //                 <View style={styles.inputContainer}>
// //                   <CustomInput
// //                     placeholder="Email"/>
// //                 <CustomInput
// //                     secureTextEntry={true}
// //                     placeholder="Password"/>
// //                 <CustomInput
// //                     secureTextEntry={true}
// //                     placeholder="Confirm Password"/>
// //                   <CustomButton
// //                     text="Sign Up"
// //                     isActive={true}
// //                     onPress={() => {
// //                         console.log('Register button pressed');
// //                     }}
// //                     />
// //                 <Text style={{ color: "#494949", fontSize: 14, fontFamily: "Poppins",textAlign:"center" }}>Already have an account</Text>

// //                 </View>

// //                 <View>
// //                     <Text style={{color:"#1F41BB",fontSize:14,fontWeight:"semibold",textAlign:"center"}}>
// //                         Or continue with
// //                     </Text>

// //                 </View>

// //             </View>



// //         </>
// //     );
// // }

// // export default RegisterScreen;

// // const styles = StyleSheet.create({

// //     rootContainer: {
// //         width: 420,
// //         height: 90,
// //         borderRadius: 50,
// //         backgroundColor: "#ffffff",
// //         flex: 1,
// //     },
// //     headerContainer: {
// //         justifyContent: "center",
// //         width: 326,
// //         height: 90,
// //     },
// //     titleText: {
// //         color: "#1F41BB",
// //         fontFamily: "Poppins",
// //         fontWeight: "semibold",
// //         fontSize: 30,
// //     },
// //     subtitleText: {
// //         fontFamily: "Poppins",
// //         fontWeight: "medium",
// //         fontSize: 14,
// //         color: "#000000",
// //     },
// //      inputContainer: {
// //         justifyContent:"space-evenly"
// //      }


// // })


// import React from "react";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import CustomInput from "../Component/CustomInput";
// import CustomButton from "../Component/CustomButton";

// const RegisterScreen = () => {
//     return (
//         <View style={styles.rootContainer}>
//             <View style={styles.headerContainer}>
//                 <Text style={styles.titleText}>Create Account</Text>
//                 <Text style={styles.subtitleText}>
//                     Create an account so you can explore all{'\n'}the existing jobs
//                 </Text>
//             </View>

//             <View style={styles.inputContainer}>
//                 <CustomInput placeholder="Email" />
//                 <CustomInput
//                     secureTextEntry={true}
//                     placeholder="Password"
//                 />
//                 <CustomInput
//                     secureTextEntry={true}
//                     placeholder="Confirm Password"
//                 />
//                 <View style={styles.buttonContainer}>
//                     <CustomButton
//                         text="Sign Up"
//                         isActive={true}
//                         style={styles.signUpButton}
//                         onPress={() => {
//                             console.log('Register button pressed');
//                         }}
//                     />
//                 </View>
//                 <Text style={styles.loginText}>Already have an account</Text>
//             </View>

//             <View style={styles.dividerContainer}>
//                 <Text style={styles.dividerText}>
//                     Or continue with
//                 </Text>
//             </View>
//         </View>
//     );
// }

// export default RegisterScreen;

// const styles = StyleSheet.create({
//     rootContainer: {
//         flex: 1,
//         backgroundColor: "#ffffff",
//         paddingHorizontal: 20,
//         paddingTop: 40
//     },
//     headerContainer: {
//         marginTop: 50,
//         marginBottom: 30,
//         gap: 16
//     },
//     titleText: {
//         color: "#1F41BB",
//         fontFamily: "Poppins",
//         fontWeight: "600",
//         fontSize: 30,
//         textAlign: 'center'
//     },
//     subtitleText: {
//         fontFamily: "Poppins",
//         fontWeight: "500",
//         fontSize: 14,
//         color: "#000000",
//         textAlign: 'center',
//         lineHeight: 20
//     },
//     inputContainer: {
//         gap: 16,
//         marginTop: 20
//     },
//     buttonContainer: {
//         width: '100%',
//         marginTop: 20
//     },
//     signUpButton: {
//         width: '100%',
//         height: 50
//     },
//     loginText: {
//         color: "#494949", 
//         fontSize: 14, 
//         fontFamily: "Poppins",
//         textAlign: "center",
//         marginTop: 16
//     },
//     dividerContainer: {
//         marginTop: 30,
//         alignItems: 'center'
//     },
//     dividerText: {
//         color: "#1F41BB",
//         fontSize: 14,
//         fontFamily: "Poppins",
//         fontWeight: "600"
//     }
// });


import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import CustomInput from "../Component/CustomInput";
import CustomButton from "../Component/CustomButton";

const { width, height } = Dimensions.get('window');

const RegisterScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.rootContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>Create Account</Text>
                    <Text style={styles.subtitleText}>
                        Create an account so you can explore all{'\n'}the existing jobs
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <CustomInput placeholder="Email" />
                    <CustomInput secureTextEntry={true} placeholder="Password" />
                    <CustomInput secureTextEntry={true} placeholder="Confirm Password" />
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            text="Sign Up"
                            isActive={true}
                            style={styles.signUpButton}
                            onPress={() => {
                                console.log('Register button pressed');
                            }}
                        />
                    </View>
                    <Text style={styles.loginText}>Already have an account</Text>
                </View>
                <View style={styles.dividerContainer}>
                    <Text style={styles.dividerText}>
                        Or continue with
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    rootContainer: {
        flex: 1,
        backgroundColor: "#fff",
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
        color: "#1F41BB",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: width * 0.08,
        textAlign: 'center'
    },
    subtitleText: {
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: width * 0.045,
        color: "#000",
        textAlign: 'center',
        lineHeight: 20,
        marginTop: 8,
    },
    inputContainer: {
        gap: 12,
        marginTop: 10
    },
    buttonContainer: {
        width: '100%',
        marginTop: 55
    },
    signUpButton: {
        width: '100%',
        height: 50
    },
    loginText: {
        color: "#494949",
        fontSize: 14,
        fontFamily: "Poppins",
        textAlign: "center",
        marginTop: 16
    },
    dividerContainer: {
        marginTop: 30,
        alignItems: 'center'
    },
    dividerText: {
        color: "#1F41BB",
        fontSize: 14,
        fontFamily: "Poppins",
        fontWeight: "600"
    }
});