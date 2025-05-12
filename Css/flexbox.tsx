import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Flexbox = () => {
    return (
        <>

            <View style={styles.container}>
                {/* <View style={styles.box}>
                <Text>Box 1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 2</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 3</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 4</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 5</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 6</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 7</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 8</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 9</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 10</Text>
            </View>
            
            <View style={styles.box}>
                <Text>Box 11</Text>
            </View>
            <View style={styles.box}>
                <Text>Box 12</Text>
            </View> */}

                <View style={styles.searchBarContainer}>
                    <TextInput
                        placeholder='Search...'
                        style={styles.searchBarInput}
                    />
                </View>
            </View>

        </>
    )
}

export default Flexbox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },
    searchBarContainer: {
        height: 50,
        width: 300,
        backgroundColor: "#E0E0E0",
        borderRadius: 25,
        paddingHorizontal: 15,
        justifyContent: "center",
    },
    searchBarInput: {
        fontSize: 16,
        color: "#333",
        height: 40,
    }
})