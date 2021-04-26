import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import nullScreen from '../screens/AdminAcoount/NullScreen';
import AdminAllOrdersList from '../screens/AdminAcoount/AdminAllOrdersListScreen';
import AdminPendingOrdersList from '../screens/AdminAcoount/AdminPendingOrdersListScreen';
import AdminCompOrdersList from '../screens/AdminAcoount/AdminCompOrdersList';
const Tab = createMaterialTopTabNavigator();

const AdminOrdersTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 18,
          textTransform: 'none',
          color: '#ffffffff',
        },
        indicatorStyle: {
          backgroundColor: '#ffffffff',
        },
        style: {
          backgroundColor: '#46BAFF',
        },
      }}>
      <Tab.Screen
        name="AdminAllOrdersList"
        component={AdminAllOrdersList}
        options={{
          title: 'All Orders',
        }}
      />
      <Tab.Screen
        name="New Orders"
        component={AdminPendingOrdersList}
        options={{
          title: 'New Orders',
        }}
      />
      <Tab.Screen
        name="Completed"
        component={AdminCompOrdersList}
        options={{
          title: 'Completed',
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminOrdersTabs;
