import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Auth from '../screen/auth/auth';
import Page from '../screen/auth/page';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const options = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  gestureEnabled: false,
};

export default function AuthTabs() {
    return (
      <Stack.Navigator initialRouteName="Auth" screenOptions={options}>
        <Stack.Screen name="Auth" component={Auth} options={options} />
        <Stack.Screen name="Page" component={Page} options={options} />
      </Stack.Navigator>
    );
}
