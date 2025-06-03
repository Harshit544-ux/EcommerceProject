import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllProductScreen from "../Screen/AllProductScreen";
import TabletScreen from "../Screen/TabletScreen";
import LotionScreen from "../Screen/LotionScreen";
import { categoryImage } from "../MockData/CategoryImage";
import { Text, View, Image } from "react-native"

const Tab = createMaterialTopTabNavigator();

type TabLabel = "All" | "Medicine" | "Skincare";

const tabIconMap: Record<TabLabel, string> = {
    All: categoryImage[0].image,
    Medicine: categoryImage[1].image,
    Skincare: categoryImage[2].image,
};

const renderTabLabel = (label: TabLabel, focused: boolean): React.ReactElement => {
    return (
        <View style={{ alignItems: "center" }}>
            <View style={{
                height: 56,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                marginBottom: 4,
            }
            }>
                <Image
                    source={{ uri: tabIconMap[label] }}
                    style={{
                        width: 44,
                        height: 44,
                        marginBottom: 5,
                        resizeMode: "contain",
                    }}
                />
            </View>
            <Text style={{ color: focused ? "#1F41BB" : "gray", fontWeight: "600", fontSize: 12 }}>
                {label}
            </Text>
        </View>
    );
}

const TopTabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused }) => renderTabLabel(route.name as TabLabel, focused),
                tabBarIndicatorStyle: { backgroundColor: "#1F41BB" },
                tabBarStyle: { backgroundColor: "white", height: 100 },
            })}
        >
            <Tab.Screen name="All" component={AllProductScreen} />
            <Tab.Screen name="Medicine" component={TabletScreen} />
            <Tab.Screen name="Skincare" component={LotionScreen} />
        </Tab.Navigator>
    );
}
export default TopTabBar