// import React, { useState } from 'react';
// import { SafeAreaView, View, Text, Image, StyleSheet, TextInput ,TouchableOpacity} from 'react-native';
// import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';
// import SearchIcon from 'react-native-vector-icons/FontAwesome';
// import MapView, { PROVIDER_GOOGLE, UrlTile, Marker } from 'react-native-maps';
// import { mockLocations } from '../MockData/mockLocation';
// import LocationPinIcon from 'react-native-vector-icons/Entypo';


// const LocationScreen = () => {
//        const [selectedLocation, setSelectedLocation] = useState(mockLocations.currentLocation);
//     const [region, setRegion] = useState({
//         latitude: mockLocations.currentLocation.latitude,
//         longitude: mockLocations.currentLocation.longitude,
//         latitudeDelta: 0.02,
//         longitudeDelta: 0.02,
//     });

//     interface Location {
//         id: string;
//         name: string;
//         address: string;
//         latitude: number;
//         longitude: number;
//     }

//     interface Region {
//         latitude: number;
//         longitude: number;
//         latitudeDelta: number;
//         longitudeDelta: number;
//     }

//     const handleLocationSelect = (location: Location) => {
//         setSelectedLocation(location);
//         setRegion({
//             ...region,
//             latitude: location.latitude,
//             longitude: location.longitude,
//         });
//     };



//     return (
//         <SafeAreaView style={styles.locationContainer}>

//             <View style={styles.headerContainer}>
//                 <ArrowLeftIcon name="arrowleft" size={25} color="#000" />
//                 <Text style={styles.locationText}>Choose address on map </Text>
//             </View>

//             <View style={
//                 styles.searchBar
//             }>
//                 <SearchIcon name="search" size={18} color="#000" style={{ margin: 5 }} />
//                 <TextInput
//                     placeholder='Search for your address'
//                     style={styles.searchInput}
//                 />
//             </View>



//             <View style={{ flex: 1 }}>

//                 <MapView
//                     style={styles.map}
//                     region={region}
//                     onRegionChangeComplete={setRegion}
//                 >
//                    <Marker
//                         coordinate={{
//                             latitude: selectedLocation.latitude,
//                             longitude: selectedLocation.longitude
//                         }}
//                         title={selectedLocation.name}
//                         description={selectedLocation.address}
//                     />
           
                  
//                 </MapView>



//             </View>


//             <View>
//                      {/* Location Selection Panel */}
//                 <View style={styles.locationPanel}>
//                     <TouchableOpacity 
//                         style={styles.locationItem}
//                         onPress={() => handleLocationSelect(mockLocations.currentLocation)}
//                     >
//                         <LocationPinIcon name="location-pin" size={24} color="#FF4757" />
//                         <View style={styles.locationInfo}>
//                             <Text style={styles.locationName}>Current Location</Text>
//                             <Text style={styles.locationAddress}>
//                                 {mockLocations.currentLocation.address}
//                             </Text>
//                         </View>
//                     </TouchableOpacity>

//                     {mockLocations.nearbyLocations.map(location => (
//                         <TouchableOpacity 
//                             key={location.id}
//                             style={styles.locationItem}
//                             onPress={() => handleLocationSelect({ ...location, id: location.id.toString() })}
//                         >
//                             <LocationPinIcon name="location-pin" size={20} color="red" />
//                             <View style={styles.locationInfo}>
//                                 <Text style={styles.locationName}>{location.name}</Text>
//                                 <Text style={styles.locationAddress}>{location.address}</Text>
//                             </View>
//                         </TouchableOpacity>
//                     ))}
//                 </View>

//             </View>

//         </SafeAreaView>
//     )
// }

// export default LocationScreen;

// const styles = StyleSheet.create({
//     locationContainer: {
//         flex: 1,
//     },


//     // },
//     headerContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         gap: 10,
//         padding: 10,
//         backgroundColor: "#fff",
//         borderBottomWidth: 1,
//         borderBottomColor: "#ccc",
//         height: 60,

//         // iOS Shadow
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 4,     // Thoda zyada height dena better hota hai
//         },
//         shadowOpacity: 0.3,  // Opacity thoda increase karein
//         shadowRadius: 5,     // Radius thoda bada karen

//         // Android Shadow
//         elevation: 8,        // Elevation value badha dein for stronger shadow
//     },

