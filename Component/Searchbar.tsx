import React from "react";
import { View,TextInput, StyleSheet } from "react-native";
import SearchIcon from 'react-native-vector-icons/FontAwesome';

type SearchbarProps = {
    placeholder?: string;
     editable?: boolean;
    onChangeText?: (text: string) => void;
    value?: string;
};

const Searchbar = ({ placeholder ,editable,onChangeText,value}: SearchbarProps) => {
    return (
        <>
           <View style={
                styles.searchBar
            }>
                <SearchIcon name="search" size={18} color="#3187A2" style={{  marginLeft: 5,marginBottom:2}} />
                <TextInput
                    placeholder={placeholder}
                    style={styles.searchInput}
                    editable={editable}
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid="transparent"
                />
            </View>

        </>
    );
}

export default Searchbar;

const styles = StyleSheet.create({ 
    searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "90%",
    alignSelf: "center",
    marginTop: 12, 
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 10, 
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 10,
    borderWidth: 0,
    overflow: 'hidden', 
    },
    searchInput: {
        flex: 1,
        height: 50,
        fontSize: 15,
        paddingLeft: 10,
    },
});