import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

type CustomSnackbarProps = {
    visible: boolean;
    message: string;
    onDismiss: () => void;
    duration?: number;
};

const CustomSnackbar = ({ visible, message, onDismiss, duration = 2000 }: CustomSnackbarProps) => {
    const [fadeAnim] = React.useState(new Animated.Value(0));

    useEffect(() => {
        if (visible) {
            // Fade in
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();

            // Auto hide after duration
            const timer = setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }).start(() => onDismiss());
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [visible, fadeAnim, duration, onDismiss]);

    if (!visible) return null;

    return (
        <Animated.View style={[
            styles.container,
            {
                opacity: fadeAnim,
                transform: [{
                    translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0]
                    })
                }]
            }
        ]}>
            <Text style={styles.text}>{message}</Text>
        </Animated.View>
    );
};

export default CustomSnackbar;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 30,
        left: 20,
        right: 20,
        backgroundColor: "#256825",
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Poppins"
    },
});