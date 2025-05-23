import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import AccountItem from '../Component/AccountItem';

const AccountScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            {/* Account Icon */}
            <View style={styles.accountHeader}>
                {/* Icon */}
                <View style={styles.iconContainer}>
                    <UserIcon name="user" size={20} color="#1F41BB" />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.accountUserInformation}>
                        <Text style={styles.nametext}>Harshit Srivastav</Text>
                        <Text style={styles.text}>+91825353536</Text>
                        <Text style={styles.text}>harshit@example.com</Text>
                    </View>
                </View>
                {/* Edit */}
                <TouchableOpacity>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>

            </View>

            <View>
                <AccountItem />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginHorizontal: 5 }}>
                <Text style={styles.term}>Term & Conditions</Text>
                <Text style={{ color: "#888888" }}>v7.8.1</Text>
            </View>

            <Text style={{ color: "red", fontWeight: "600", marginLeft: 20, marginTop: 5 }}>Logout</Text>

        </SafeAreaView>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    accountHeader: {
        flexDirection: 'row',
        backgroundColor: '#b3cee5',
        width: '100%',
        height: 120,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        // paddingHorizontal: 20,
        paddingHorizontal: 5,
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 12,
    },
    accountUserInformation: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        fontFamily: 'sans-serif',
        color: 'black',
        // marginVertical: 2,
    },
    nametext: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: 'black',
        marginBottom: 4,
        // marginVertical: 2,
    },
    editText: {
        textDecorationLine: 'underline',
        color: '#1F41BB',
        fontSize: 16,
        padding: 5,
        marginRight: 1,
        marginBottom: 45,
        fontFamily: "sans-serif",
    },
    term: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#1F41BB',
    }
});