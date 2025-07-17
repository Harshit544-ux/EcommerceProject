import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View, Text} from "react-native";
import DeliveryScreen from "../Screen/DeliverInfoScreen";
import RecipientScreen from "../Screen/Recipient";

const Tab = createMaterialTopTabNavigator();

type TabLabel = "Address" | "Recipient";

const renderTabLabel = (label: TabLabel, focused: boolean): React.ReactElement => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ 
        color: focused ? "#1F41BB" : "gray", 
        fontWeight: "600", 
        fontSize: 16 
      }}>
        {label} 
      </Text>
    </View>
  );
};

const AddressTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => renderTabLabel(route.name as TabLabel, focused),
        tabBarIndicatorStyle: { backgroundColor: "#1F41BB" },
        tabBarStyle: { backgroundColor: "white", height: 60 },
      })}
    >
      <Tab.Screen name="Delivery" component={DeliveryScreen} />
      <Tab.Screen name="Recipient" component={RecipientScreen} />
    </Tab.Navigator>
  );
};

export default AddressTab;