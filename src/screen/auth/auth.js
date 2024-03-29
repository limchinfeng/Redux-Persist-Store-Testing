import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {black} from '../../configs/colors';

const Test = (props) => {
  const {navigation} = props;

  const navigateToDifferentPage = () => {
    navigation.navigate('Page'); // Replace 'Details' with the actual route name
  };

  const navigateToOtherStack = () => {
    navigation.replace('HomeStack', {screen: 'Home'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Stack 2 - Auth</Text>
      <View style={styles.buttonContainer}>
        <Button title="Go to Page" onPress={navigateToDifferentPage} />
        <Button title="Go to Stack 1" onPress={navigateToOtherStack} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%', // Adjust the width as needed
  },
});

export default Test;
