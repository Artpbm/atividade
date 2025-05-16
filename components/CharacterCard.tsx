import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image"
interface Character {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string; 
}
export default function CharacterCard({character} : {character : Character}){

    return(
        <View style={styles.card}>
        <Image source={character.image} style={styles.image} />
        <View style={styles.info}>  
          <Text style={styles.text}> Nome: {character.name}</Text>
          <Text style={styles.text}> Status: {character.status}</Text>
          <Text style={styles.text}> Espécie: {character.species}</Text>
          <Text style={styles.text}> Genêro: {character.gender}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1f4c1f', 
        padding: 10,
        borderRadius: 8,
        width: 200,
        alignItems: 'center',
    },
    
    image: {
        width: 120,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
    },

    info: {
        alignItems: 'flex-start',
        width: '100%',
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 4,
    }

})