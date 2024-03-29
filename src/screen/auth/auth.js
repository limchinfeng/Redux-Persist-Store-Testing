import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {black} from '../../configs/colors';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../models/home/counterSlice';
import {addUserDetails} from '../../models/home/authSlice';

const userDetails = {
  id: 69,
  username: 'supershuaifeng',
  email: 'kminchelle@qq.com',
  firstName: 'Jeanne',
  lastName: 'Halvorson',
  gender: 'female',
  image: 'https://robohash.org/Jeanne.png?set=set4',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMTIwOTAwMSwiZXhwIjoxNzExMjEyNjAxfQ.F_ZCpi2qdv97grmWiT3h7HcT1prRJasQXjUR4Nk1yo8',
};

const Test = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {value, signIn} = useSelector(state => state.home);
  const {data} = useSelector(state => state.auth);

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
      <View>
        <Text style={styles.titleText}>{value} - {signIn ? 'Signed In' : 'Not Signed In'}</Text>
        <Text  style={styles.titleText}>{data.id ? data.id + " " + data.username : 'Not user'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Plus" onPress={() => dispatch(increment())} />
        <Button title="Minus" onPress={() => dispatch(decrement())} />
        <Button title="User" onPress={() => dispatch(addUserDetails(userDetails))} />
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

export default Test;
