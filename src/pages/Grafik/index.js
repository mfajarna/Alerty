import MapView, { Marker, Polygon } from 'react-native-maps';
import firebase from '../../config/Fire'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { data } from '../../config/koordinat/data';

const Grafik = () => {

  var[coordinatesMap,setCoordinatesMap] = useState(
    [
    {
      latitude: -6.6639748597510104,
      longitude: 110.89615712393828
    },
    {
      latitude: -6.665118366643557,
      longitude : 110.89623585994238
    },
    {
      latitude: -6.66538964577073,
      longitude : 110.89514416825693
    },
    {
      latitude: -6.664481658695943,
      longitude : 110.89518968684962
    }
  ])

    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Maps Lokasi Alat</Text>
        </View>
        <View style={styles.content}>
        <MapView
                        style={StyleSheet.absoluteFill}
                            initialRegion={{
                            latitude: -6.6639748597510104,
                            longitude: 110.89615712393828,
                            latitudeDelta: 0.009,
                            longitudeDelta: 0.009
                        }}
                    >

                        <Polygon
                          coordinates={coordinatesMap}
                          fillColor={'rgba(100,100,200,0.3)'}
                        />

                     {data.map(item => {
                        return(
                          
                          <Marker
                          key={item.id}
                          coordinate={item.coords}
                          >
                          <Text style={styles.textMarker}>{item.nama}</Text>
                          </Marker>  
                    
                          )
                      })} 
                    </MapView>
        </View>
        </View>
    )
}

export default Grafik

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F9F9F9',
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
      content:{
        flex: 1
      },
      textMarker:{
        fontFamily: 'Poppins-Regular',
        color: '#F05454',
      }
})
