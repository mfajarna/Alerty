import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ListPerangkat = ({nama, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{nama}</Text>
        </TouchableOpacity>
    )
}

export default ListPerangkat

const styles = StyleSheet.create({
    container:{
        padding: 9,
        backgroundColor: '#CE6262',
        borderRadius: 10,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            height: 100,
            marginBottom: 15
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: 'white',
      }
})
