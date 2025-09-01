import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

interface ShopCardProps {
  image: string;
  title: string;
  priceText: string;
  cardWidth?:number;
  imageHeight?:number;
}

const ShopCard: React.FC<ShopCardProps> = ({ image, title, priceText,cardWidth=150,imageHeight=100 }) => {
  return (
    <View style={[styles.card,{width:cardWidth}]}>
      <Image source={{ uri: image }} style={[styles.image,{height:imageHeight}]} resizeMode='contain' />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{priceText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 6,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: "center",
    alignItems: 'center',
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