// import * as React from "react";
// import { Dimensions, Image, View } from "react-native";
// import { useSharedValue, useAnimatedStyle, withTiming, } from "react-native-reanimated";
// import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

// const data = [
//   { id: 1, image: "https://media.istockphoto.com/id/2151094353/photo/rainbow-colored-fruits-and-vegetables-banner.jpg?s=1024x1024&w=is&k=20&c=wwSD0gmD02c09mmphrs6O8-4H3v1cAatLqvmhZ6pMms=" },
//   { id: 2, image: "https://plus.unsplash.com/premium_photo-1673429739239-c6b01c65455a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 3, image: "https://media.istockphoto.com/id/1277073749/photo/sale-discount-promotion-deduction-man-planning-concept.jpg?s=1024x1024&w=is&k=20&c=taIxGWDTDS6-_L3ERpX6oXJynjdbP7mbcz0nhlKA4PU=" },
//   { id: 4, image: "https://media.istockphoto.com/id/999022694/vector/buy-online-concept.jpg?s=1024x1024&w=is&k=20&c=NLfF3Z8wn4IuJ0IMMybqGGFL1wmXBoxNW_7ps7-gYsI=" },
// ];

// const width = Dimensions.get("window").width;

// const DOT_WIDTH = 8;
// const DOT_HEIGHT = 8;
// const ACTIVE_DOT_WIDTH = 30;

// import Animated, { interpolate, Extrapolate , interpolateColor} from "react-native-reanimated";

// const CustomPagination: React.FC<{ 
//   progress: { value: number }; 
//   data: { id: number; image: string }[]; 
//   onPress: (index: number) => void; 
// }> = ({ progress, data, onPress }) => {
//   return (
//     <View style={{ flexDirection: "row", gap: 8, marginTop: 10, alignSelf: "center" }}>
//       {data.map((_, i) => {
//         // Animated style for each dot
//         const animatedStyle = useAnimatedStyle(() => {
//           const inputRange = [i - 1, i, i + 1];
//           const widthAnim = interpolate(
//             progress.value,
//             inputRange,
//             [DOT_WIDTH, ACTIVE_DOT_WIDTH, DOT_WIDTH],
//             Extrapolate.CLAMP
//           );
//           const bgColor = interpolateColor(
//             progress.value,
//             inputRange,
//             ["rgba(0,0,0,0.2)", "#000", "rgba(0,0,0,0.2)"]
//           );
//           return {
//             width: withTiming(widthAnim, { duration: 380 }),
//             height: DOT_HEIGHT,
//             borderRadius:  DOT_HEIGHT / 2,
//             backgroundColor: bgColor,
//             marginHorizontal: 2,
//           };
//         }, [progress.value]);
//         return (
//           <Animated.View
//             key={i}
//             style={animatedStyle}
//             onTouchEnd={() => onPress(i)}
//           />
//         );
//       })}
//     </View>
//   );
// };

// const ImageCarousel: React.FC = () => {
//   const ref = React.useRef<ICarouselInstance>(null);
//   const progress = useSharedValue<number>(0);

//   const onPressPagination = (index: number) => {
//     ref.current?.scrollTo({
//       count: index - progress.value,
//       animated: true,
//     });
//   };

//   return (
//     <View >
//       <Carousel
//         ref={ref}
//         loop
//         width={width}
//         height={width / 2}
//         autoPlay
//         autoPlayInterval={2000}
//         data={data}
//         scrollAnimationDuration={1000}
//         onProgressChange={progress}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               flex: 1,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: "#fff",
//               borderRadius: 12,
//               overflow: "hidden",
//             }}
//           >
//             <Image
//               source={{ uri: item.image }}
//               style={{
//                 width: width - 40,
//                 height: width / 2.5,
//                 borderRadius: 10,
//               }}
//               resizeMode="cover"
//             />
//           </View>
//         )}
//       />
//       <CustomPagination progress={progress} data={data} onPress={onPressPagination} />
//     </View>
//   );
// };

// export default ImageCarousel;



import * as React from "react";
import { Dimensions, Image, ImageResizeMode, View } from "react-native";
import { useSharedValue, useAnimatedStyle, withTiming, } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

const DOT_WIDTH = 8;
const DOT_HEIGHT = 8;
const ACTIVE_DOT_WIDTH = 30;

import Animated, { interpolate, Extrapolate , interpolateColor} from "react-native-reanimated";

const CustomPagination: React.FC<{ 
  progress: { value: number }; 
  data: { id: number; image: string }[]; 
  onPress: (index: number) => void; 
}> = ({ progress, data, onPress }) => {
  return (
    <View style={{ flexDirection: "row", gap: 8, marginTop: 10, alignSelf: "center" }}>
      {data.map((_, i) => {
        // Animated style for each dot
        const animatedStyle = useAnimatedStyle(() => {
          const inputRange = [i - 1, i, i + 1];
          const widthAnim = interpolate(
            progress.value,
            inputRange,
            [DOT_WIDTH, ACTIVE_DOT_WIDTH, DOT_WIDTH],
            Extrapolate.CLAMP
          );
          const bgColor = interpolateColor(
            progress.value,
            inputRange,
            ["rgba(0,0,0,0.2)", "#000", "rgba(0,0,0,0.2)"]
          );
          return {
            width: withTiming(widthAnim, { duration: 380 }),
            height: DOT_HEIGHT,
            borderRadius:  DOT_HEIGHT / 2,
            backgroundColor: bgColor,
            marginHorizontal: 2,
          };
        }, [progress.value]);
        return (
          <Animated.View
            key={i}
            style={animatedStyle}
            onTouchEnd={() => onPress(i)}
          />
        );
      })}
    </View>
  );
};


interface ImageCarouselProps {
  images: { id: number; image: string }[];
  autoPlay?: boolean;
  loop?: boolean;
  scrollAnimationDuration?: number;
  resizeMode?:ImageResizeMode;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = true,
  loop = true,
  scrollAnimationDuration = 1000,
  resizeMode = "contain"
}) => {
  const data = images.map((item: { id: number; image: string }) => ({
    id: item.id,
    image: item.image,
  }));  
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View >
      <Carousel
        ref={ref}
        loop
        width={width}
        height={width / 2}
        autoPlay
        autoPlayInterval={2000}
        data={images}
        scrollAnimationDuration={1000}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "#fff",
              borderRadius: 12,
              overflow: "hidden",
              
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: width - 40,
                height: width / 2.5,
                borderRadius: 10,
                marginRight:18
              }}
              resizeMode={resizeMode}
            />
          </View>
        )}
      />
      <CustomPagination progress={progress} data={images} onPress={onPressPagination} />
    </View>
  );
};

export default ImageCarousel;