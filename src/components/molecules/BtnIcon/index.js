import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICArrowBack} from '../../../assets/icon';

const BtnIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ICArrowBack />
    </TouchableOpacity>
  );
};

export default BtnIcon;

const styles = StyleSheet.create({});
