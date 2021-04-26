import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdminManageGymExisting from '../screens/AdminAcoount/ManageGymExisting';
import AdminManageGymNewEntry from '../screens/AdminAcoount/ManageGymNewEntry';

const Tab = createMaterialTopTabNavigator();

const AdminManageGymsTabs = () => {
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
        name="AdminManageGymExisting"
        component={AdminManageGymExisting}
        options={{
          title: 'Existing Gyms',
        }}
      />
      <Tab.Screen
        name="AdminManageGymNewEntry"
        component={AdminManageGymNewEntry}
        options={{
          title: 'New Gym Entry',
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminManageGymsTabs;
