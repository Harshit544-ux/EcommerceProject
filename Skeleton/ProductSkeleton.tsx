import React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width } = Dimensions.get("window");
const CARD_SPACING = 16;
const CARD_WIDTH = (width - CARD_SPACING * 3) / 2;

const ProductSkeleton = () => {
  const skeletonItems = Array.from({ length: 6 }); // number of skeleton cards

  return (
    <ScrollView style={{ flex: 1, padding: CARD_SPACING }}>
      <SkeletonPlaceholder borderRadius={8}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {skeletonItems.map((_, index) => (
            <View
              key={index}
              style={{
                width: CARD_WIDTH,
                marginBottom: CARD_SPACING,
              }}
            >
              {/* Card image placeholder */}
              <SkeletonPlaceholder.Item width={CARD_WIDTH} height={140} borderRadius={8} />
              
              {/* Title placeholder */}
              <SkeletonPlaceholder.Item
                width={CARD_WIDTH * 0.7}
                height={20}
                marginTop={10}
                borderRadius={4}
              />
              
              {/* Price placeholder */}
              <SkeletonPlaceholder.Item
                width={CARD_WIDTH * 0.5}
                height={18}
                marginTop={6}
                borderRadius={4}
              />
              
              {/* Add to cart button placeholder */}
              <SkeletonPlaceholder.Item
                width={CARD_WIDTH * 0.6}
                height={35}
                marginTop={12}
                borderRadius={6}
              />
            </View>
          ))}
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default ProductSkeleton;
