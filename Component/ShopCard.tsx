import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

interface ShopCardProps {
  image: string;
  title: string;
  priceText: string;
  cardWidth?:number;
  imageHeight?:number;
}

const ShopCard: React.FC<ShopCardProps> = ({ image, title, priceText,cardWidth=150,imageHeight=100 }) => {
  return (
    // <TouchableOpacity style={[styles.card,{width:cardWidth}]}>
    <View style={[styles.card,{width:cardWidth}]}>
      <Image source={{ uri: image }} style={[styles.image,{height:imageHeight}]} resizeMode='contain' />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{priceText}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   card: {
//     marginHorizontal: 4,
//     padding: 6,
//     height:180,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     justifyContent:"center",
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
    
//   },
//   image: {
//     width: '100%',
//     height: 80,
//     borderRadius: 6,
//   },
//   title: {
//     fontSize: 12,
//     fontWeight: '600',
//     marginTop: 6,
//     textAlign: 'center',
//   },
//   price: {
//     fontSize: 12,
//     color: 'green',
//     marginTop: 2,
//     textAlign: 'center',
//   },
// });



const styles = StyleSheet.create({
  card: {
    marginHorizontal: 6,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: "center",
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2,
  },
  image: {
    width: '100%',
    borderRadius: 6,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: 'green',
    marginTop: 2,
    textAlign: 'center',
  },
});


export default ShopCard;