import React from 'react';
import { FlatList, StyleSheet, View, Dimensions, TextInput, SafeAreaView, StatusBar, Text, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import Card from '../Component/Card';
import { cardData } from '../MockData/CardData';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import ShopCard from '../Component/ShopCard';
import { productCardData } from "../MockData/ShopCard";
import { popularPickData } from "../MockData/PopularPickData"
import ImageCarousel from '../Component/ImageCarousel';
import ArrowDownIcon from 'react-native-vector-icons/AntDesign';
import LocationPinIcon from 'react-native-vector-icons/Entypo';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { imageBanner } from '../MockData/ImageSlider';

const CARD_SPACING = 16;
const { width } = Dimensions.get('window');
// const CARD_WIDTH = (width - (CARD_SPACING * (NUM_COLUMNS + 1))) / NUM_COLUMNS;
const CARD_WIDTH = (width - CARD_SPACING * 3) / 2;

type CardScreenProps = NativeStackScreenProps<RootStackParamList, 'CardScreen'>;

const CardList: React.FC<CardScreenProps> = ({ navigation, route }) => {
  console.log("harshit")
  const gridData = cardData.slice(0, 9);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", height: 80, width: "100%", justifyContent: "center", paddingHorizontal: 10 }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 30
        }}>

          {/* Left side: Location Info */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <LocationPinIcon name="location-pin" size={20} color="red" />
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>T-HUB</Text>
            <ArrowDownIcon name="down" size={18} color="black" />
          </View>

          {/* Right side: Circle with H */}
          <View style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: "#1F41BB",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ color: "white", fontWeight: "500" }}>H</Text>
          </View>

        </View>

        <Text style={styles.locationText}>Knowledge City, Raidurgam, Hyderabad, T....</Text>

      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          {/* <ImageCarousel /> */}
          <ImageCarousel
            images={imageBanner}
            autoPlay={true}
            scrollAnimationDuration={0}
            loop={false} />
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 8 }}>
          <View style={styles.searchInput}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SearchIcon name="search" size={15} color="black" style={{ marginRight: 2 }} />
              <TextInput
                style={{ flex: 1 }}
                placeholder="Search"
              />
            </View>
          </View>
        </View>




        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, alignItems: "center", marginBottom: 10 }}>
          <Text style={styles.headerTitle}>Recommended Items</Text>
          <TouchableOpacity
            style={{ width: 50, height: 30, borderRadius: 15, backgroundColor: "#1F41BB", justifyContent: "center", alignItems: "center" }}>
            <ArrowRightIcon name="arrowright" size={20} color="white" />
          </TouchableOpacity>
        </View>


        <View style={styles.gridWrapper} >
          {gridData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardContainer}
              onPress={() => navigation.navigate("CardDetailScreen", { cardData: item })}
            >
              <Card
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
                originalPrice={item.originalPrice}
                label={item.label}
                cardWidth={CARD_WIDTH}
              />
            </TouchableOpacity>
          ))}
        </View>




        <View style={styles.imageCardContainer}>
          <Text style={styles.imageCardTitle}>Stock up on essentials!</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ zIndex: 1 }}
            contentContainerStyle={{ paddingVertical: 25 }}
          >
            {productCardData.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("WelcomeScreen")}
              // style={styles.essentialsCard}
              >
                {/* <Text>Hello</Text> */}
                <ShopCard {...item}
                  cardWidth={width * 0.5}
                  imageHeight={100}

                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        {/* <View style={styles.popularPicksContainer}>
          <Text style={styles.imageCardTitle}>Popular Picks!</Text>
          <View style={styles.smallPopularPicksContainer}>
            <View style={styles.popularPicksGrid}>
              {popularPickData.slice(0, 4).map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.popularCardWrapper}
                  onPress={() => navigation.navigate("CardDetailScreen", { cardData: item })}
                >
                  <ShopCard
                    image={item.image}
                    title={item.title}
                    priceText={item.priceText}
                
                    imageHeight={140}
                    // cardWidth={(width - 56) / 2}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View> */}


        <View style={styles.popularPicksContainer}>
          <Text style={styles.imageCardTitle}>Popular Picks!</Text>
          <View style={styles.smallPopularPicksContainer}>
            <FlatList
              data={popularPickData.slice(0, 4)}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-evenly' }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.popularCardWrapper}
                  onPress={() => navigation.navigate("CardDetailScreen", { cardData: item })}
                >
                  <ShopCard
                    image={item.image}
                    title={item.title}
                    priceText={item.priceText}
                    imageHeight={160}
                    cardWidth={130}
                  />
                </TouchableOpacity>
              )}
              contentContainerStyle={{ padding: 0 }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>



        <View style={styles.imageCardContainer}>
          <Text style={styles.imageCardTitle}>Monday deals!</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {productCardData.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("CardDetailScreen", { cardData: item })}
                style={{ marginRight: 12 }}
              >
                <ShopCard {...item} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    padding: CARD_SPACING / 2,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: CARD_SPACING,
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginBottom: CARD_SPACING,
  },
  searchInput: {
    width: width * 0.7,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginVertical: 12,
    borderWidth: 1,
  },
  searchText: {
    fontSize: 14,
    color: 'black',
  },
  headerTitle: {
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "800",
    color: "#000000",
    marginBottom: 8,
  },
  imageCardContainer: {
    height: 300,
    width: '100%',
    backgroundColor: '#F1F4FF',
    // backgroundColor: 'red',
    marginTop: 18,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 16,
    gap: 10,
    zIndex: 1,
  },
  imageCardTitle: {
    fontSize: 22,
    // backgroundColor:"blue",
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: 'black',
    marginBottom: 18,
    marginTop: 4,
  },
  shopCardWrapper: {
    width: width / 4 - 12,
    marginHorizontal: 7,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  popularPicksContainer: {
    backgroundColor: "#b4eeb4",
    width: '100%',
    marginTop: 22,
    borderRadius: 20,
    padding: 16,
    paddingBottom: 24,
  },
  smallPopularPicksContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 12,
    width: '100%',
    overflow: 'hidden',
  },
  popularPicksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 12,
  },

  cardWrapper: {
    flex: 1,
    margin: 6,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 3,
    overflow: 'visible',
    zIndex: 2,
  },
  shopCard: {
    aspectRatio: 0.8,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: CARD_SPACING / 2,
  },


  locationText: {
    color: "#494949",
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 12,
  },
  // ...existing code...
  popularCardWrapper: {
    marginBottom: 15,
    borderRadius: 10,
    // backgroundColor: 'red',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
    // overflow: 'hidden',
    // Remove width here, set via cardWidth prop
    marginHorizontal: 4, // Add horizontal margin for spacing
  },

});
