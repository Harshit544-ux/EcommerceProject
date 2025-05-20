import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

const CustomInput: React.FC<{ placeholder: string; secureTextEntry?: boolean }> = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#626262"
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F1F4FF',
    borderWidth: 1,
    borderColor: '#1F41BB',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    fontSize: 16,
    color: '#626262'
  }
});