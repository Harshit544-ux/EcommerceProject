// import React from 'react';
// import { View, Dimensions, StyleSheet } from 'react-native';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// const { width } = Dimensions.get('window');

// const CardDetailSkeleton = () => {
//   return (
//     <SkeletonPlaceholder
//       backgroundColor="#E1E9EE"
//       highlightColor="#F2F8FC"
//       speed={1200}
//       direction="right" // 👈 horizontal left-to-right shimmer
//     >
//       <View style={styles.image} />
//       <View style={styles.growth} />
//       <View style={styles.title} />
//       <View style={styles.label} />
//       <View style={styles.row}>
//         <View style={styles.ratingBox} />
//         <View style={styles.reviewText} />
//       </View>
//       <View style={styles.row}>
//         <View style={styles.price} />
//         <View style={styles.discount} />
//       </View>
//       <View style={styles.button} />
//       <View style={styles.expiry} />
//       <View style={styles.description} />
//       <View style={styles.highlight} />
//       <View style={styles.highlight} />
//       <View style={styles.highlight} />
//       <View style={styles.reviews} />
//     </SkeletonPlaceholder>
//   );
// };

// const styles = StyleSheet.create({
//   image: { width: width, height: 300, marginBottom: 16 },
//   growth: { width: '100%', height: 50, marginBottom: 16 },
//   title: { width: '80%', height: 24, marginBottom: 8 },
//   label: { width: 120, height: 24, marginBottom: 16 },
//   row: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
//   ratingBox: { width: 60, height: 24, marginRight: 8 },
//   reviewText: { width: 100, height: 16 },
//   price: { width: 100, height: 24, marginRight: 8 },
//   discount: { width: 60, height: 16 },
//   button: { width: '100%', height: 48, borderRadius: 8, marginBottom: 16 },
//   expiry: { width: '100%', height: 56, borderRadius: 4, marginBottom: 16 },
//   description: { width: '100%', height: 120, borderRadius: 6, marginBottom: 16 },
//   highlight: { width: '100%', height: 16, marginBottom: 8 },
//   reviews: { width: '100%', height: 200, borderRadius: 6 },
// });

// export default CardDetailSkeleton;
