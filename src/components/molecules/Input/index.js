import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({label, onChangeText, value, secureTextEntry}) => {
  const [border, setBorder] = useState('#E9E9E9');
  const onFocusForm = () => {
    setBorder('#CE6262');
  };
  const onBlurForm = () => {
    setBorder('#E9E9E9');
  };

  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.textInput(border)}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
  }),
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#7D8797',
  },
});
