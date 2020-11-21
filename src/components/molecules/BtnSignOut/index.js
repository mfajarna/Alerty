import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICSignout} from '../../../assets/icon';

const BtnSignOut = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ICSignout />
      <Text style={styles.text}>Sign Out</Text>
    </TouchableOpacity>
  );
};

export default BtnSignOut;

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#7D8797',
  },
});
