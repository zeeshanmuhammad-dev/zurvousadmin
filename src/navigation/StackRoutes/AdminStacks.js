import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../../screens/AdminAcoount/HomePageScreen';

const Stack = createStackNavigator();

const AdminHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AdminHomePage'}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  ); 
};
 
export default AdminHomeStack;
