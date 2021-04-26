import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Divider} from 'react-native-elements';
import Colors from '../../colors';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import { logout } from '../../assets/Constant/Util';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const PartenerDrawerContentComponent = props => {
  const [userName ,setuserName] = React.useState('')
  const [userId ,setuserId] = React.useState('')

React.useEffect(async()=>{
  try {
    await AsyncStorage.getItem('UserEmail').then((value) =>  setuserId(value))
    await AsyncStorage.getItem('UserName').then((value) =>  setuserName(value))
   // console.log('Data successfully saved')
  } catch (e) {
  //  console.log('Failed to save the data to the storage')
  }

},[])


 async function logOutFuntion(){
  try {
    await AsyncStorage.setItem('UserLogedIn','')
    await AsyncStorage.setItem('UserType','')
    
   // console.log('Data successfully saved')
  } catch (e) {
  //  console.log('Failed to save the data to the storage')
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
          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            showAccessory
            rounded
            size={125}
            accessory={{
              name: 'camera',
              type: 'feather',
              color: '#ffffffff',
            }}
          />
        </View>
          <Text style={Styles.nameText}>{userName}</Text>
      </View>

      <View style={Styles.drawerItemsListView}>
        {/* <TouchableNativeFeedback
          style={Styles.drawerItem}
          onPress={() => props.navigation.navigate('ContactSupport')}>
          <Text style={Styles.drawerItemText}>Contact Support</Text>
        </TouchableNativeFeedback> */}

<TouchableNativeFeedback
          style={Styles.drawerItem}
          onPress={() => props.navigation.navigate('ContactSupport')}>
          <Text style={Styles.drawerItemText}>Contact Support</Text>
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
          onPress={() => logOutFuntion()}>
          <Text style={Styles.drawerItemText}>Logout</Text>
        </TouchableNativeFeedback>
      </View>
    </DrawerContentScrollView>
  );
};

const Styles = StyleSheet.create({
  userInfoView: {
    width: '100%',
    height: 213,
    backgroundColor: Colors.DRAWER_USER_INFO_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -3,
  },
  avatarView: {
    width: 125,
    height: 125,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#ffffffff',
  },
  drawerItemsListView: {
    width: '98%',
    flex: 1,
    backgroundColor: Colors.DRAWER_BACKGROUND,
    paddingBottom: '73%',
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

export default connect(mapStateToProps)(PartenerDrawerContentComponent);
