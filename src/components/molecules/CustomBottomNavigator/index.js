import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Ic_about_off, Ic_about_on, Ic_chart_off, Ic_chart_on, Ic_home_off, Ic_home_on, Ic_stats_off, Ic_stats_on } from '../../../assets/icon';


const Icon = ({label, focus}) => {
  switch (label) {
    case 'Dashboard':
      return focus ? <Ic_home_on /> : <Ic_home_off />;
    case 'Maps':
      return focus ? <Ic_stats_on /> : <Ic_stats_off />;
    case 'About Us':
      return focus ? <Ic_about_on /> : <Ic_about_off />;
    case 'Chart':
      return focus ? <Ic_chart_on /> : <Ic_chart_off />;
  }
};

const CustomButtomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.nav}>
              <Icon style={styles.icon} label={label} focus={isFocused} />
              <Text style={styles.label}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomButtomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 13,
    paddingBottom: 8,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  nav: {
    alignItems: 'center',
  },
});
