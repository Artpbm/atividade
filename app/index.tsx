import { Image, SafeAreaView, StyleSheet } from "react-native";


export default function HomeScreen(){
    return(
        <>
        <SafeAreaView style={styles.container}> 
           <Image style={styles.imagem}source={require('@/assets/images/images-removebg-preview.png')}></Image>
           <Image style={styles.cabecario} source={require('@/assets/images/gg-removebg-preview.png')}></Image>
        </SafeAreaView> 
        </>
    )
}   

const styles = StyleSheet.create({
    cabecario: {
        width: "419px",
        height: "319px",
        
    },
    
    imagem: {
        width: "300px",
        height: "100px",
        alignItems: "center",
        paddingVertical: 10,
        resizeMode: "contain",
        marginBottom: 20,
    },
    
    container: {
        backgroundColor: "#b5e655",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})