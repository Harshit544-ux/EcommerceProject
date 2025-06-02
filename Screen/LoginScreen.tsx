import React from 'react';
import { View, StyleSheet, Text, Alert, Dimensions, ScrollView } from 'react-native';
import CustomButton from '../Component/CustomButton';
import CustomInput from '../Component/CustomInput';


import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const { width, height } = Dimensions.get('window');

type Props = {
    navigation: NativeStackNavigationProp<any>;
};

const LoginScreen: React.FC<Props> = ({navigation}) => {
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
                            onPress={() => { navigation.navigate("BottomTab") }}
                        />
                    </View>
                    <Text style={styles.createAccountText}>
                        {/* Create a new account */}
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