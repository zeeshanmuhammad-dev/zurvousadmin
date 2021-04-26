import React, {useRef, useState,useEffect,useCallback} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Icon, Divider, SearchBar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../../../colors';
import Menu, {MenuItem} from 'react-native-material-menu';
import GymRecentAdded from '../../components/FlatListRows/GymRecentAdded';
import Loader from '../../components/Common/Loader';
import ApiRoute from '../../../Api/Apiroute';
import { getRecentsgym, getRequest } from '../../../Api/GetRequester';
import {connect} from 'react-redux';
import {setInf} from '../../actions/actions'
const AddInfluencersExistingUsers = ({navigation,infs,set}) => {
  const [searchValue, setSearchValue] = useState('');
  const menuRef = useRef([]);
  const [recentAddedArray, setRecentAddedArray] = useState([])
  const [isLoading,setLoading] = useState(true)
  const textRef = useRef();
  useEffect(() => { 
  getInf()
  },[]);

  function getInf(){
    setLoading(true)
    getRequest(ApiRoute.getInf).then(res => {
      setRecentAddedArray(res.data)
      set(res.data)
      setLoading(false)
    })
  }
  const removeItem = useCallback((postion,index) => {
    setLoading(true)
    getRequest(ApiRoute.deleteInf+postion,true).then(res=>{
      alert(res.message)
      recentAddedArray.splice(index,1)
      getInf()
      setLoading(false)
    })
  }, [textRef]); // Don't recreate handleSubmit like [text] would do


  const hideMenu = (postion,index)  => {
    setLoading(true)
    getRequest(ApiRoute.deleteInf+postion,true).then(res=>{
      alert(res.message)
      recentAddedArray.splice(index,1)
      getInf()
      setLoading(false)
    })
    menuRef.current[index].hide();
  };

  const editItem=(item,index)=>{
    navigation.navigate('EditInfluencersScreen',{id:item.id,fullName:item.full_name,email:item.email,
      password:item.password})
      menuRef.current[index].hide();
  }

  const viewDetail=(id,index)=>{
    navigation.navigate('InfDetailScreen',{id});
    menuRef.current[index].hide();
  }

  const showMenu = i => {
    menuRef.current[i].show();
  };

  return (
    <View>
       <Loader isVisible={isLoading} />  
    <ScrollView contentContainerStyle={Styles.container}>
    {infs?.map((item,index)=><View style={Styles.contentView}>
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
                  onPress={() => viewDetail(item.id,index)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  View Profile
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => hideMenu(item.id,index)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  Delete
                </MenuItem>
                <Divider style={Styles.menuDividerStyle} />
                <MenuItem
                  onPress={() => editItem(item,index)}
                  style={Styles.menuItemStyle}
                  textStyle={Styles.menuTextStyle}>
                  Edit
                </MenuItem>
              </Menu>
            </View>
              <Text style={Styles.listItemText3}>{item.email}</Text>
          </View>
        </View>
        <View style={Styles.spacer1} />

      <Divider style={Styles.divider} />

      <View style={Styles.spacer1} />
      </View>)
      }

      {/* <View style={Styles.spacer1} />

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
                  Delete
                </MenuItem>
              </Menu>
            </View>
            <Text style={Styles.listItemText3}>user@gmail.com</Text>
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
                  Delete
                </MenuItem>
              </Menu>
            </View>
            <Text style={Styles.listItemText3}>user@gmail.com</Text>
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
                  Delete
                </MenuItem>
              </Menu>
            </View>
            <Text style={Styles.listItemText3}>user@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={Styles.spacer2} /> */}
    </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    backgroundColor: Colors.BACKGROUND_1,
    //paddingHorizontal: 15,
    paddingVertical: 15,
  },
  contentView: {
    width: '100%',
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
    borderRadius: 50,
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
  menuDividerStyle: {marginHorizontal: 14},
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

//export default AddInfluencersExistingUsers;
const mapStateToProps =(state)=>{
  console.log(state);
  return{
      infs: state.mainReducer.infList
  };
}

const mapDipatchToProps=(dispatch)=>{
  return{
      set:(inf)=> dispatch(setInf(inf))
  };
}

export default connect(mapStateToProps,mapDipatchToProps)(AddInfluencersExistingUsers);