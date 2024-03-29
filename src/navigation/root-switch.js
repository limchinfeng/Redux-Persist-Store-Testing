import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeTabs from './home-tab';
import AuthTabs from './auth-tab';


const Stack = createStackNavigator();
const options = {
    headerShown: false,
    gestureEnabled: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

function RootStack() {

    return (
      <Stack.Navigator screenOptions={options} initialRouteName='HomeStack'>
        <Stack.Screen options={options} name="HomeStack" component={HomeTabs} />
        <Stack.Screen options={options} name="AuthStack" component={AuthTabs} />
      </Stack.Navigator>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         isLoading: state.common.get('isLoading'),
//         userToken: state.auth.get('userToken'),
//         user: state.auth.get('user'),
//         // isLoading: state.common.isLoading,
//         // userToken: state.auth.userToken,
//         // user: state.auth.user,
//     };
// };

export default RootStack;

// export default connect(mapStateToProps)(RootStack);