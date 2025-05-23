
import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import CustomInput from "../Component/CustomInput";
import CustomButton from "../Component/CustomButton";




const { width, height } = Dimensions.get('window');

// Define the Props interface
interface Props {
    navigation: {
        navigate: (screen: string) => void;
    };
}

const RegisterScreen: React.FC<Props> = ({navigation}) => {
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
                                navigation.navigate('CardScreen');
                            }}
                        />
                    </View>
                    {/* <Text style={styles.loginText}>Already have an account</Text> */}
                </View>
                {/* <View style={styles.dividerContainer}>
                    <Text style={styles.dividerText}>
                        Or continue with
                    </Text>
                </View> */}
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