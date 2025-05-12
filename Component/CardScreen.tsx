import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import { cardData } from '../MockData/CardData'
import { NavigationProp } from '@react-navigation/native';

interface CardScreenProps {
  navigation: NavigationProp<any>;
}

const CardScreen: React.FC<CardScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.gridContainer}>
        {cardData.map((item) => {
          return (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity
                key={item.id}
                onPress={()=>navigation.navigate('CardDetail',{card:item})}
              >
              <Text style={styles.title}>{item.id}</Text>
              <Image style={styles.image} source={{uri: item.image}}/>
              <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}
export default CardScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 12,
        marginBottom: 15,
        width: '31%', // Slightly less than 1/3 to account for spacing
    },
    image: {
        width: '100%',
        height: 100, // Reduced height to fit better in grid
        borderRadius: 8,
        marginVertical: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 12, 
    },
})
