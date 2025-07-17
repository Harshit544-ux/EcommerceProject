import React, { useEffect, useState } from "react";
import { Dimensions, View, } from "react-native";
import { cardData } from "../MockData/CardData";
import { FlashList } from "@shopify/flash-list";
import ProductCard from "../Component/ProductCard";
import CustomSnackbar from "../Component/CustomSnackbar";
import { useIsFocused } from "@react-navigation/native";
import ProductSkeleton from "../Skeleton/ProductSkeleton";

const CARD_SPACING = 16;
const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - CARD_SPACING * 3) / 2;
const TabletScreen = () => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const isFocused = useIsFocused();

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isFocused) {
            setIsLoading(true);
            timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [isFocused]);


    const handleAddToCart = () => {
        setSnackbarVisible(true);
        setTimeout(() => {
            setSnackbarVisible(false);
        }, 2000);
    };
    if (isLoading) {
        return <ProductSkeleton />;
    }
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

export default TabletScreen;