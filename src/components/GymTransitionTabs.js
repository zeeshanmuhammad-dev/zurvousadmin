import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdminAllOrdersList from '../screens/AdminAcoount/AdminAllOrdersListScreen';
import nullScreen from '../screens/AdminAcoount/NullScreen';
import Post from '../screens/GymManagerAccout/GymDetails/Post';
import Colors from '../../colors';
import Followers from '../screens/GymManagerAccout/GymDetails/Followers';
import Following from '../screens/GymManagerAccout/GymDetails/Following';
import Credites from '../screens/GymManagerAccout/Tabs/Credites';
import Debited from '../screens/GymManagerAccout/Tabs/Debited';

const Tab = createMaterialTopTabNavigator();

const GymTransitionTabs = () => {
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
        name="Credit"
        component={Credites}
        options={{
          title: 'Credit',
        }}
      />
      <Tab.Screen
        name="Debit"
        component={Debited}
        options={{
          title: 'Debit',
        }}
      />
    </Tab.Navigator>
  );
};

export default GymTransitionTabs;
