import { View, StyleSheet, Text } from 'react-native'
import { Image } from 'expo-image'

export const Item = ({name, titulo, image} : {name: string, titulo: string, image: string}) => {
    return(
        <View style={styles.itemList}>
            <Image style={styles.imageStyle} source={image}/>
            <View style={styles.text}>
            <Text  style={styles.nome}>{name}</Text>
            <Text  style={styles.titulo}>{titulo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemList: {
        flexDirection: 'row',
        backgroundColor: '#0D47A1',
        padding: 10,
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    nome: {
        color: 'white',
    },

    text: {
        flex: 1,
        alignItems: 'flex-end',
    },
    titulo: {
        color: 'white',
    },

    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    }
})
