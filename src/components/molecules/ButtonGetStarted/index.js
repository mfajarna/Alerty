import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonGetStarted = ({onPress, text}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGetStarted;

const styles = StyleSheet.create({
  button: {
    width: 152,
    height: 40,
    borderWidth: 1.3,
    borderRadius: 10,
    borderColor: '#F05454',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#F05454',
  },
});
