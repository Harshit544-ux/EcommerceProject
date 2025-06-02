import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
  image: string;
  rating: number;
  price: string;
  originalPrice: string;
  label: string;
  cardWidth: number;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  image, 
  rating, 
  price, 
  originalPrice, 
  label, 
  cardWidth 
}) => {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>⭐ {rating}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.originalPrice}>{originalPrice}</Text>
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
 image: {
  width: '100%',
  height: 150, // aap chaaho to 200 se kam kar sakte ho
  resizeMode: 'contain',
  backgroundColor: '#f9f9f9', // optional: ek halka background bhi de sakte ho
},

  content: {
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  price: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  label: {
    color: '#f07575',
    fontWeight: 'bold',
  },
});

export default Card;















// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// interface CardProps {
//   name: string;
//   image_url: string;
//   price: number | string;
//   type?: string;
//   rating?: number;
//   originalPrice?: number | string;
//   label?: string;
//   cardWidth: number;
// }

// const Card: React.FC<CardProps> = ({
//   name,
//   image_url,
//   rating,
//   price,
//   originalPrice,
//   label,
//   cardWidth,
// }) => {
//   return (
//     <View style={[styles.card, { width: cardWidth }]}>
//       <Image source={{ uri: image_url }} style={styles.image} />
//       <View style={styles.content}>
//         <Text style={styles.title}>{name}</Text>
//         <Text>⭐ {rating}</Text>
//         <View style={styles.priceContainer}>
//           <Text style={styles.price}>₹{price}</Text>
//           {originalPrice ? (
//             <Text style={styles.originalPrice}>₹{originalPrice}</Text>
//           ) : null}
//         </View>
//         {label ? <Text style={styles.label}>{label}</Text> : null}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     backgroundColor: '#f9f9f9',
//   },
//   content: {
//     padding: 8,
//   },
//   title: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 4,
//   },
//   price: {
//     fontWeight: 'bold',
//     marginRight: 8,
//   },
//   originalPrice: {
//     textDecorationLine: 'line-through',
//     color: 'gray',
//   },
//   label: {
//     color: '#f07575',
//     fontWeight: 'bold',
//   },
// });

// export default Card;