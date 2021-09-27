import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ic_micro } from '../../../assets/icon'

const ListPerangkat = ({nama, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ flexDirection: 'row',alignItems: 'center', flex: 1, paddingLeft: 20 }}>
                <View style={{ marginRight: 10 }}>
                    <Ic_micro />
                </View>
                <Text style={styles.text}>{nama}</Text>
            </View>
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
        fontSize: 18,
        color: 'white',
        
      }
})
