import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllProductScreen from "../Screen/AllProductScreen";
import TabletScreen from "../Screen/TabletScreen";
import LotionScreen from "../Screen/LotionScreen";
import { categoryImage } from "../MockData/CategoryImage";
import { Text, View, Image, Pressable, Platform } from "react-native"

const Tab = createMaterialTopTabNavigator();





type TabLabel = "All" | "Tablet" | "Skincare";

const tabIconMap: Record<TabLabel, string> = {
    All: categoryImage[0].image,
    Tablet: categoryImage[1].image,
    Skincare: categoryImage[2].image,
};



const renderTabLabel = (label: TabLabel, focused: boolean): React.ReactElement => {


    return (

        <View style={{ alignItems: "center" }}>
            <View style={{
                height: 80,
                width: 80,

                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50, // ✅ 80 / 2 = 40 to make it a circle
                marginBottom: 4,
                elevation: 0

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
                tabBarStyle: { backgroundColor: "white", height: 115 },

            })}

        >
            <Tab.Screen name="All" component={AllProductScreen} />
            <Tab.Screen name="Tablet" component={TabletScreen} />
            <Tab.Screen name="Skincare" component={LotionScreen} />
        </Tab.Navigator>
    );
}

export default TopTabBar