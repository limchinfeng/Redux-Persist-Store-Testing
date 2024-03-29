import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '../screen/home/home';
import Test from '../screen/home/test';

const Stack = createStackNavigator();
const options = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  gestureEnabled: false,
};

export default function HomeTabs() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={options}>
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen name="Test" component={Test} options={options} />
    </Stack.Navigator>
  );
}
