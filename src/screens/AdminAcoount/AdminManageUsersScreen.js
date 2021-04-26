import React, {useRef, useState,useEffect} from 'react';
import {View, Image, StyleSheet,FlatList  ,ScrollView} from 'react-native';
import {Text, Icon, Divider, SearchBar} from 'react-native-elements';
//import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../../../colors';
import Menu, {MenuItem} from 'react-native-material-menu';
import Loader from '../../components/Common/Loader';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';
import SearchInput, { createFilter } from 'react-native-search-filter';
import ManageGymRows from '../../components/FlatListRows/ManageGymRows';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import axios from 'axios'
const KEYS_TO_FILTERS = ['full_name'];
const AdminManageUsers = ({navigation}) => { 

  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState('');
  const [isVisible, setisVisible] = useState(false)
  const menuRef = useRef([]);
  const  [searchTerm, setSearchTerm]=useState('')

  const  [filter, setFilter]=useState('')

   function searchUpdated(term) {
    setSearchTerm(term)
    setFilter(users.filter(createFilter(term, KEYS_TO_FILTERS)))
  }
  const hideMenu = i => {
    menuRef.current[i].hide();
  };

  const showMenu = i => {
    menuRef.current[i].show();
  };

  const viewDetail=( i,id )=> {
    navigation.navigate('UserDetailScreen',{id});
    menuRef.current[i].hide();
  };

  useEffect(() => {
    setisVisible(true)
    getUsers()
  },[])

  const  getUsers=async()=>{
    let user = await AsyncStorage.getItem('UserLogedIn');
        axios.get("https://imtekh.com/noman/zurovas_backend/api/users-list",
          {
            params: {
            },
    
            headers: {
              'Accept': "Application/json",
              'Content-Type': "Application/json",
            }
          }).then((response) => {
            console.log('manage user Screen ',response.data.data)
           setUsers(response.data?.data)
            setisVisible(false)
            
          }).catch((error) => {
            console.log('api error get transactions', error)
            setisVisible(false)
    
          });
   
  }

 const callBackDelete=((postion,index) => {
  setisVisible(true)
    getRequest(ApiRoute.deleteUser+postion).then(res=>{
      alert("Record Deleted",res)
      users.splice(index,1)
      setisVisible(false)
      getUsers()
    })
  });
  
  const deleteUser=(item,index,i)=>{
    callBackDelete(item,index+1)
  menuRef.current[i].hide();
    }

  return (
    <ScrollView contentContainerStyle={Styles.container}>
  
      <View style={Styles.searchbarView}>

        <SearchBar
          placeholder="Search users..."
          onChangeText={(term) => { searchUpdated(term) }} 
          value={searchTerm}
          lightTheme
          containerStyle={Styles.searchbarContainer}
          inputContainerStyle={Styles.searchbarInput}
          inputStyle={Styles.searchbarTextInput}
        />
      </View>

      <FlatList
        data={filter===''?users:filter}
        renderItem={({ item, index }) => 
      <View>
        <View style={Styles.spacer2} />
        <Divider style={Styles.divider} />

        <View style={Styles.contentView}>
          <View style={Styles.contentMainView}>
            <View style={Styles.contentMainViewImageView}>
              <Image
                source={require('../../../assets/images/sample-profile-img.jpg')}
                style={Styles.imageStyle}
              />
            </View>
            <View style={Styles.contentMainViewTextView}>
              <View style={Styles.titleView}>
                <Text style={Styles.nameText}>{item.full_name}</Text>
                <Menu
                  ref={r => (menuRef.current[index] = r)}
                  button={
                    <Icon
                      name={'dots-vertical'}
                      type={'material-community'}
                      size={25}
                      style={Styles.listItemMenuIcon}
                      onPress={() => showMenu(index)}
                    />
                  }
                  style={Styles.menuStyle}>
                  <MenuItem
                    onPress={() => viewDetail(index,item.id)}
                    style={Styles.menuItemStyle}
                    textStyle={Styles.menuTextStyle}>
                    View Profile
                  </MenuItem>
                  <Divider style={Styles.menuDividerStyle} />
                  <MenuItem
                    onPress={() => hideMenu(index)}
                    style={Styles.menuItemStyle}
                    textStyle={Styles.menuTextStyle}>
                    View Transaction
                  </MenuItem>
                  <Divider style={Styles.menuDividerStyle} />
                  <MenuItem
                    onPress={() => deleteUser(item.id,index,index)}
                    style={Styles.menuItemStyle}
                    textStyle={Styles.menuTextStyle}>
                    Delete
                  </MenuItem>
                </Menu>
              </View>
                <Text style={Styles.listItemText3}>{item.phone_no}</Text>
            </View>
          </View>
        </View>
      </View>

      }
        keyExtractor={item => item.id}
      />

      {/* <View style={Styles.spacer2} />

      <Divider style={Styles.divider} />

      <View style={Styles.spacer1} />

      <View style={Styles.contentView}>
        <View style={Styles.contentMainView}>
          <View style={Styles.contentMainViewImageView}>
            <Image
              source={require('../../../assets/images/sample-profile-img.jpg')}
              style={Styles.imageStyle}
            />
          </View>
          <View style={Styles.contentMainViewTextView}>
            <View style={Styles.titleView}>
              <Text style={Styles.nameText}>Hunter Ballew</Text>
              <Menu
                ref={r => (menuRef.current[3] = r)}
                button={
                  <Icon
                    name={'dots-vertical'}
                    type={'material-community'}
                    size={25}
                    style={Styles.listItemMenuIcon}
                    onPress={() => showMenu(3)}
                  />
                }
                style={Styles.menuStyle}>
                <MenuItem
                  onPress={() => hideMenu(3)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  View Profile
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(3)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  View Transaction
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(3)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  Delete
                </MenuItem>
              </Menu>
            </View>
            <Text style={Styles.listItemText3}>12456 78765 624543453</Text>
          </View>
        </View>
      </View>

      <View style={Styles.spacer1} />

      <Divider style={Styles.divider} />

      <View style={Styles.spacer1} />

      <View style={Styles.contentView}>
        <View style={Styles.contentMainView}>
          <View style={Styles.contentMainViewImageView}>
            <Image
              source={require('../../../assets/images/sample-profile-img.jpg')}
              style={Styles.imageStyle}
            />
          </View>
          <View style={Styles.contentMainViewTextView}>
            <View style={Styles.titleView}>
              <Text style={Styles.nameText}>Hunter Ballew</Text>
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
                  View Profile
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(0)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  View Transaction
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(0)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  Delete
                </MenuItem>
              </Menu>
            </View>
            <Text style={Styles.listItemText3}>12456 78765 624543453</Text>
          </View>
        </View>
      </View>

      <View style={Styles.spacer1} />

      <Divider style={Styles.divider} />

      <View style={Styles.spacer1} />

      <View style={Styles.contentView}>
        <View style={Styles.contentMainView}>
          <View style={Styles.contentMainViewImageView}>
            <Image
              source={require('../../../assets/images/sample-profile-img.jpg')}
              style={Styles.imageStyle}
            />
          </View>
          <View style={Styles.contentMainViewTextView}>
            <View style={Styles.titleView}>
              <Text style={Styles.nameText}>Hunter Ballew</Text>
              <Menu
                ref={r => (menuRef.current[1] = r)}
                button={
                  <Icon
                    name={'dots-vertical'}
                    type={'material-community'}
                    size={25}
                    style={Styles.listItemMenuIcon}
                    onPress={() => showMenu(1)}
                  />
                }
                style={Styles.menuStyle}>
                <MenuItem
                  onPress={() => hideMenu(1)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  View Profile
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(1)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  View Transaction
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(1)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  Delete
                </MenuItem>
              </Menu>
            </View>
            <Text style={Styles.listItemText3}>12456 78765 624543453</Text>
          </View>
        </View>
      </View>

      <View style={Styles.spacer1} />

      <Divider style={Styles.divider} />

      <View style={Styles.spacer1} />

      <View style={Styles.contentView}>
        <View style={Styles.contentMainView}>
          <View style={Styles.contentMainViewImageView}>
            <Image
              source={require('../../../assets/images/sample-profile-img.jpg')}
              style={Styles.imageStyle}
            />
          </View>
          <View style={Styles.contentMainViewTextView}>
            <View style={Styles.titleView}>
              <Text style={Styles.nameText}>Hunter Ballew</Text>
              <Menu
                ref={r => (menuRef.current[2] = r)}
                button={
                  <Icon
                    name={'dots-vertical'}
                    type={'material-community'}
                    size={25}
                    style={Styles.listItemMenuIcon}
                    onPress={() => showMenu(2)}
                  />
                }
                style={Styles.menuStyle}>
                <MenuItem
                  onPress={() => hideMenu(2)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  View Profile
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(2)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  View Transaction
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(2)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  Delete
                </MenuItem>
              </Menu>
            </View>
            <Text style={Styles.listItemText3}>12456 78765 624543453</Text>
          </View>
        </View>
      </View> */}

      <View style={Styles.spacer2} />
      <Loader isVisible={isVisible} />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: { 
    flex: 1,
    width: '100%',
    backgroundColor: Colors.BACKGROUND_1,
    //paddingHorizontal: 15,
    paddingVertical: 15,
},
listItem: {
    backgroundColor: 'yellow',
    margin: 16
    //alignItems: 'center',
},
contentView: {
    marginTop: 5,
    flex: 1,
    paddingHorizontal: 15,
    //paddingVertical: 20,
    backgroundColor: '#ffffffff',
    borderRadius: 5,
    //elevation: 5,
},
statusView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
},
idText: {
    fontSize: 17,
    fontWeight: 'bold',
},
statusText: {
    fontSize: 12,
},
contentMainView: {
    flexDirection: 'row',
    //marginTop: 4,
    alignItems: 'center',
    //marginBottom: 30,
},
contentMainViewImageView: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    borderWidth: 0.3,
    borderRadius: 75 / 2,
},
imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius:50
},
contentMainViewTextView: {
    flex: 2,
    paddingLeft: 15,
},
nameText: {
    fontSize: 16.5,
    fontWeight: 'bold',
},
costText: {
    fontSize: 14,
    //fontWeight: 'bold',
},
viewDetailText: {
    fontSize: 15.5,
    marginTop: 15,
    //fontWeight: 'bold',
},
divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
},
contentViewList: {
    paddingVertical: 15,
},
listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
textStyle1: {
    fontSize: 17,
},
textStyle2: {
    fontSize: 17,
    fontWeight: 'bold',
},
spacer: {
    height: 30,
},
spacer1: {
    height: 20,
},
spacer2: {
    height: 10,
},
divider2: {
    height: 2,
    backgroundColor: '#dadadaff',
},
listItemLocationTextView: {
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: -5,
    alignItems: 'center',
},
listItemLocationTextViewInner: {
    flexDirection: 'row',
    alignItems: 'center',
},
listItemText2: {
    fontSize: 12,
},
listItemText3: {
    fontSize: 12,
    marginTop: 3,
},
titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
menuStyle: {
    //width: 200,
    //height: 200,
    //marginRight: 15,
    //paddingVertical: 20,
    borderRadius: 10,
},
menuDividerStyle: { marginHorizontal: 14 },
searchbarContainer: {
    backgroundColor: Colors.BACKGROUND_1,
    borderWidth: 0,
    borderTopColor: Colors.BACKGROUND_1,
    padding: 0,
    borderTopWidth: 0,
    borderBottomColor: Colors.BACKGROUND_1,
},
searchbarView: {
    paddingHorizontal: 15,
},
searchbarInput: {
    backgroundColor: Colors.TEXT_INPUT,
    elevation: 4,
},
searchbarTextInput: {
    fontSize: 14,
},
});

export default AdminManageUsers;
