import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import Colors from '../../colors';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import { logout } from '../../assets/Constant/Util';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Image } from 'react-native';
const CustomDrawerContent = props => {

 async function logOutFuntion(){
    try {
      await AsyncStorage.setItem('UserLogedIn','')
      await AsyncStorage.setItem('UserType','')
      
      console.log('Data successfully saved')
    } catch (e) {
      console.log('Failed to save the data to the storage')
    }
    // props.navigation.navigate('Signin')
    // alert("hello")
    logout().then(res=>{
      // alert(res)
      props.navigation.replace('Signin')
    })
  } 
  return (
    <DrawerContentScrollView
      {...props}
      style={{backgroundColor: Colors.DRAWER_USER_INFO_BACKGROUND}}>
      {/**<DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => props.navigation.navigate('Signin')}
      />**/}
      <View style={Styles.userInfoView}>
        <View style={Styles.avatarView}>
          <Image style={{height:125,width:125}} source={require('../../assets/images/noprofile.png')} resizeMode='contain'/>
         
        </View>
        <Text style={Styles.nameText}>{props?.info?.name}</Text>
      </View>

      <View style={Styles.drawerItemsListView}>
        <TouchableNativeFeedback
          style={Styles.drawerItem}
          onPress={() => props.navigation.navigate('AdminFinancialReport')}>
          <Text style={Styles.drawerItemText}>Financial Report</Text>
        </TouchableNativeFeedback>

        <Divider style={Styles.divider} />

        <TouchableNativeFeedback
          style={Styles.drawerItem}
          onPress={() => props.navigation.navigate('AdminTransactions')}>
          <Text style={Styles.drawerItemText}>View Transactions</Text>
        </TouchableNativeFeedback>

        <Divider style={Styles.divider} />

        <TouchableNativeFeedback
          style={Styles.drawerItem}
          onPress={() => props.navigation.navigate('AdminBugsReport')}>
          <Text style={Styles.drawerItemText}>Bug Reports</Text>
        </TouchableNativeFeedback>

        <Divider style={Styles.divider} />

        <TouchableNativeFeedback
          style={Styles.drawerItem}
          onPress={() => props.navigation.navigate('AdminUserFeedback')}>
          <Text style={Styles.drawerItemText}>User Feedback</Text>
        </TouchableNativeFeedback>

        <Divider style={Styles.divider} />

        <TouchableNativeFeedback
          style={Styles.drawerItem}
          onPress={() => props.navigation.navigate('AdminResetPassword')}>
          <Text style={Styles.drawerItemText}>Reset Password</Text>
        </TouchableNativeFeedback>

        <Divider style={Styles.divider} />

        <TouchableNativeFeedback
          style={Styles.drawerItem}
          onPress={() =>logOutFuntion() }>
          <Text style={Styles.drawerItemText}>Logout</Text>
        </TouchableNativeFeedback>
      </View>
    </DrawerContentScrollView>
  );
};

const Styles = StyleSheet.create({
  userInfoView: {
    width: '100%',
    height:'30%',
    backgroundColor: Colors.DRAWER_USER_INFO_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -3,
  },
  avatarView: {
    width: 125,
    height: 110,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'black',
  },
  drawerItemsListView: {
    width: '98%',
    flex: 1,
    backgroundColor: Colors.DRAWER_BACKGROUND,
    paddingBottom: '18%',
   // height:'70%'
  },
  drawerItem: {
    width: '100%',
    height: 65,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  drawerItemText: {
    fontSize: 20,
    //marginLeft: 10,
  },
  divider: {
    //height: 1,
    marginLeft: 10,
    width: '90%',
  },
});


const mapStateToProps =(state)=>{
  console.log(state);
  return{
      info: state.mainReducer.accoutInfo
  };
}

export default connect(mapStateToProps)(CustomDrawerContent); 
