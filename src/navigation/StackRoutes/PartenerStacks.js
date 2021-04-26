import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PartnerHome from '../../screens/PartenerAccount/PartnerHome';
import ContactSupport from '../../screens/PartenerAccount/DrawerScreen/ContactSupport';

const Stack = createStackNavigator();

const PartenerHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'PartenerHomePage'}
        component={PartnerHome}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name={'ContactSupport'}
        component={ContactSupport}
        options={{
          title: "Contact Support",
        }}
      />
    </Stack.Navigator>
  );
};

export default PartenerHomeStack;
