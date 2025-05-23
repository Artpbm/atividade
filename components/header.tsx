import { View, Image, StyleSheet } from "react-native";

export default function Header () {
    return(
        <>
        <View style={styles.container}>
        <Image style={styles.imagem}source={require('@/assets/images/images-removebg-preview.png')}></Image>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#8DB986",
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30
    },
    imagem: {
        width: 320,
        height: 100,
    }
})