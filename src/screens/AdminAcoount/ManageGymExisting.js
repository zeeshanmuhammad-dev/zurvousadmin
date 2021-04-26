import React, { useRef, useCallback, useState, useEffect } from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Icon, Divider, SearchBar} from 'react-native-elements';
import {ScrollView,FlatList} from 'react-native-gesture-handler';
import Colors from '../../../colors';
import Menu, {MenuItem} from 'react-native-material-menu';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';
import ManageGymRows from '../../components/FlatListRows/ManageGymRows';
import Loader from '../../components/Common/Loader';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['full_name'];


const AdminManageGymExisting = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [newGym, setnewGyms] = useState('');
  const [isVisible, setisVisible] = useState(false)
  const menuRef = useRef([]);
  const textRef = useRef();
  const  [searchTerm, setSearchTerm]=useState('')

  const  [filter, setFilter]=useState('')

   function searchUpdated(term) {
    setSearchTerm(term)
    setFilter(newGym.filter(createFilter(term, KEYS_TO_FILTERS)))
  }
  useEffect(() => {
    setisVisible(true)
    newGymEntry()

    // getRecentGym() 
  }, []);

  function newGymEntry() {
    getRequest(ApiRoute.existingGym).then(res => {
      console.log(res.data)
      setnewGyms(res.data)

      setisVisible(false)
    })
  }


  const removeItem = useCallback((postion,index) => {
    setisVisible(true)
    getRequest(ApiRoute.deleteGym+postion).then(res=>{
      alert(res.message)
      //newGym.splice(index,1)
      newGymEntry()
      setisVisible(false)
    })
  }, [textRef]); // Don't recreate handleSubmit like [text] would do

  const aproveItem = useCallback((postion,index) => {
    setisVisible(true)
    getRequest(ApiRoute.aproveGym+postion).then(res=>{
      alert(res.message)
      //existingGym.splice(index,1)
      newGymEntry()
      setisVisible(false)
    })
  }, [textRef]); // Don't recreate handleSubmit like [text] would do

  return (
    <View>
    
    {/* <ScrollView contentContainerStyle={Styles.container}> */}
    <View style={Styles.container}>

      <View style={Styles.searchbarView}>
        <SearchBar
          placeholder="Search Gyms... "
          onChangeText={(term) => { searchUpdated(term) }} 
          value={searchTerm}
          lightTheme
          containerStyle={Styles.searchbarContainer}
          inputContainerStyle={Styles.searchbarInput}
          inputStyle={Styles.searchbarTextInput}
        />
      </View>
      <FlatList
        data={filter===''?newGym:filter}
        renderItem={({ item, index }) => <ManageGymRows index={index} item={item} navigation={navigation} 
        callBackRemove={removeItem} callBackAprove={aproveItem}/>}
        keyExtractor={item => item.id}
      />
    </View>

    <Loader isVisible={isVisible} />
     {/* </ScrollView> */}
     </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    backgroundColor: Colors.BACKGROUND_1,
    //paddingHorizontal: 15,
    
    paddingTop: 15,
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
    width: '60%',
    height: '60%',
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

export default AdminManageGymExisting;
