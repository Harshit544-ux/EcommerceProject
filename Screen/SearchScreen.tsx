import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import OfferIcon from 'react-native-vector-icons/MaterialIcons';
import Searchbar from "../Component/Searchbar";
import { useDispatch } from "react-redux";
import { cardData } from "../MockData/CardData";
import CustomButton from "../Component/CustomButton";
import { addToCart, decreaseQuantity, increaseQuantity } from "../src/slices/cartSlice";
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import ArrowUpLeftIcon from 'react-native-vector-icons/Feather';
import CustomSnackbar from "../Component/CustomSnackbar";

type RootStackParamList = {
    CardDetailScreen: { cardData: any };
    // add other screens if needed
};

type SearchScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CardDetailScreen'>;
};

type CartItem = {
    id: string | number;
    quantity: number;
    // Add other properties as needed, e.g. title, price, image, etc.
};

const SearchScreen = ({ navigation }: SearchScreenProps) => {
    const [query, setQuery] = useState<string>("");
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);
    //Filter by name
    const filterData = cardData.filter(
        item =>
            item.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>

                {/* offer header */}
                <View style={styles.offerContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <OfferIcon name="local-offer" size={20} color="#fff" />
                        <Text style={{ fontFamily: "sans-serif", fontSize: 15, color: "#fff" }}>FLAT 25% off on first order</Text>
                    </View>
                    <View>
                        <ArrowRightIcon name="arrowright" size={20} color="#fff" />
                    </View>

                </View>

                <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
                    {/* Search Bar */}
                    <View style={{ padding: 10 }}>
                        <Searchbar
                            placeholder="Search for medicines."
                            editable={true}
                            value={query}
                            onChangeText={(text) => {
                                setQuery(text);
                                setShowSuggestions(text.length > 0);
                            }}
                        />
                    </View>

                    {/* Suggestion List */}
                    {showSuggestions && query.trim() !== "" && (
                        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                            {cardData
                                .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
                                .slice(0, 5)
                                .map((item) => (
                                    <TouchableOpacity
                                        key={item.id?.toString()}
                                        onPress={() => {
                                            navigation.navigate("CardDetailScreen", { cardData: item })
                                        }}
                                        style={{
                                            flexDirection: "row",
                                            padding: 12,
                                            borderBottomWidth: 1,
                                            borderColor: "#eee",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                            <SearchIcon name="search" size={16} color="#666" />
                                            <Text style={{ fontSize: 16 }}>{item.title}</Text>
                                        </View>
                                        <ArrowUpLeftIcon name="arrow-up-left" size={18} color="#1F41BB" />
                                    </TouchableOpacity>
                                ))}
                        </View>
                    )}

                    {/* Main Product Results */}
                    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                        {query.trim() === "" ? (
                            <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 60 }}>
                                <SearchIcon name="search" size={60} color="#ccc" style={{ marginBottom: 16 }} />
                                <Text style={{ color: "#888", fontSize: 18 }}>Find the best deals - start typing!</Text>
                            </View>
                        ) : (
                            filterData.length === 0 ? (
                                <Text style={{ textAlign: "center", marginTop: 40, color: "#888" }}>
                                    No products found.
                                </Text>
                            ) : (
                                filterData.map((item) => {
                                    const cartItem: CartItem | undefined = cartItems.find((cartItem: CartItem) => cartItem.id === item.id);
                                    const quantity = cartItem ? cartItem.quantity : 0;

                                    return (
                                        <TouchableOpacity
                                            key={item.id.toString()}
                                            style={styles.resultRow}
                                            onPress={() => navigation.navigate("CardDetailScreen", { cardData: item })}
                                            activeOpacity={0.8}
                                        >
                                            <Image source={{ uri: item.image }} style={styles.resultImage} />
                                            <View style={styles.resultInfo}>
                                                <Text style={styles.resultTitle} numberOfLines={1}>{item.title}</Text>
                                                <Text style={styles.resultPrice}>{item.price}</Text>
                                            </View>

                                            {quantity === 0 ? (
                                                <CustomButton
                                                    text="ADD"
                                                    isActive={true}
                                                    style={styles.addBtn}
                                                    textStyle={styles.addBtnText}
                                                    onPress={() => {
                                                        dispatch(addToCart(item));
                                                        setSnackbarVisible(true);
                                                        setTimeout(
                                                            ()=>{
                                                                setSnackbarVisible(false);
                                                            },2500);                                                        
                                                    }}
                                                />
                                            ) : (
                                                <View style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    backgroundColor: "#1F41BB",
                                                    borderRadius: 5,
                                                    paddingHorizontal: 8,
                                                    alignSelf: "flex-end"
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
                                        </TouchableOpacity>
                                    );
                                })
                            )
                        )}
                    </View>
                </ScrollView>
       {/* Add CustomSnackbar here */}
            <CustomSnackbar 
                visible={snackbarVisible}
                message="Item added to cart!"
                onDismiss={() => setSnackbarVisible(false)}
                duration={2000}
            />
            </SafeAreaView>
        </>
    );
}
export default SearchScreen;

const styles = StyleSheet.create({
    offerContainer: {
        height: 50,
        width: "100%",
        backgroundColor: "#256825",
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    resultRow: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#eee",
        backgroundColor: "#fff",
    },
    resultImage: {
        width: 50,
        height: 70,
        resizeMode: "contain",
        borderRadius: 8,
        marginRight: 12,
        backgroundColor: "#f5f5f5",
    },
    resultInfo: {
        flex: 1,
        justifyContent: "center",
    },
    resultTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    resultPrice: {
        fontSize: 15,
        color: "#1F41BB",
        marginTop: 2,
    },
    addBtn: {
        backgroundColor: "#DEEFF5",
        borderColor: "#3187A2",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 6,
        marginLeft: 10,
        width: 100,
        alignSelf: "flex-end"
    },
    addBtnText: {
        color: "#3187A2",
        fontWeight: "bold",
        fontSize: 15,
    },
})