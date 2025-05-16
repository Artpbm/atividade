
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import data from '@/constants/data'
import { Item } from '@/components/item'
import Headerlol from '@/components/headerlol' 

export default function TabTwoScreen() {
  return (
   <>
    <Headerlol/>
    <SafeAreaView style={styles.container}>
     <FlatList data={data} renderItem={({item}) => (
        <Item name={item.nome} titulo={item.Titulo} image={item.imagem}/>
     )}
     keyExtractor={(item) => item.id}
     />
    </SafeAreaView>
   </>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#B3E5FC",
    paddingTop: 20,
  }
})