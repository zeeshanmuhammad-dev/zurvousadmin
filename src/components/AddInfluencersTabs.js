import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AddNewInfluencers from '../screens/AdminAcoount/AddNewInfluencersScreen';
import AddInfluencersExistingUsers from '../screens/AdminAcoount/AddInfluencerFromExistingUsersScreen';

const Tab = createMaterialTopTabNavigator();

const AddInfluencersTabs = () => {
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
        name="AddNewInfluencers"
        component={AddNewInfluencers}
        options={{
          title: 'Add New',
        }}
      />
      <Tab.Screen
        name="AddInfluencersExistingUsers"
        component={AddInfluencersExistingUsers}
        options={{
          title: 'Edit Existing Users',
        }}
      />
    </Tab.Navigator>
  );
};

export default AddInfluencersTabs;
