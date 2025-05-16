import { View, Image, StyleSheet } from "react-native";

export default function Headerlol () {
    return(
        <>
        <View style={styles.container}>
        <Image style={styles.imagem}source={require('@/assets/images/league-of-legends.png')}></Image>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#3EC1E8",
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30
    },
    imagem: {
        width: 100,
        height: 100,
    }
})