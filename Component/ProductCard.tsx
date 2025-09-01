import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, Platform } from "react-native";
import CustomButton from "./CustomButton";
import { addToCart, decreaseQuantity, increaseQuantity } from "../src/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from "react-native-safe-area-context";

type ProductCardProps = {
    id: number
    image: string;
    title: string;
    price: string;
    discount: string;
    onAddToCart:()=>void;
}

const ProductCard = ({ id, image, title, price, discount, onAddToCart }: ProductCardProps) => {
  
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items)
    // Find the cart item for this product (assuming title is unique, otherwise use an id prop)
    const item = cartItems.find((cartItem: any) => cartItem.id === id);
    const quantity = item ? item.quantity : 0;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.productContainer}>
                <Image
                    style={styles.productImage}
                    source={{
                        uri: image
                    }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.priceText}>{price}</Text>
                </View>

                {quantity === 0 ? (
                    <CustomButton
                        text="ADD"
                        isActive={true}
                        style={styles.addToCartButton}
                        textStyle={{
                            color: "#3187A2",
                            fontWeight: "bold",
                            fontSize: 16,
                            fontFamily: "Poppins",
                        }}
                        onPress={() => {                          
                            dispatch(addToCart({ id, image, title, price, discount }));
                               onAddToCart();
                        }}
                    />
                ) : (
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#1F41BB",
                        borderRadius: 5,
                        paddingHorizontal: 14,
                    }}>
                        <TouchableOpacity
                            onPress={() => dispatch(decreaseQuantity(item.id))}
                            style={{ padding: 6 }}
                        >
                            <MinusIcon name="minus" size={18} color="white" />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 6, fontSize: 16, color: "white", fontWeight: "bold" }}>{quantity}</Text>
                        <TouchableOpacity
                            onPress={() => dispatch(increaseQuantity(item.id))}
                            style={{ padding: 6 }}
                        >
                            <PlusIcon name="plus" size={18} color="white" />
                        </TouchableOpacity>
                    </View>
                )}
                <View style={styles.offer}>
                    <Text style={styles.offerText}>{discount}</Text>
                    <Text style={styles.offerText}>OFF</Text>
                </View>
            </View>
        </SafeAreaView>

    );
};

export default ProductCard;

const styles = StyleSheet.create({
    productContainer: {
        height: 260,
        width: 160,
        borderRadius: 12,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 15,
        justifyContent: "space-between",
        position: 'relative',
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },

    productImage: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    },

    textContainer: {
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: 4,
    },

    titleText: {
        fontSize: 14,
        color: "#333",
        fontWeight: "500",
        marginBottom: 4,
    },

    priceText: {
        fontSize: 16,
        color: "black",
        fontWeight: "500"
    },

    addToCartButton: {
        backgroundColor: "#DEEFF5",
        borderColor: "#3187A2",
        borderWidth: 1,
        width: "100%",
        paddingVertical: 6,
        borderRadius: 8,
        alignItems: "center",
    },
    offer: {
        margin: 2,
        height: 55,
        width: 50,
        backgroundColor: "#00aa00",
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: -2,
        left: 6
    },
    offerText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "sans-serif"
    }
});
