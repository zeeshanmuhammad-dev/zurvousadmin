import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PartnerHome from '../../screens/PartenerAccount/PartnerHome';
import ContactSupport from '../../screens/PartenerAccount/DrawerScreen/ContactSupport';
import GymHome from '../../screens/GymManagerAccout/GymHome';
import AddEmployee from '../../screens/GymManagerAccout/DrawerScreen/AddEmployee';
import ViewTransation from '../../screens/GymManagerAccout/DrawerScreen/ViewTransation';
import AddPayment from '../../screens/GymManagerAccout/DrawerScreen/AddPayment';
import GymUsers from '../../screens/GymManagerAccout/GymUsers';
import GymEditProfile from '../../screens/GymManagerAccout/GymEditProfile';
import AddGymLocation from '../../screens/GymManagerAccout/AddGymLocation';

const Stack = createStackNavigator();

const GymManageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'GymHome'}
        component={GymHome}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
};

export default GymManageStack;
