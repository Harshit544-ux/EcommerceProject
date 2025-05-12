import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  CardScreen: undefined;
  CardDetail: { card: { id: number; image: string; description: string } };
};

type Props = NativeStackScreenProps<RootStackParamList, 'CardDetail'>;

const CardDetail: React.FC<Props> = ({ route }) => {
  const { card } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.idText}>Card ID: {card.id}</Text>
      <Image source={{ uri: card.image }} style={styles.image} />
      <Text style={styles.description}>{card.description}</Text>
    </ScrollView>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  idText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
  },
});
