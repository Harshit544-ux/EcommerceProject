import React, { useEffect, useRef, useState } from 'react';
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
import ShoppingIcon from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Component/CustomButton';
import ImageCarousel from '../Component/ImageCarousel';
import GrowthIcon from 'react-native-vector-icons/MaterialIcons';
import DateIcon from 'react-native-vector-icons/Fontisto';
import ArrowDownIcon from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-star-view';
import Bar from 'react-native-progress/Bar';
import StarIcon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '../src/slices/cartSlice';
import Share from 'react-native-share';
import Snackbar from 'react-native-snackbar';
import CardDetailSkeleton from '../Skeleton/CardDetailSkeleton';

const { width } = Dimensions.get('window');
type Props = NativeStackScreenProps<RootStackParamList, 'CardDetailScreen'>;

const CardDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state: any) =>
    state.cart.items.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
  );
  const { cardData } = route.params;
  const cartItem = useSelector((state: any) =>
    state.cart.items.find((item: any) => item.id === cardData.id)
  );
  const quantity = cartItem ? cartItem.quantity : 0;
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(true);

  const CustomShare = async () => {
    const message = `🔥 Product: ${cardData.title}\n💰 Price: ${cardData.price}\n📅 Expiry: March 2028`;
    const shareOptions = {
      title: `Check out : ${cardData.title}!`,
      message: message,
    }
    try {
      const shareResponse = await Share.open(shareOptions);
    }
    catch (error) {
      console.log("Error sharing product", error);
    }
  }
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
  // Format images for the carousel
  const formattedImages = cardData.images?.map((img: string, index: number) => ({
    id: index + 1,
    image: img,
  })) || [];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, []);

  if (isLoading) {
    return <CardDetailSkeleton />
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntIcon name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="heart-o" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}
            onPress={() => navigation.navigate('CartItemsScreen')}
          >
            <ShoppingIcon name="shoppingcart" size={20} />
            {cartCount > 0 && (
              <View
                style={{
                  position: 'absolute',
                  right: -9,
                  top: -10,
                  backgroundColor: '#1F41BB',
                  borderRadius: 10,
                  minWidth: 18,
                  height: 18,
                  paddingHorizontal: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    includeFontPadding: false,
                  }}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  {cartCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <ImageCarousel
            images={formattedImages}
            autoPlay={false}
            scrollAnimationDuration={0}
            loop={false}
            resizeMode='contain'
          />
          <TouchableOpacity style={styles.floatingShareButton} onPress={CustomShare}>
            <Icon name="share" size={20} color="#3187A2" opacity={0.9} />
          </TouchableOpacity>
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
          <Text style={styles.labels}>{cardData.label}</Text>
          {/* Rating Section */}
          <View style={styles.ratingContainer}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>{cardData.rating} ★</Text>
            </View>
            <Text style={styles.reviewsText}>1,234 Reviews</Text>
          </View>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 3, }}>
              <Text style={{ color: "#666" }}>MRP</Text>
              <Text style={styles.originalPrice}> {cardData.originalPrice}</Text>
            </View>
            <Text style={styles.discount}>70% off</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8, justifyContent: "space-between", marginVertical: 10 }}>
            {quantity > 0 && (
              <Text style={[styles.price, { flex: 1 }]}>₹{Number(cardData.price.replace(/[^\d]/g, "")) * quantity}</Text>
            )}
            <View style={[styles.buttonContainer, { flex: 0, marginBottom: 0 }]}>
              {quantity == 0 ? (
                <CustomButton
                  text="ADD"
                  isActive={true}
                  style={[styles.addToCartButton, { borderColor: "#3187A2", borderWidth: 1 }]}
                  textStyle={{ color: "#3187A2", fontWeight: "bold", fontSize: 16, fontFamily: "Poppins" }}
                  onPress={() => {
                    dispatch(addToCart(cardData));
                    Snackbar.show({
                      text: 'Added to Cart',
                      duration: Snackbar.LENGTH_SHORT,
                      backgroundColor: '#1F41BB',
                      textColor: '#fff',
                    })
                  }}
                />
              ) : (
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 8, backgroundColor: "#1F41BB", borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}>
                  <TouchableOpacity onPress={() => dispatch(decreaseQuantity(cardData.id))}>
                    <MinusIcon name="minus" size={20} color="white" />
                    {/* <Text style={{ fontSize: 20, color: "#3187A2", fontWeight: "bold" }}>-</Text> */}
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium", color: "white" }}>{quantity}</Text>
                  <TouchableOpacity onPress={() => dispatch(increaseQuantity(cardData.id))}>
                    {/* <Text style={{ fontSize: 20, color: "#3187A2", fontWeight: "bold" }}>+</Text> */}
                    <PlusIcon name="plus" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
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
                  )
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
    position: "relative",
  },
  iconButton: {
    marginHorizontal: 8,
  },
  imageContainer: {
    width: width,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
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
    marginBottom: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
    marginBottom: 8
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
    backgroundColor: '#DEEFF5',
    borderColor: '#7CC1D7',
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
  },
  description: {
    color: '#666',
    lineHeight: 20,
  },
  productGrowthContainer: {
    height: 50,
    width: '100%',
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
    height: 210,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 6,
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
    marginTop: 10,
  },
  verticalDivider: {
    width: 1,
    height: 100,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
  },
  labels: {
    backgroundColor: "#D3D3D3",
    color: "#36454F",
    padding: 4,
    marginBottom: 10,
    marginTop: 5,
    width: 120,
    textAlign: "center",
    borderRadius: 15,
  },
  floatingShareButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    zIndex: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
});

export default CardDetailScreen;