import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GymDeskTab from '../TabRoutes/GymDeskTab';
import GymDeskDrawerContentcomponents from '../../components/GymDeskDrawerContentcomponents';

const Drawer = createDrawerNavigator();
  
const GymDeskDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <GymDeskDrawerContentcomponents {...props} />}>
      <Drawer.Screen name={'GymDeskHome'} component={GymDeskTab} />
    </Drawer.Navigator>
  );
};
 
export default GymDeskDrawer;
