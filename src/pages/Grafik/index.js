import MapView, { Marker } from 'react-native-maps';
import firebase from '../../config/Fire'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'

const Grafik = () => {

  const[latitude1,setLatitude1] = useState(0);
  const[longitude1,setLongitude1] = useState(0);

  const[latitude2,setLatitude2] = useState(0);
  const[longitude2,setLongitude2] = useState(0);

   var alat1 = {
     latitude: latitude1,
     longitude: longitude1,
   }

   var alat2 = {
    latitude: latitude2,
    longitude: longitude2,
  }

  var alat3 = {
    latitude: 0,
    longitude: 0,
  }

  var alat4 = {
    latitude: 0,
    longitude: 0,
  }

  useEffect(() => {
    getDataMapsAlat1()
    getDataMapsAlat2()
  },[])

  

  const getDataMapsAlat1 = () => {
    firebase.database()
      .ref('maps/lokasi/alat1/')
      .on('value', res => {
        console.log('alat1', res.val());
        var data = res.val();

          setLatitude1(data.latitude)
          setLongitude1(data.longitude)
        
      })
  }

  const getDataMapsAlat2 = () => {
    firebase.database()
      .ref('maps/lokasi/alat2/')
      .on('value', res => {
        var data = res.val();

          setLatitude2(data.latitude)
          setLongitude2(data.longitude)
        
      })
  }


    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Maps Lokasi Alat</Text>
        </View>
        <View style={styles.content}>
        <MapView
                        style={StyleSheet.absoluteFill}
                            initialRegion={{
                            latitude: 0,
                            longitude: 0,
                            latitudeDelta: 0.009,
                            longitudeDelta: 0.009
                        }}
                    >
                    {/* <Marker coordinate={{ 
                        latitude: 0, 
                        longitude: 0
                      }} /> */}
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
      }
})
