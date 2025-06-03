// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import CardList from "../Screen/CardScreen";
// import CartItemScreen from "../Screen/CartItemsScreen";
// import AccountScreen from "../Screen/AccountScreen";
// import ProductCategoryScreen from "../Screen/ProductCategoryScreen";
// import { Image } from "react-native";


// type RootStackParamList = {
//   CardScreen: undefined;
//   Cart: undefined;
//   Account: undefined;
//   Category: undefined;
// };

// const Tab = createBottomTabNavigator<RootStackParamList>();


// const BottomTabs=()=>(
//     <Tab.Navigator
//     screenOptions={({ route }: { route: { name: string } }) => ({
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
//         // let iconSource: any;
//         // if (route.name === 'Home') {
//         //   iconSource = require('./assets/home.png');
//         // } else if (route.name === 'Category') {
//         //   iconSource = require('./assets/categories.png');
//         // } else if (route.name === 'Account') {
//         //   iconSource = require('./assets/account.png');
//         // }
//         // else if(route.name==="Cart"){
//         //     iconSource =require('./assets/shopping-cart.png')
//         // }

//             let iconName = '';

//         if (route.name === 'Home') {
//           iconName = 'home-outline';
//         } else if (route.name === 'Category') {
//           iconName = 'grid-outline';
//         } else if (route.name === 'Account') {
//           iconName = 'person-outline';
//         } else if (route.name === 'Cart') {
//           iconName = 'cart-outline';
//         }

//         interface TabBarIconProps {
//           focused: boolean;
//           color: string;
//           size: number;
//         }

//         return (
//           <Image

//             style={{
//               width: 28,
//               height: 28,
//               tintColor: focused ? '#1F41BB' : '#888', 
//             }}
//             resizeMode="contain"
//           />
//         );
//       },
//       tabBarActiveTintColor: '#1F41BB',
//       tabBarInactiveTintColor: '#888',
//     })}
//   >
//     <Tab.Screen name='CardScreen' component={CardList} />
//     <Tab.Screen name="Cart" component={CartItemScreen} />
//     <Tab.Screen name="Account" component={AccountScreen} />
//     <Tab.Screen name="Category" component={ProductCategoryScreen} />
//   </Tab.Navigator>
// );

// export default BottomTabs;


import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CardList from "../Screen/CardScreen";
import CartItemScreen from "../Screen/CartItemsScreen";
import AccountScreen from "../Screen/AccountScreen";
import ProductCategoryScreen from "../Screen/ProductCategoryScreen";
import { Image, Pressable ,Platform,Text,View} from "react-native";
import { useSelector } from "react-redux";


type RootStackParamList = {
  CardScreen: undefined;
  CartItemScreen: undefined;
  AccountScreen: undefined;
  CategoryScreen: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
// Custom tab bar button component
const TabBarButton = (props: any) => (
  <Pressable
    {...props}
    android_ripple={Platform.OS === 'android' ? { color: 'white', borderless: false } : undefined}
  />
);

const BottomTabs = () => {
     const cartItems = useSelector((state: any) => state.cart.items);
  const cartItemsCount = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: { name: string } }) => ({
        headerShown: false,
        tabBarShowLabel: true, // Enable label
        tabBarLabelStyle: {
          borderTopWidth: 0,
          fontSize: 12,
          fontWeight: '500',
          marginVertical: 5,
        },
        tabBarStyle: {
          height: 70, // increase height here
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: '#fff',
        },
        tabBarButton: TabBarButton,
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          let iconSource: any;

          if (route.name === 'CardScreen') {
            iconSource = require('../assets/home.png');
          }
          else if (route.name === 'CategoryScreen') {
            iconSource = require('../assets/categories.png')
          }
          else if (route.name === 'AccountScreen') {
            iconSource = require('../assets/user.png')
          }
          else if (route.name === 'CartItemScreen') {
            iconSource = require("../assets/shopping-cart.png")
          }
          return (
            <>
              <Image
                source={iconSource}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#1F41BB' : '#888',
                }}
                resizeMode="contain"
              />
              {route.name === "CartItemScreen" && cartItemsCount > 0 && (
                <View style={{
                  position: 'absolute',
                  right: -6,
                  top: -6,
                  backgroundColor: '#1F41BB',
                  borderRadius: 10,
                  minWidth: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                    {cartItemsCount}
                  </Text>
                </View>
              )}
            </>
          );
        },
      })}
    >
      <>
        <Tab.Screen name='CardScreen' component={CardList} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="CategoryScreen" component={ProductCategoryScreen} options={{ tabBarLabel: 'Category' }} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} options={{ tabBarLabel: 'Account' }} />
        <Tab.Screen name="CartItemScreen" component={CartItemScreen} options={{ tabBarLabel: 'Cart' }} />
      </>
    </Tab.Navigator>
  );
};
export default BottomTabs;
