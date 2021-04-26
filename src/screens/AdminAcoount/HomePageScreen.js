import React, { useEffect, useRef, useState,useContext,useCallback, useMemo } from 'react';
import { View, Text,LogBox } from 'react-native';
import Colors from '../../../colors';
import { Icon, Divider, ThemeContext } from 'react-native-elements';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { TouchableNativeFeedback, FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { getRecentsgym, getRequest } from '../../../Api/GetRequester';
import GymRecentAdded from '../../components/FlatListRows/GymRecentAdded';
import Loader from '../../components/Common/Loader';
import ApiRoute from '../../../Api/Apiroute';
import {connect} from 'react-redux';
import {setGymm} from '../../actions/actions'
LogBox.ignoreLogs(['Warning: ...']);
const HomePage = ({ navigation ,setGymm,gyms}) => {
  const menuRef = useRef([]);
  const textRef = useRef();

  const [recentAddedArray, setRecentAddedArray] = useState('')
  const [notiAddedArray, setNotiAddedArray] = useState([])
  const [isLoading,setLoading] = useState(true)

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: Colors.HEADER_BACKGROUND,
      },
      headerShown: true,
      headerLeft: () => (
        <View style={Styles.headerLeftView}>
          <Text style={Styles.headerLeftText}>DASHBOARD</Text>
        </View>
      ),
      headerRight: () => (
        <View style={Styles.headerRightView}>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('AdminNotifications')}
            style={Styles.headerRightIconView}>
            <Icon
              name={'notifications-none'}
              type={'material'}
              size={25}
              color={'#ffffffff'}
              style={Styles.headerRightIcon}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('AdminInbox')}
            style={Styles.headerRightIconView}>
            <Icon
              name={'envelope'}
              type={'evilicon'}
              size={25}
              color={'#ffffffff'}
              style={Styles.headerRightIcon}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.toggleDrawer()}>
            <Icon
              name={'dots-vertical'}
              type={'material-community'}
              size={25}
              color={'#ffffffff'}
              style={Styles.headerRightIcon}
            />
          </TouchableNativeFeedback>
        </View>
      ),
    });
    getRecentGym()
    getNotifications()
  },[]);

  function getRecentGym(){
    getRecentsgym().then(res => {
      if(res.data)
     { setRecentAddedArray(res.data)
      setGymm(res.data)}
      setLoading(false)
    })
  }
  const removeItem = useCallback((postion,index) => {
    setLoading(true)
    getRequest(ApiRoute.deleteGym+postion).then(res=>{
     // alert(res.message)
    //  recentAddedArray.splice(index,1)
      setLoading(false)
      getRecentGym()
    })
  }, [textRef]); // Don't recreate handleSubmit like [text] would do

  const aproveItem = useCallback((postion,index) => {
    setLoading(true)
    getRequest(ApiRoute.aproveGym+postion).then(res=>{
     // alert(res.message)
      //recentAddedArray.splice(index,1)
      setLoading(false)
      getRecentGym()
    })
  }, [textRef]); // Don't recreate handleSubmit like [text] would do

  function getNotifications(){
    setLoading(true)
    getRequest(ApiRoute.allNotifications+1).then(res => {
    //  console.log("tyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyygdf",res)
      if(!res.status){
        setNotiAddedArray(res.data)
    }
      setLoading(false)
    })
  }

  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}>
      <Loader isVisible={isLoading} />  
      <View style={Styles.listView}>
        <View style={Styles.listViewHeader}>
          <Text style={Styles.listViewHeaderLeftText}>Gym recently added</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('SeeAllGymScreen')}}>
          <Text style={Styles.listViewHeaderRightText}>See all</Text>

          </TouchableOpacity>
        </View>
        <Divider />
        <View style={Styles.listItemView}>
         {useMemo(()=> <FlatList
            data={gyms}
            renderItem={({ item,index }) => <GymRecentAdded navigation={navigation} index={index} item={item} 
            callBackRemove={removeItem} callBackAprove={aproveItem}/>}
            keyExtractor={item => item.id}
          />,[gyms])}

        </View>
      </View>

      <View style={Styles.spacer} />

      <View style={Styles.listView}>
        
        <View style={Styles.listViewHeader}>
          <Text style={Styles.listViewHeaderLeftText}>Notifications</Text>
          <Text style={Styles.listViewHeaderRightText}>See all</Text>
        </View>
        <Divider />
        <View style={Styles.listItemView}>
        {notiAddedArray?.map((item, index) =>
        <View style={Styles.listItem}>
        <View style={Styles.listItemTextView2}>
          <Text>
            <Text style={Styles.listItemText1}>{item.post_title}</Text>
            <Text style={Styles.listItemText3}>added</Text>
          </Text>
          <View style={Styles.listItemLocationTextView}>
            <Text style={Styles.listItemText3}>  {item.message}</Text>
          </View>
        </View>
        <Text style={Styles.listItemdateText}>{item.time}</Text>
      </View>
        )}
          {/* <View style={Styles.listItem}>
            <View style={Styles.listItemTextView2}>
              <Text>
                <Text style={Styles.listItemText1}>York Street Crossfit</Text>
                <Text style={Styles.listItemText3}> added</Text>
              </Text>
              <View style={Styles.listItemLocationTextView}>
                <Text style={Styles.listItemText3}>new location on Texas</Text>
              </View>
            </View>
            <Text style={Styles.listItemdateText}>01/01/2020</Text>
          </View> */}

          {/* <View style={Styles.listItem}>
            <View style={Styles.listItemTextView2}>
              <Text>
                <Text style={Styles.listItemText1}>York Street Crossfit</Text>
                <Text style={Styles.listItemText3}> added</Text>
              </Text>
              <View style={Styles.listItemLocationTextView}>
                <Text style={Styles.listItemText3}>new location on Texas</Text>
              </View>
            </View>
            <Text style={Styles.listItemdateText}>01/01/2020</Text>
          </View> */}

          {/* <View style={Styles.listItem}>
            <View style={Styles.listItemTextView2}>
              <Text>
                <Text style={Styles.listItemText1}>York Street Crossfit</Text>
                <Text style={Styles.listItemText3}> added</Text>
              </Text>
              <View style={Styles.listItemLocationTextView}>
                <Text style={Styles.listItemText3}>new location on Texas</Text>
              </View>
            </View>
            <Text style={Styles.listItemdateText}>01/01/2020</Text>
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

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
  menuDividerStyle: { marginHorizontal: 14 },
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


const mapStateToProps =(state)=>{
  console.log(state);
  return{
      gyms: state.mainReducer.gymList
  };
}

const mapDipatchToProps=(dispatch)=>{
  return{
      setGymm:(inf)=> dispatch(setGymm(inf))
  };
}

export default connect(mapStateToProps,mapDipatchToProps)(HomePage);
//export default HomePage;
