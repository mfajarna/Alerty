import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F05454',
    height: 45,
    borderRadius: 10,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFF',
  },
});
