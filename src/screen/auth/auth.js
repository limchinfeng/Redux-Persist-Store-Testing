import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {black} from '../../configs/colors';

const Auth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello Auth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Add this line to center horizontally
  },
  titleText: {
    color: black,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Auth;
