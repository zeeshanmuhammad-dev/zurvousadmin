import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import AdminHomeStack from '../StackRoutes/AdminStacks';
import AdminAddGym from '../../screens/AdminAcoount/AdminAddGymScreen';
import AdminOrders from '../../screens/AdminAcoount/AdminOrdersScreen';
import AdminMoreOptions from '../../screens/AdminAcoount/AdminMoreOptionScreen';

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#226ddcff',
         
        },
        activeTintColor: '#ffffffff',
        inactiveTintColor: '#f2f7fcff',
        keyboardHidesTabBar:true
      }}>
      <Tab.Screen
        name={'AdminHomeTab'}
        component={AdminHomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name={'home'} type={'antdesign'} size={size} color={color} />
          ),
        }}
      /> 

      <Tab.Screen
        name={'AdminAddGym'}
        component={AdminAddGym}
        options={{
          title: 'Add New Gym',
          tabBarIcon: ({color, size}) => (
            <Icon name={'plus'} type={'antdesign'} size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'ViewOrders'}
        component={AdminOrders}
        options={{
          title: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'shopping-bag'}
              type={'feather'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'MoreOptions'}
        component={AdminMoreOptions}
        options={{
          title: 'More',
          tabBarIcon: ({color, size}) => (
            <Icon name={'menu'} type={'entypo'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminTabs;
