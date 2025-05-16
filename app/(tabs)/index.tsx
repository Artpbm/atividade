import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import CharacterCard from "@/components/CharacterCard";
import Header from '@/components/header'

export default function HomeScreen() {
   interface Character{
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
   }
   const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <>
    <Header />
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          {characters.map(char => (
            <CharacterCard key={char.image} character={char} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 20,
    display: 'flex',
    backgroundColor: "#b5e655",
    justifyContent: "center",
    alignItems: "center", 
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#b5e655",
  }
})
