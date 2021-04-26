import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PartenersTabs from '../TabRoutes/PartenersTabs';
import PartenerDrawerContentComponent from '../../components/PartenerDrawerContentComponents';

const Drawer = createDrawerNavigator();
  
const PartenerDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <PartenerDrawerContentComponent {...props} />}>
      <Drawer.Screen name={'PartenerHome'} component={PartenersTabs} />
    </Drawer.Navigator>
  );
};
 
export default PartenerDrawer;
