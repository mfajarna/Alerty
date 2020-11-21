import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICHeader} from '../../assets/illustration';
import {ButtonGetStarted, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ICHeader />
      </View>
      <Text style={styles.notif}>NOTIFICATION</Text>
      <Text style={styles.text}>Monitoring Sistem Mitigasi Penanggulangan</Text>
      <Text style={styles.text2}>Bencana Tanah Longsor Berbasis</Text>
      <Text style={styles.text2}>Internet of Things</Text>
      <Gap height={91} />
      <ButtonGetStarted
        text="Get Started"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    marginTop: 55,
    marginBottom: 83,
  },
  notif: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#F05454',
    marginBottom: 27,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#797979',
    maxWidth: 400,
    textAlign: 'center',
  },
  text2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#797979',
  },
});
