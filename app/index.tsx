import { router } from "expo-router";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import Header from '@/components/header'

export default function HomeScreen(){
    const onPress = () => {
        router.push("/(tabs)")
    }
    return(
        <>
        <Header/>
        <SafeAreaView style={styles.container}> 
           <Image style={styles.cabecario} source={require('@/assets/images/gg-removebg-preview.png')}></Image>
           <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text>Clique aqui</Text>
            </TouchableOpacity>
        </SafeAreaView> 
        </>
    )
}   

const styles = StyleSheet.create({
    cabecario: {
        width: 419,
        height: 319,
        display: "flex",
    },
    btn: {
        backgroundColor: "#ACCE91",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 70,
        borderWidth: 1,
        borderColor: "black", 
    },
    container: {
        gap: 100,
        backgroundColor: "#b5e655",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})