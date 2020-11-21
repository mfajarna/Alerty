import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BtnIcon from '../BtnIcon';

const Header = ({onPress, text}) => {
  return (
    <View style={styles.container}>
      <BtnIcon onPress={onPress} />
      <View style={styles.textHeader}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 21,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#F05454',
  },
  textHeader: {
    flex: 1,
    justifyContent: 'center',
  },
});
