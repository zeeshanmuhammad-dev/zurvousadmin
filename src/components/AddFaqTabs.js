import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AddInfluencersExistingUsers from '../screens/AdminAcoount/AddInfluencerFromExistingUsersScreen';
import AddNewFaq from '../screens/AdminAcoount/AddNewFaqScreen';
import EditExistingFaq from '../screens/AdminAcoount/EditExistingFaqScreen'; 

const Tab = createMaterialTopTabNavigator();

const AddFaqTabs = () => {
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
        name="AddNewFaq"
        component={AddNewFaq}
        options={{
          title: 'Add New',
        }}
      />
      <Tab.Screen
        name="EditExistingFaq"
        component={EditExistingFaq}
        options={{
          title: 'Edit Existing FAQ',
        }}
      />
    </Tab.Navigator>
  );
};

export default AddFaqTabs;
