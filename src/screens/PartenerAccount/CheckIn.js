import React, {useEffect, useRef,useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Colors from '../../../colors';
import { Icon, Divider, SearchBar} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {TouchableNativeFeedback, FlatList} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';
import {StackedBarChart} from 'react-native-chart-kit';
import { UserArray } from '../../../assets/Constant/Feed';
import { TabView, SceneMap } from 'react-native-tab-view';
import { getRecentsgym, getRequest } from '../../../Api/GetRequester';
import Loader from '../../components/Common/Loader';
import ApiRoute from '../../../Api/Apiroute';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {connect} from 'react-redux';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
const KEYS_TO_FILTERS = ['full_name'];
const initialLayout = { width: Dimensions.get('window').width };
const FirstRoute = () => (
  <View style={[{flex:1}, { backgroundColor: '#ff4081' }]} />
);
 
const SecondRoute = () => (
  <View style={[{flex:1}, { backgroundColor: '#673ab7' }]} />
);

const CheckIn = ({navigation,info}) => {
  const [searchValue, setSearchValue] = useState('');
const [recentAddedArray, setRecentAddedArray] = useState('')
  const {width} = Dimensions.get('screen');
  const [isLoading,setLoading] = useState(true)
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'AllUsers ' },
    { key: 'second', title: 'Check out ' },
    { key: 'third', title: 'Check In' },
  ]);
 
  const  [searchTerm, setSearchTerm]=useState('')

  const  [filter, setFilter]=useState('')

   function searchUpdated(term) {
    setSearchTerm(term)
    // setFilter(recentAddedArray.filter(createFilter(term, KEYS_TO_FILTERS)))
  }


  async  function getUsers(){
    setLoading(true)
    let user = await AsyncStorage.getItem('UserLogedIn');
        axios.get("https://imtekh.com/noman/zurovas_backend/api/allChecksUser/"+user,
          {
            params: {
            },
    
            headers: {
              'Accept': "Application/json",
              'Content-Type': "Application/json",
            }
          }).then((response) => {
            console.log('manage user Screen ',response.data)
            setRecentAddedArray(response?.data)
            setLoading(false)
            
          }).catch((error) => {
            console.log('api error get transactions', error)
            setLoading(false)
    
          });
  }

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  function Item({ item }) {
    return (
      <View style={{flex:1,flexDirection:'row',marginTop:10}}>
       <View style={{height:50,width:50,borderRadius:25,backgroundColor:'#cecece'}}/>
       <View style={{flexDirection:'column',marginLeft:15,justifyContent:'space-around'}}>
       <Text style={{}}>{item.user_name}</Text>
       <Text style={{}}>{item.check_in}</Text>
       </View>
      </View>
    );
  }

  useEffect(() => {
    getUsers()
    // navigation.setOptions({
    //   title: '',
    //   headerStyle: {
    //     backgroundColor: Colors.HEADER_BACKGROUND,
    //   },
    //   headerShown: true,
    //   headerLeft: () => (
    //     <View style={Styles.headerLeftView}>
    //      <View style={{height:40,width:40,borderRadius:20,backgroundColor:"#c4c4c4",}}/> 
    //       <Text style={Styles.headerLeftText}>Hunter Ballew</Text>
    //     </View>
    //   ),
    //   headerRight: () => (
    //     <View style={Styles.headerRightView}>
    //       <TouchableNativeFeedback
    //         onPress={() => navigation.navigate('AdminNotifications')}
    //         style={Styles.headerRightIconView}>
    //         <Icon
    //           name={'notifications-none'}
    //           type={'material'}
    //           size={25}
    //           color={'#ffffffff'}
    //           style={Styles.headerRightIcon}
    //         />
    //       </TouchableNativeFeedback>
    //       <TouchableNativeFeedback
    //         onPress={() => navigation.navigate('AdminInbox')}
    //         style={Styles.headerRightIconView}>
    //         <Icon
    //           name={'envelope'}
    //           type={'evilicon'}
    //           size={25}
    //           color={'#ffffffff'}
    //           style={Styles.headerRightIcon}
    //         />
    //       </TouchableNativeFeedback>
    //       <TouchableNativeFeedback onPress={() => navigation.toggleDrawer()}>
    //         <Icon
    //           name={'dots-vertical'}
    //           type={'material-community'}
    //           size={25}
    //           color={'#ffffffff'}
    //           style={Styles.headerRightIcon}
    //         />
    //       </TouchableNativeFeedback>
    //     </View>
    //   ),
    // });
  },[]);

  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}>
         <Loader isVisible={isLoading} />  
      <View style={{margin:8}}>
      <View style={Styles.searchbarView}>
        <SearchBar
          placeholder="Search Users..."
          onChangeText={(term) => { searchUpdated(term) }} 
          value={searchTerm}
          lightTheme
          containerStyle={Styles.searchbarContainer}
          inputContainerStyle={Styles.searchbarInput}
          inputStyle={Styles.searchbarTextInput}
        />
      </View>
      <FlatList
        data={filter===''?recentAddedArray:filter}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
      </View>  
      
    </ScrollView>
 
 
 );
};

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

const mapStateToProps =(state)=>{
  console.log(state);
  return{
      info: state.mainReducer.accoutInfo
  };
}

export default connect(mapStateToProps)(CheckIn);
//export default CheckIn;
