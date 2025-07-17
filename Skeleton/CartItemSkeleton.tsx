import React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width } = Dimensions.get("window");

const CartItemSkeleton = () => {
  const skeletonItems = Array.from({ length: 3 }); 

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <SkeletonPlaceholder borderRadius={8}>
        {skeletonItems.map((_, index) => (
          <View
            key={index}
            style={{
              width: width - 32,
              height: 200,
              marginBottom: 20,
              borderRadius: 20,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            {/* Top section: image + title/brand + remove */}
            <View style={{ flexDirection: "row", padding: 10 }}>
              {/* Image */}
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 10,
                }}
              />
              {/* Title and brand */}
              <View style={{ marginLeft: 12, flex: 1 }}>
                <View
                  style={{
                    width: "60%",
                    height: 20,
                    borderRadius: 4,
                    marginBottom: 6,
                  }}
                />
                <View
                  style={{
                    width: "40%",
                    height: 14,
                    borderRadius: 4,
                  }}
                />
              </View>
              {/* Cross icon */}
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              />
            </View>

            {/* Bottom section: price & quantity */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 12,
              }}
            >
              <View style={{ flex: 1 }}>
                {/* MRP */}
                <View
                  style={{
                    width: "50%",
                    height: 16,
                    borderRadius: 4,
                    marginBottom: 6,
                  }}
                />
                {/* Price */}
                <View
                  style={{
                    width: "40%",
                    height: 18,
                    borderRadius: 4,
                    marginBottom: 6,
                  }}
                />
                {/* Size */}
                <View
                  style={{
                    width: 50,
                    height: 20,
                    borderRadius: 6,
                  }}
                />
              </View>

              {/* Quantity button group */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  backgroundColor: "#1F41BB",
                  borderRadius: 5,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                  }}
                />
              </View>
            </View>
          </View>
        ))}
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default CartItemSkeleton;
