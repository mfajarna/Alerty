import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

const Chart = () => {

      const data = {
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 3, 4, 8],
            type: 'scatter',
        };

        const layout = { title: 'My cool chart!' };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
             <Text style={styles.textHeader}>Grafik 3D</Text>
            </View>
            <View style={{ flex:1, paddingHorizontal: 25, marginTop: 20}}>

            </View>
        </View>
    )
}

export default Chart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 24,
      },
    textHeader: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#F05454',
      },
})
