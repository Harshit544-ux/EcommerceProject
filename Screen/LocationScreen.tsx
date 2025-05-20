import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TextInput } from 'react-native';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import MapView, { PROVIDER_GOOGLE, UrlTile, Marker } from 'react-native-maps';


const LocationScreen = () => {
    return (
        <SafeAreaView style={styles.locationContainer}>

            <View style={styles.headerContainer}>
                <ArrowLeftIcon name="arrowleft" size={25} color="#000" />
                <Text style={styles.locationText}>Choose address on map </Text>
            </View>

            <View style={
                styles.searchBar
            }>
                <SearchIcon name="search" size={18} color="#000" style={{ margin: 5 }} />
                <TextInput
                    placeholder='Search for your address'
                    style={styles.searchInput}
                />
            </View>



            <View style={{ flex: 1 }}>

             <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.505,
          longitude: -0.09,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* OpenStreetMap Tiles */}
         <UrlTile
  urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
  maximumZ={19}
  flipY={false}
/>


        {/* Marker */}
        <Marker
          coordinate={{ latitude: 51.5, longitude: -0.09 }}
          title="A pretty popup"
          description="Easily customizable."
        />
      </MapView>
                 
            </View>


        <View>
            
        </View>

        </SafeAreaView>
    )
}

export default LocationScreen;

const styles = StyleSheet.create({
    locationContainer: {
        flex: 1,
        // backgroundColor:"red"
    },


    // },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        height: 60,

        // iOS Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,     // Thoda zyada height dena better hota hai
        },
        shadowOpacity: 0.3,  // Opacity thoda increase karein
        shadowRadius: 5,     // Radius thoda bada karen

        // Android Shadow
        elevation: 8,        // Elevation value badha dein for stronger shadow
    },

    locationText: {
        fontSize: 18,
        fontFamily: "Poppins",
        color: "#000"
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: "100%",
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});