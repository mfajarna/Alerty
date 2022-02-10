import AsyncStorage from '@react-native-community/async-storage';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BtnSignOut, Gap } from '../../components';
import firebase from '../../config/Fire'

const About = ({navigation}) => {
    
    const signOut = () => {
    AsyncStorage.removeItem('user').then(res => {
      navigation.reset({index: 0, routes:[{name: 'Login'}]})
      firebase.auth()
      .signOut()
      .then(() => {
        console.log('berhasil')
      })
      .catch((err) => {
        showMessage({
          message: 'Eror Sign Out',
          type: 'default',
          backgroundColor: '#CE6262',
          color: '#FFFF',
        });
      });
    })

  };

    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>About Us</Text>
          
        </View>
        <View>
            <Gap height={20} />
            <Text style={styles.text}>Aplikasi ini dibuat untuk monitoring nilai dari</Text>
            <Text style={styles.text}>Curah Hujan, Kelembaban Tanah, Kemiringan Tanah dan Pergeseran Tanah</Text>
            <Text style={styles.text}>Yang akan menghasilkan status kebencaan yaitu Waspada dan Bahaya</Text>
        </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 24,
    },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#F05454',
  },
  text:{
      fontSize: 15,
      fontFamily: 'Poppins-SemiBold',
      color: '#F05454',
  }
})
