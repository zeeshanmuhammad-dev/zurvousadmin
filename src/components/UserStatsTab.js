import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../../colors';
import UserStats from '../screens/PartenerAccount/UserStats';
import GymStats from '../screens/PartenerAccount/GymStats';
const Tab = createMaterialTopTabNavigator();

const UserStatsTab = () => {
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
          backgroundColor: Colors.HEADER_BACKGROUND,
        },
      }}>
         <Tab.Screen
        name="UserStats"
        component={UserStats}
        options={{
          title: 'UserStats',
        }}
      />
       <Tab.Screen
        name="GymStats"
        component={GymStats}
        options={{
          title: 'GymStats',
        }}
      /> 
     
    </Tab.Navigator>
  );
};

export default UserStatsTab;
