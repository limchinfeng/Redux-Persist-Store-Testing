import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { black } from '../../configs/colors';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, setSignIn } from '../../models/home/counterSlice';

const Home = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const {value, signIn} = useSelector(state => state.home);
  const {data} = useSelector(state => state.auth);

  const navigateToDifferentPage = () => {
    navigation.navigate('Test'); // Replace 'Details' with the actual route name
  };

  const navigateToOtherStack = () => {
    navigation.replace('AuthStack', {screen: 'Auth'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Stack 1 - Home</Text>
      <View style={styles.buttonContainer}>
        <Button title="Go to Test" onPress={navigateToDifferentPage} />
        <Button title="Go to Stack 2" onPress={navigateToOtherStack} />
      </View>
      <View>
        <Text style={styles.titleText}>{value} - {signIn ? 'Signed In' : 'Not Signed In'}</Text>
        <Text  style={styles.titleText}>{data.id ? data.id + " " + data.username : 'Not user'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Plus" onPress={() => dispatch(increment())} />
        <Button title="Plus 4" onPress={() => dispatch(incrementByAmount(4))} />
        <Button title="Minus" onPress={() => dispatch(decrement())} />
        <Button title="set Sign in" onPress={() => dispatch(setSignIn())} />
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
    justifyContent: 'center',
    gap: 5,
    width: '80%', // Adjust the width as needed
  },
});


export default Home;