//     locationText: {
//         fontSize: 18,
//         fontFamily: "Poppins",
//         color: "#000"
//     },
//     searchBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: "90%",
//         alignSelf: "center",
//         marginTop: 20,
//         backgroundColor: "#fff",
//         borderRadius: 10,
//         elevation: 5,
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         paddingHorizontal: 10,
//     },
//     searchInput: {
//         flex: 1,
//         height: 50,
//         fontSize: 16,
//     },
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         height: "100%",
//         width: "100%",
//         justifyContent: 'flex-end',
//         alignItems: 'center',

//     },
//     // map: {
//     //     ...StyleSheet.absoluteFillObject,
//     // },

//      locationPanel: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         padding: 16,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: -2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         maxHeight: '40%',
//     },
//      locationItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 12,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     locationInfo: {
//         marginLeft: 12,
//         flex: 1,
//     },
//     locationName: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//        locationAddress: {
//         fontSize: 14,
//         color: '#666',
//         marginTop: 2,
//     },
//     map: {
//         width: '100%',
//         height: '100%',
//     },
// });


import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Platform
} from 'react-native';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import LocationPinIcon from 'react-native-vector-icons/Entypo';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { mockLocations } from '../MockData/mockLocation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Location {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}
// Define RootStackParamList if not already defined or import it from your navigation types
type RootStackParamList = {
  LocationScreen: undefined; // Add other screens and their params as needed
};

type CardScreenProps = NativeStackScreenProps<RootStackParamList, 'LocationScreen'>;
const LocationScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    mockLocations.currentLocation
  );
  const [searchQuery, setSearchQuery] = useState('');

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
  };

  // Ask for location permission on Android
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
    }
  }, []);

  // Get current GPS location on mount
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setSelectedLocation({
          id: 'real-time',
          name: 'Your Current Location',
          address: 'Detected via GPS',
          latitude,
          longitude
        });
      },
      error => {
        console.log('GPS Error:', error.message);
        // Fallback to mock location
        setSelectedLocation(mockLocations.currentLocation);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  // Update marker when search query matches a location
  useEffect(() => {
    const matchedLocation = mockLocations.nearbyLocations.find(loc =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchedLocation) {
      setSelectedLocation(matchedLocation);
    }
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <ArrowLeftIcon name="arrowleft" size={24} color="#000" />
        <Text style={styles.headerTitle}>Select delivery location</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <SearchIcon name="search" size={18} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for area, street name..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Map View */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: mockLocations.currentLocation.latitude,
          longitude: mockLocations.currentLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
        region={{
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker
          coordinate={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude
          }}
          title={selectedLocation.name}
          description={selectedLocation.address}
        />
      </MapView>

      {/* Location List */}
      <ScrollView style={styles.locationsContainer}>
        {/* Current Location */}
        <TouchableOpacity
          style={[
            styles.locationItem,
            selectedLocation.id === mockLocations.currentLocation.id &&
              styles.selectedLocation
          ]}
          onPress={() => handleLocationSelect(mockLocations.currentLocation)}
        >
          <LocationPinIcon name="location-pin" size={24} color="#FF4757" />
          <View style={styles.locationInfo}>
            <Text style={styles.locationName}>
              {mockLocations.currentLocation.name}
            </Text>
            <Text style={styles.locationAddress}>
              {mockLocations.currentLocation.address}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Nearby Locations */}
        <Text style={styles.sectionTitle}>NEARBY LOCATIONS</Text>
        {mockLocations.nearbyLocations
          .filter(
            location =>
              location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              location.address.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(location => (
            <TouchableOpacity
              key={location.id}
              style={[
                styles.locationItem,
                selectedLocation.id === location.id && styles.selectedLocation
              ]}
              onPress={() => handleLocationSelect(location)}
            >
              <LocationPinIcon name="location-pin" size={20} color="#666" />
              <View style={styles.locationInfo}>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationAddress}>{location.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 12,
    fontWeight: '600'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 16
  },
  locationsContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  sectionTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '500'
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  selectedLocation: {
    backgroundColor: '#f8f8f8'
  },
  locationInfo: {
    marginLeft: 12,
    flex: 1
  },
  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  locationAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 2
  }
});

export default LocationScreen;
