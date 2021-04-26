import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminTabs from '../TabRoutes/AdminTabs';
import CustomDrawerContent from '../../components/DrawerContentComponents';

const Drawer = createDrawerNavigator();

const AdminDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={'AdminHome'} component={AdminTabs} />
    </Drawer.Navigator>
  );
};

export default AdminDrawer;
