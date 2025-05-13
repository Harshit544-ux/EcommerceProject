// import { StyleSheet, Text, TouchableOpacity } from 'react-native'
// import React from 'react'

// interface CustomButtonProps {
//   text: string;
//   isActive: boolean;
//   onPress: () => void;
// }

// const CustomButton = ({ text, isActive, onPress }: CustomButtonProps) => {
//   return (
//     <TouchableOpacity
//       style={[styles.button, isActive ? styles.active : styles.inactive]}
//       onPress={onPress}
//     >
//       <Text style={isActive ? styles.activeText : styles.inactiveText}>
//         {text}
//       </Text>
//     </TouchableOpacity>
//   )
// }

// export default CustomButton

// const styles = StyleSheet.create({
//   button: {
//     marginTop: 40,
//     paddingVertical: 20,
//     paddingHorizontal: 15,
//     borderColor: '#1F41BB',
//     marginHorizontal: 10,
//     width: 130,
//     height: 60,

//   },
//   active: {
//     backgroundColor: '#1F41BB',
//     borderRadius: 8
//   },
//   inactive: {
//     backgroundColor: '#FFFFFF',
//   },
//   activeText: {
//     color: '#FFFFFF',
//     textAlign: "center",
//     fontFamily: "Poppins",
//     fontWeight: "semibold",
//     fontSize: 15,
//   },
//   inactiveText: {
//     color: '#0A0A0A',
//     textAlign: "center",
//     fontFamily: "Poppins",
//     fontWeight: "semibold",
//     borderRadius: 0,
//     fontSize: 15
//   },

// })


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