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
import GymManageStack from '../StackRoutes/GymManageStack';
import PartnerHome from '../../screens/PartenerAccount/PartnerHome';
import GymUsers from '../../screens/GymManagerAccout/GymUsers';
import GymEditProfile from '../../screens/GymManagerAccout/GymEditProfile';

const Tab = createBottomTabNavigator();

const GymManagerTabs = () => {
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
        name={'GymManagerHome'}
        component={GymManageStack}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name={'home'} type={'antdesign'} size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'GymUsers'}
        component={GymUsers}
        options={{
          title: 'Manage User',
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'users'}
              type={'feather'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'GymEditProfile'}
        component={GymEditProfile}
        options={{
          title: 'Edit profile',
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'user-edit'}
              type={'font-awesome-5'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default GymManagerTabs;
