import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import AdminHomeStack from '../StackRoutes/AdminStacks';
import AdminAddGym from '../../screens/AdminAcoount/AdminAddGymScreen';
import AdminOrders from '../../screens/AdminAcoount/AdminOrdersScreen';
import AdminMoreOptions from '../../screens/AdminAcoount/AdminMoreOptionScreen';
import FinancialReport from '../../screens/AdminAcoount/FinancialReportScreen';
import nullScreen from '../../screens/AdminAcoount/NullScreen';
import PartenerHomeStack from '../StackRoutes/PartenerStacks';
import UserStats from '../../screens/PartenerAccount/UserStats';
import UserStatsTab from '../../components/UserStatsTab';
const Tab = createBottomTabNavigator();

const PartenersTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#226ddcff',
        },
        activeTintColor: '#ffffffff',
        inactiveTintColor: '#f2f7fcff',
      }}>
      <Tab.Screen
        name={'PartenerHomeTab'}
        component={PartenerHomeStack}
        options={{ 
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name={'home'} type={'antdesign'} size={size} color={color} />
          ),
        }}
      />

<Tab.Screen
        name={'UserStats'}
        component={UserStatsTab}
        options={{
          title: 'User Stats',
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'login'}
              type={'material-community'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'AdminFinancialReport'}
        component={FinancialReport}
        options={{
          title: 'Financial Report',
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'logout'}
              type={'material-community'}
              size={size}
              color={color}
            />
          ),
        }}
      />
   
    </Tab.Navigator>
  );
};

export default PartenersTabs;
