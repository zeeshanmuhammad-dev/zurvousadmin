import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PartenersTabs from '../TabRoutes/PartenersTabs';
import GymManagerTabs from '../TabRoutes/GymManagerTabs';
import GymManagerDrawerContentComponent from '../../components/GymManagerDrawerContentComponent';

const Drawer = createDrawerNavigator();

const GymManagerDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <GymManagerDrawerContentComponent {...props} />}>
      <Drawer.Screen name={'GymManagerHome'} component={GymManagerTabs} />
    </Drawer.Navigator>
  );
};
 
export default GymManagerDrawer;
