import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={'#CE6262'} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#CE6262',
    paddingTop: 10,
  },
});
