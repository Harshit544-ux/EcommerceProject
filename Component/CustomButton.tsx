import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle ,TextStyle} from 'react-native';

interface CustomButtonProps {
    text: string;
    isActive: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text,style, onPress ,textStyle}) => {
    return (
        <TouchableOpacity 
            style={[styles.button, style]} 
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[styles.buttonText,textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1F41BB',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'Poppins',
        fontWeight: '600'
    }
});

export default CustomButton;