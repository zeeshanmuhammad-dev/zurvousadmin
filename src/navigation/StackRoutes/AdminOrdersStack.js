import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AdminOrders from '../../screens/AdminAcoount/AdminOrdersScreen';

const Stack = createStackNavigator();

const AdminOrdersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AdminOrdersStack'}
        component={AdminOrders}
        options={{ 
          title: 'Orders', 
        }}
      />
    </Stack.Navigator>
  ); 
};
 
export default AdminOrdersStack;
