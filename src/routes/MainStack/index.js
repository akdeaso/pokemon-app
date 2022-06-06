import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Home from '../../screens/Home';
import Detail from '../../screens/Detail';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default MainStack;
