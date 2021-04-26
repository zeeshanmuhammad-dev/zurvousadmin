import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdminAllOrdersList from '../screens/AdminAcoount/AdminAllOrdersListScreen';
import nullScreen from '../screens/AdminAcoount/NullScreen';
import Post from '../screens/GymManagerAccout/GymDetails/Post';
import Colors from '../../colors';
import Followers from '../screens/GymManagerAccout/GymDetails/Followers';
import Following from '../screens/GymManagerAccout/GymDetails/Following';

const Tab = createMaterialTopTabNavigator();

const GymDetailsTabs = (props) => {
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
        name="Post"
        component={Post}
        options={{
          title: 'Post',
         // posts:props.route.params.posts
        }}
      />
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{
          title: 'Followers',
          //followers:props.route.params.followers
        }}
      />
      <Tab.Screen
        name="Followings"
        component={Following}
        options={{
          title: 'Following',
         // followings:props.route.params.followings
        }}
      />
    </Tab.Navigator>
  );
};

export default GymDetailsTabs;
