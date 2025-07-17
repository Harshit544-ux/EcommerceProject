import React from "react";
import { Dimensions, ScrollView } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width } = Dimensions.get('window');

const CardDetailSkeleton = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <SkeletonPlaceholder borderRadius={4}>        
        <SkeletonPlaceholder.Item width={width - 32} height={300} borderRadius={8} marginBottom={20} />

        <SkeletonPlaceholder.Item width={200} height={20} marginBottom={10} />

        <SkeletonPlaceholder.Item width={120} height={18} marginBottom={12} />
  
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginBottom={10}>
          <SkeletonPlaceholder.Item width={50} height={24} borderRadius={4} />
          <SkeletonPlaceholder.Item width={100} height={14} borderRadius={4} marginLeft={10} />
        </SkeletonPlaceholder.Item>
     
        <SkeletonPlaceholder.Item flexDirection="row" justifyContent="space-between" marginBottom={14}>
          <SkeletonPlaceholder.Item width={80} height={20} />
          <SkeletonPlaceholder.Item width={50} height={20} />
        </SkeletonPlaceholder.Item>
        
        <SkeletonPlaceholder.Item width={120} height={40} borderRadius={6} marginBottom={20} />

        {/* Expiry Date Box */}
        <SkeletonPlaceholder.Item width={width - 32} height={50} borderRadius={6} marginBottom={16} />

        {/* Accordion Header */}
        <SkeletonPlaceholder.Item flexDirection="row" justifyContent="space-between" alignItems="center" marginBottom={8}>
          <SkeletonPlaceholder.Item width={180} height={20} />
          <SkeletonPlaceholder.Item width={20} height={20} />
        </SkeletonPlaceholder.Item>
    
        <SkeletonPlaceholder.Item marginBottom={16}>
          <SkeletonPlaceholder.Item width={width - 64} height={14} marginBottom={8} />
          <SkeletonPlaceholder.Item width={width - 100} height={14} marginBottom={8} />
          <SkeletonPlaceholder.Item width={width - 80} height={14} />
        </SkeletonPlaceholder.Item>
     
        <SkeletonPlaceholder.Item width={160} height={20} marginBottom={10} />
        {[1, 2, 3].map((_, i) => (
          <SkeletonPlaceholder.Item key={i} width={width - 64} height={14} marginBottom={8} />
        ))}

        <SkeletonPlaceholder.Item width={160} height={20} marginTop={20} marginBottom={10} />
        <SkeletonPlaceholder.Item flexDirection="row" justifyContent="space-between" alignItems="center">
          <SkeletonPlaceholder.Item width={100} height={80} borderRadius={6} />
          <SkeletonPlaceholder.Item width={180} height={80} borderRadius={6} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default CardDetailSkeleton;
