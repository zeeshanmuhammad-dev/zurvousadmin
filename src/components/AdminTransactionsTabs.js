import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdminTransactionCredited from '../screens/AdminAcoount/AdminTransactionCreditedScreen';
import AdminTransactionDebited from '../screens/AdminAcoount/AdminTransactionDebitedScreen';

const Tab = createMaterialTopTabNavigator();

const AdminTransactionsTabs = () => {
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
        name="AdminTransactionDebited"
        component={AdminTransactionDebited}
        options={{
          title: 'Debited',
        }}
      />
      <Tab.Screen
        name="AdminTransactionCredited"
        component={AdminTransactionCredited}
        options={{
          title: 'Credited',
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminTransactionsTabs;
