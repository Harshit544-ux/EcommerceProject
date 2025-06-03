import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { cardData } from "../MockData/CardData";
import { FlashList } from "@shopify/flash-list";
import ProductCard from "../Component/ProductCard";
import CustomSnackbar from "../Component/CustomSnackbar";
const CARD_SPACING = 16;
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - CARD_SPACING * 3) / 2;

const LotionScreen = () => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const handleAddToCart = () => {
        setSnackbarVisible(true);
        setTimeout(() => {
            setSnackbarVisible(false);
        }, 2000);
    };
    return <>
        <View style={{ flex: 1 }}>
            <FlashList
                data={cardData}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                estimatedItemSize={200}
                renderItem={({ item }) => (
                    <View style={{ width: CARD_WIDTH, marginBottom: CARD_SPACING, marginLeft: 10 }}>
                        <ProductCard
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            discount={item.discount}
                            onAddToCart={handleAddToCart}


                        />
                    </View>

                )}
                contentContainerStyle={{
                    paddingHorizontal: CARD_SPACING,
                    paddingTop: 10,
                }}
            />
            <CustomSnackbar
                visible={snackbarVisible}
                message="Item added to cart"
                onDismiss={() => setSnackbarVisible(false)}
            />

        </View>
    </>
}

export default LotionScreen;