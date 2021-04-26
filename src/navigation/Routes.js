import React from 'react';
import {View, Text, Dimensions,StyleSheet} from 'react-native';
import {TouchableNativeFeedback, FlatList} from 'react-native-gesture-handler';
import { Icon, Divider, SearchBar} from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/SigninScreen';
import ResetPasswordMain from '../screens/ResetPasswordMainScreen';
import ResetPasswordConfirmCode from '../screens/ResetPasswordConfirmationCodeScreen';
import ResetPassword from '../screens/ResetPasswordNewScreen';
import ResetPasswordConfirmation from '../screens/PasswordResetConfirmationNoteScreen';
import AdminNotifications from '../screens/AdminAcoount/NotificationScreen';
import AdminInbox from '../screens/AdminAcoount/InboxScreen';
import AdminDrawer from './DrawerNavigators/AdminDrawer';
import Colors from '../../colors';
import FinancialReport from '../screens/AdminAcoount/FinancialReportScreen';
import UserFeedback from '../screens/AdminAcoount/UserFeedbackScreen';
import BugsReport from '../screens/AdminAcoount/BugsReportScreen';
import AdminResetPassword from '../screens/AdminAcoount/ResetPassworScreen';
import AdminTransactions from '../screens/AdminAcoount/AdminTransactionScreen';
import AdminAddGymLocation from '../screens/AdminAcoount/AdminAddGymLocationScreen';
import AdminGymFeatures from '../screens/AdminAcoount/AdminGymFeaturesScreen';
import AdminOrderDetail from '../screens/AdminAcoount/AdminOrderDetailScreen';
import AdminManageGyms from '../screens/AdminAcoount/ManageGymsScreen';
import AdminManageUsers from '../screens/AdminAcoount/AdminManageUsersScreen';
import AdminAddInfluencers from '../screens/AdminAcoount/AddInfluencersScreen';
import AdminAddPartener from '../screens/AdminAcoount/AddPartenerScreen';
import AddTutorial from '../screens/AdminAcoount/AddTutorialsScreen';
import AddProduct from '../screens/AdminAcoount/AddProductsScreen';
import AddFaq from '../screens/AdminAcoount/AddFaqScreen';
import PartenerDrawer from './DrawerNavigators/PartenerDrawer';
import GymDeskDrawer from './DrawerNavigators/GymDeskDrawer';
import GymManagerDrawer from './DrawerNavigators/GymManagerDrawer';
import GymDetails from '../screens/GymManagerAccout/GymDetails';
import GymUsers from '../screens/GymManagerAccout/GymUsers';
import AddGymLocation from '../screens/GymManagerAccout/AddGymLocation';
import AddEmployee from '../screens/GymManagerAccout/DrawerScreen/AddEmployee';
import ViewTransation from '../screens/GymManagerAccout/DrawerScreen/ViewTransation';
import UserStatsTab from '../components/UserStatsTab';
import AddPayment from '../screens/GymManagerAccout/DrawerScreen/AddPayment';
import ContactSupport from '../screens/PartenerAccount/DrawerScreen/ContactSupport';
import SeeAllGymScreen from '../screens/AdminAcoount/SeeAllGymScreen';
import GymDetailScreen from '../screens/AdminAcoount/AdminGymDetailScreen';
import UserDetailScreen from '../screens/AdminAcoount/AdminUserDetailScreen'
import EditFaqScreen from '../screens/AdminAcoount/AdminEditFaqScreen'
import EditMyProfile from '../screens/GymManagerAccout/EditMyProfile'
import InfDetailScreen from '../screens/AdminAcoount/AdminInfDetailScreen'
import PartnerDetailScreen from '../screens/AdminAcoount/AdminPartnerDetailScreen'
import EditInfluencersScreen from '../screens/AdminAcoount/AdminEditInfluencers'
import EditPartnerScreen from '../screens/AdminAcoount/AdminEditPartener'
import SplashScreen from '../screens/Splash';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name={'SplashScreen'}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Signin'}
          component={Signin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ResetPasswordMain'}
          component={ResetPasswordMain}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ResetPasswordConfirmCode'}
          component={ResetPasswordConfirmCode}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ResetPasswordNew'}
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ResetPasswordConfirmation'}
          component={ResetPasswordConfirmation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AdminAccount'}
          component={AdminDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'AdminNotifications'}
          component={AdminNotifications}
          options={{
            title: 'Notifications',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminInbox'}
          component={AdminInbox}
          options={{
            title: 'Inbox',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
         <Stack.Screen
          name={'SeeAllGymScreen'}
          component={SeeAllGymScreen}
          options={{
            title: 'See All',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'GymDetailScreen'}
          component={GymDetailScreen}
          options={{
            title: 'Gym Detail',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'UserDetailScreen'}
          component={UserDetailScreen}
          options={{
            title: 'User Detail',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'InfDetailScreen'}
          component={InfDetailScreen}
          options={{
            title: 'Influencer Detail',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />

<Stack.Screen
          name={'EditInfluencersScreen'}
          component={EditInfluencersScreen}
          options={{
            title: 'Edit Influencer',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />



<Stack.Screen
          name={'PartnerDetailScreen'}
          component={PartnerDetailScreen}
          options={{
            title: 'Partner Detail',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />

<Stack.Screen
          name={'EditPartnerScreen'}
          component={EditPartnerScreen}
          options={{
            title: 'Edit Partner',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />

        <Stack.Screen
          name={'AdminFinancialReport'}
          component={FinancialReport}
          options={{
            title: 'Finance Report',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminUserFeedback'}
          component={UserFeedback}
          options={{
            title: 'Users Feedback',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminBugsReport'}
          component={BugsReport}
          options={{
            title: 'Bugs Report',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminResetPassword'}
          component={AdminResetPassword}
          options={{
            title: 'Reset Password',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminTransactions'}
          component={AdminTransactions}
          options={{
            title: 'My Transactions',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminAddGymLocation'}
          component={AdminAddGymLocation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AdminGymFeatures'}
          component={AdminGymFeatures}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AdminOrderDetail'}
          component={AdminOrderDetail}
          options={{
            title: 'Order Details',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />

<Stack.Screen
          name={'EditFaqScreen'}
          component={EditFaqScreen}
          options={{
            title: 'Edit FAQ',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />


        <Stack.Screen
          name={'AdminManageGyms'}
          component={AdminManageGyms}
          options={{
            title: 'Manage Gyms',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminManageUsers'}
          component={AdminManageUsers}
          options={{
            title: 'Manage Users',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminAddInfluencers'}
          component={AdminAddInfluencers}
          options={{
            title: 'Add Influencers',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AdminAddPartener'}
          component={AdminAddPartener}
          options={{
            title: 'Add Partener',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AddTutorial'}
          component={AddTutorial}
          options={{
            title: 'Add Tutorials',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AddProduct'}
          component={AddProduct}
          options={{
            title: 'Add Products',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <Stack.Screen
          name={'AddFaq'}
          component={AddFaq}
          options={{
            title: 'Add FAQ',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
        />

        <Stack.Screen
          name={'PartenerAccount'}
          component={PartenerDrawer}
          options={{headerShown: false}}
        />

<Stack.Screen
          name={'GymDeskEmployee'}
          component={GymDeskDrawer}
          options={{headerShown: false}}
        />

          <Stack.Screen 
          name={'GymManagerAccount'}
          component={GymManagerDrawer}
          options={{headerShown: false}}
          
          
        />
          <Stack.Screen
          name={'GymDetail'}
          component={GymDetails}
          options={{
            title: '24 Houre Fitness',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
          
          
        />

<Stack.Screen
          name={'EditMyProfile'}
          component={EditMyProfile}
          options={{
            title: 'Edit My Profile',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
          
          
        />
        {/* <Stack.Screen
          name={'AddPayment'}
          component={AddPayment}
          options={{
            title: 'Add Payment',
            headerStyle: {
              backgroundColor: Colors.HEADER_BACKGROUND,
            },
            headerTitleStyle: {
              fontSize: 25,
              color: '#ffffffff',
            },
            headerTintColor: '#ffffffff',
          }}
          
          
        />
AddPayment */}

<Stack.Screen
        name={'GymUsersHome'}
        component={GymUsers}
        options={{
          headerShown: true,
        }}
      /> 
        <Stack.Screen
        name={'AddGymLocation'}
        component={AddGymLocation}
        options={{
          headerShown: true,
        }}
      /> 
      <Stack.Screen
        name={'AddEmployee'}
        component={AddEmployee}
        options={{
          title: "Add employee", 
        }}
      />
       <Stack.Screen
        name={'ViewTransation'}
        component={ViewTransation} 
        options={{
          title: "My Transation",
          headerStyle: {
            backgroundColor: Colors.HEADER_BACKGROUND,
          },
          headerTitleStyle: {
            fontSize: 25,
            color: '#ffffffff',
          },
          headerTintColor: '#ffffffff',
        }}
      />
       <Stack.Screen
        name={'AddPayment'}
        component={AddPayment}
        options={{
          title: "Add Payment",
          headerStyle: {
            backgroundColor: Colors.HEADER_BACKGROUND,
          },
          headerTitleStyle: {
            fontSize: 25,
            color: '#ffffffff',
          },
          headerTintColor: '#ffffffff',
        }}
      />
       <Stack.Screen
        name={'ContactSupport'}
        component={ContactSupport}
        options={{
          title: "Contact Support",
          headerStyle: {
            backgroundColor: Colors.HEADER_BACKGROUND,
          },
          headerTitleStyle: {
            fontSize: 25,
            color: '#ffffffff',
          },
          headerTintColor: '#ffffffff',
        }}
      />
       <Stack.Screen
        name={'UserStatsTab'}
        component={UserStatsTab} 
        options={{
          title: "My Transation",
          headerStyle: {
            backgroundColor: Colors.HEADER_BACKGROUND,
          },
          headerTitleStyle: {
            fontSize: 25,
            color: '#ffffffff',
          },
          headerTintColor: '#ffffffff',
        }}
      />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;




// navigation.setOptions({
  
// });

const Styles = StyleSheet.create({
  headerLeftView: {
    paddingLeft: 8,
    flexDirection:'row',
    alignItems:"center"
  },
  headerLeftText: {
    fontSize: 20,
    marginLeft:5,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
    paddingRight: 8,
  },
  headerRightIconView: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 50,
  },
  headerRightIcon: {
    borderRadius: 50,
  },
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.COLOR_WHITE,
  },
  listView: {
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor: Colors.VIEWS_BACKGROUND,
  },
  listViewHeader: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  listViewHeaderLeftText: {
    fontSize: 22,
  },
  listViewHeaderRightText: {
    fontSize: 16,
  },
  listItemView: {
    paddingVertical: 20,
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 30,
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageView: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.TOUCHABLE_BUTTON,
  },
  listItemTextView: {
    paddingLeft: 10,
    flex: 2,
  },
  listItemTextView2: {
    flex: 2,
  },
  searchbarView: {
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemMenuIcon: {
    alignSelf: 'flex-start',
  },
  listItemText1: {
    fontSize: 18,
  },
  listItemText2: {
    fontSize: 16,
  },
  listItemText3: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.6)',
  },
  listItemdateText: {
    marginTop: 5,
  },
  icon: {
    fontWeight: 'bold',
  },
  listItemLocationTextView: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },
  spacer: {
    height: 10,
  },
  menuStyle: {
    width: 200,
    height: 200,
    //marginRight: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  menuItemStyle: {
    paddingVertical: 10,
  },
  menuTextStyle: {
    fontSize: 18,
  },
  menuDividerStyle: {marginHorizontal: 14},
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  fcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  searchbarContainer: {
    backgroundColor: Colors.BACKGROUND_1,
    borderWidth: 0,
    borderTopColor: Colors.BACKGROUND_1,
    padding: 0,
    borderTopWidth: 0,
    borderBottomColor: Colors.BACKGROUND_1,
  },
  searchbarView: {
  },
  searchbarInput: {
    backgroundColor: Colors.TEXT_INPUT,
    elevation: 4,
  },
  searchbarTextInput: {
    fontSize: 14,
  },
});