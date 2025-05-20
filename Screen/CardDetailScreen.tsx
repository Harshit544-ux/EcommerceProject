import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Animated,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Component/CustomButton';
import { Alert } from 'react-native';
import ImageCarousel from '../Component/ImageCarousel';
import GrowthIcon from 'react-native-vector-icons/MaterialIcons';
import DateIcon from 'react-native-vector-icons/Fontisto';
import ArrowDownIcon from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-star-view';
import Bar from 'react-native-progress/Bar';
import StarIcon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../src/slices/cartSlice';

const { width } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'CardDetailScreen'>;

const CardDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state: any) => state.cart.cartCount);

  const { cardData } = route.params;
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const rotateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });



  const formattedImages = cardData.images?.map((img: string, index: number) => ({
    id: index + 1,
    image: img,
  })) || [];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntIcon name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="share" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="heart-o" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="shopping-cart" size={20} color="#000" />
            {cartCount > 0 && (
              <View style={{
                position: 'absolute',
                right: -6,
                top: -6,
                backgroundColor: 'red',
                borderRadius: 8,
                paddingHorizontal: 5,
                paddingVertical: 1,
                minWidth: 16,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          {/* <Image source={{ uri: cardData.image }} style={styles.image} resizeMode="cover" /> */}

          <ImageCarousel

            images={formattedImages}
            autoPlay={false}
            scrollAnimationDuration={0}
            loop={false}
          />

        </View>

        <View style={styles.productGrowthContainer}>
          <GrowthIcon name="auto-graph" size={24} color="green" />

          <Text style={{ color: "black", fontSize: 16, fontFamily: "Poppins-Medium", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: 'bold' }}>800</Text> people ordered this in last 30 days
          </Text>

        </View>



        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{cardData.title}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>{cardData.rating} ★</Text>
            </View>
            <Text style={styles.reviewsText}>1,234 Reviews</Text>
          </View>

          {/* Price Section */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{cardData.price}</Text>
            <Text style={styles.originalPrice}>{cardData.originalPrice}</Text>
            <Text style={styles.discount}>70% off</Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
              <Icon name="shopping-cart" size={20} color="#fff" />
              <Text style={styles.buttonText}>ADD TO CART</Text>
            </TouchableOpacity> */}
            <CustomButton
              text="ADD TO CART"
              isActive={true}
              style={[styles.button, styles.addToCartButton]}
              onPress={() => {
                dispatch(addToCart(cardData));
                Alert.alert('Added to Cart', `You have added ${cardData.title} to your cart.`)
              }} />
            {/* <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
              <Text style={styles.buttonText}>BUY NOW</Text>
            </TouchableOpacity> */}
            <CustomButton
              text="BUY NOW"
              isActive={true}
              style={[styles.button, styles.buyNowButton]}
              onPress={() => Alert.alert('Buy Now')} />
          </View>

          {/* Expiry Date */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 3,
              width: "100%",
              gap: 12,
              borderWidth: 1,
              borderColor: "#e0e0e0",
              elevation: 1, // Android shadow
              shadowColor: "#000", // iOS shadow
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              marginTop: 12,
              marginBottom: 8,
            }}
          >
            <DateIcon name="date" size={22} color="black" />
            <Text style={{
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins-Medium",
            }}>
              <Text style={{ fontWeight: "bold", fontSize: 17, color: "black" }}>Expiry: </Text>
              March 2028
            </Text>
          </View>

          {/* Product Description Accordion */}
          <View style={styles.detailsContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Product Description</Text>
              <TouchableOpacity onPress={toggleAccordion}>
                <Animated.View style={{ transform: [{ rotate: rotateInterpolation }] }}>
                  <ArrowDownIcon name="down" size={18} color="black" />
                </Animated.View>
              </TouchableOpacity>
            </View>

            <Animated.View style={[styles.body, { height: heightInterpolation }]}>
              <View style={styles.detailWrapper}>
                <View style={styles.row}>
                  <Text style={styles.label}>Classification:</Text>
                  <Text style={styles.value}>Analgesic / Antipyretic</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>Recommended For:</Text>
                  <Text style={styles.value}>Fever, Mild to Moderate Pain</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>Quantity:</Text>
                  <Text style={styles.value}>500 mg (Tablet) / 100 ml (Syrup)</Text>
                </View>
              </View>

            </Animated.View>
          </View>

          {/* Highlight section */}
          <View style={styles.highlightsContainer}>
            <Text style={styles.highlightsTitle}>Highlights</Text>
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>{'\u2022'}</Text>
              <Text style={styles.bulletText}>Effective in reducing fever</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>{'\u2022'}</Text>
              <Text style={styles.bulletText}>Relieves mild to moderate pain</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>{'\u2022'}</Text>
              <Text style={styles.bulletText}>Available in tablet and syrup form</Text>
            </View>
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>{'\u2022'}</Text>
              <Text style={styles.bulletText}>Safe for adults and children (dosage varies)</Text>
            </View>
          </View>

          {/* Rating and Review section */}
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewtitle}>Rating and Reviews</Text>
            <View style={styles.reviewBox}>
              <View style={{ alignItems: 'center', gap: 5 }}>
                <Text>Good</Text>
                <Star score={4} style={{ width: 100, height: 20, color: "green" }} />
                <View style={{ alignItems: 'center' }}>
                  <Text>88 rating and 26</Text>
                  <Text style={{ marginLeft: 4 }}>reviews</Text>
                </View>


              </View>
              <View style={styles.verticalDivider} />

              <View style={{ alignItems: 'center', gap: 4 }}>
                {[5, 4, 3, 2].map((rating, index) => {
                  const progressValues = [0.7, 0.5, 0.3, 0.2];
                  return (
                    <View
                      key={rating}
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <View style={{ width: 28, flexDirection: 'row', alignItems: 'center' }}>
                        <Text>{rating} </Text>
                        <StarIcon name="star" />
                      </View>
                      <Bar
                        progress={progressValues[index]}
                        width={200}
                        color="green"
                        borderWidth={0}
                        height={10}
                      />
                    </View>
                  );
                })}
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
  },
  imageContainer: {
    width: width,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // image: {
  //   width: '100%',
  //   height: '100%',
  // },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingBox: {
    backgroundColor: '#388e3c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  ratingText: {
    color: '#fff',
    fontWeight: '500',
  },
  reviewsText: {
    color: '#666',
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    color: '#666',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discount: {
    color: '#388e3c',
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  addToCartButton: {
    backgroundColor: '#ff9f00',
  },
  buyNowButton: {
    backgroundColor: '#fb641b',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  detailsContainer: {

    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 6,
    marginTop: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',



  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '600',
    // marginBottom: 8,
  },
  description: {
    color: '#666',
    lineHeight: 20,
  },

  productGrowthContainer: {
    height: 50,
    width: '100%',
    // backgroundColor: "#D3D3D3",
    backgroundColor: "#E0E0E0",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  body: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    width: '100%',
  },
  bodyText: {
    color: '#333',
    fontSize: 15,
    lineHeight: 22,
    padding: 8,
  },

  detailWrapper: {
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    width: 130, // left-side label width
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    flex: 1,
    color: '#555',
  },


  highlightsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  highlightsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bulletPoint: {
    marginRight: 6,
    fontSize: 16,
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  reviewContainer: {
    marginTop: 20,
    padding: 8,
    // backgroundColor: 'blue',
    // borderRadius: 8,
    height: 210,

    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 6,
    // marginTop: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',


  },
  reviewtitle: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    marginLeft: 4,
    marginBottom: 6,
    color: "black",
    fontWeight: "semibold",

  },
  reviewBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    gap: 15,
    // backgroundColor: '#fff',
    // borderRadius: 6,
    marginTop: 10,
    // elevation: 1,
    // shadowColor: '#000',
  },
  verticalDivider: {
    width: 1,
    height: 100,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
  },

});

export default CardDetailScreen;