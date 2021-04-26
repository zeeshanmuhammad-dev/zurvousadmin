import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AddInfluencersExistingUsers from '../screens/AdminAcoount/AddInfluencerFromExistingUsersScreen';
import AddNewPartener from '../screens/AdminAcoount/AddNewPartenerScreen';
import AdminPartenerExistingUsers from '../screens/AdminAcoount/AdminPartenerExistingUsers';

const Tab = createMaterialTopTabNavigator();

const AddPartenerTabs = () => {
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
        name="AddNewPartener"
        component={AddNewPartener}
        options={{
          title: 'Add New User',
        }}
      />
      <Tab.Screen
        name="AddInfluencersExistingUsers"
        component={AdminPartenerExistingUsers}
        options={{
          title: 'Edit Existing Users',
        }}
      />
    </Tab.Navigator>
  );
};

export default AddPartenerTabs;
