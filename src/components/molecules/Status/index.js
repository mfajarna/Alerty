import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Status = ({type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 99,
    backgroundColor: '#CE6262',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: '#E9E9E9',
  },
});
