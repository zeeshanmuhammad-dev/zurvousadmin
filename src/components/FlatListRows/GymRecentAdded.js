import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { Icon, Divider, SearchBar } from 'react-native-elements';
import Menu, {MenuItem} from 'react-native-material-menu';

import Colors from '../../../colors';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';

export default function GymRecentAdded({navigation,index, item ,callBackRemove,callBackAprove}) {
    const menuRef = useRef([]);
    const hideMenu = i => {
      //alert("hello"+item.id)
      navigation.navigate('GymDetailScreen',{id:item.id});
        menuRef.current[i].hide();
      };

      
     const deleteItem=(i)=>{
      callBackRemove(item.id,index+1)
      menuRef.current[i].hide();
       
      //  getRequest('api/delete-gym/12').then(res=>{
      //    let status = res.status;
      //    if(status=="error"){

      //    }else if(status=="success"){

      //    }
      //    alert(JSON.stringify(res))
      //  })

      }

      const aproveItem=(i)=>{
        callBackAprove(item.id,index+1)
        menuRef.current[i].hide();
        }
    
      const showMenu = i => {
        menuRef.current[i].show();
      };

  return (
   
    <View style={Styles.listItem}>
    <View style={Styles.imageView} />
    <View style={Styles.listItemTextView}>
  <Text style={Styles.listItemText1}>{item.full_name}</Text>
      <View style={Styles.listItemLocationTextView}>
        <Icon
          name={'location'}
          type={'evilicon'}
          size={18}
          style={Styles.icon}
        />
        <Text style={Styles.listItemText2}>{item.full_name1}</Text>
      </View>
    </View>
    <Menu
      ref={r => (menuRef.current[0] = r)}
      button={
        <Icon
          name={'dots-vertical'}
          type={'material-community'}
          size={25}
          style={Styles.listItemMenuIcon}
          onPress={() => showMenu(0)}
        />
      }
      style={Styles.menuStyle}>
      <MenuItem
        onPress={() => hideMenu(0)}
        style={Styles.menuItemStyle}
        textStyle={Styles.menuTextStyle}>
        View more
      </MenuItem>
      <Divider style={Styles.menuDividerStyle} />
      <MenuItem
        onPress={() => aproveItem(0)}
        style={Styles.menuItemStyle}
        textStyle={Styles.menuTextStyle}>
        Approve on listing
      </MenuItem>
      <Divider style={Styles.menuDividerStyle} />
      <MenuItem
        onPress={() => deleteItem(0)}
        style={Styles.menuItemStyle}
        textStyle={Styles.menuTextStyle}>
        Delete
      </MenuItem>
    </Menu>
    {/**<TouchableNativeFeedback>
      <Icon
        name={'dots-vertical'}
        type={'material-community'}
        size={25}
        style={Styles.listItemMenuIcon}
      />
    </TouchableNativeFeedback>**/}
  </View>

  );
}

const Styles = StyleSheet.create({
    headerLeftView: {
      paddingLeft: 8,
    },
    headerLeftText: {
      fontSize: 20,
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
      //flex: 1,
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
  });
  
