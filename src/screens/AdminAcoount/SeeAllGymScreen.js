import React, { useEffect, useRef, useState,useContext,useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../colors';
import { Icon, Divider, ThemeContext } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { TouchableNativeFeedback, FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { getRecentsgym, getRequest } from '../../../Api/GetRequester';
import GymRecentAdded from '../../components/FlatListRows/GymRecentAdded';
import Loader from '../../components/Common/Loader';
import ApiRoute from '../../../Api/Apiroute';

const SeeAllGymScreen = ({ navigation }) => {
  const menuRef = useRef([]);
  const textRef = useRef();

  const [recentAddedArray, setRecentAddedArray] = useState('')
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
  },[]);

  function getRecentGym(){
    getRequest(ApiRoute.seeAllGym).then(res => {
      setRecentAddedArray(res.data)
      setLoading(false)
    })
  }
  const removeItem = useCallback((postion,index) => {
    setLoading(true)
    getRequest(ApiRoute.deleteGym+postion).then(res=>{
      alert(res.message)
     // recentAddedArray.splice(index,1)
      getRecentGym()
      setLoading(false)
    })
  }, [textRef]); // Don't recreate handleSubmit like [text] would do

  const aproveItem = useCallback((postion,index) => {
    setLoading(true)
    getRequest(ApiRoute.aproveGym+postion).then(res=>{
      alert(res.message)
      //recentAddedArray.splice(index,1)
      getRecentGym()
      setLoading(false)
    })
  }, [textRef]); // Don't recreate handleSubmit like [text] would do

  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={Styles.listView}>
        <Divider />
        <View style={Styles.listItemView}>
         {useMemo(()=> <FlatList
            data={recentAddedArray}
            renderItem={({ item,index }) => <GymRecentAdded index={index} item={item} callBack={removeItem}  navigation={navigation} 
            callBackRemove={removeItem} callBackAprove={aproveItem}/>}
            keyExtractor={item => item.id}
          />,[recentAddedArray])}

        </View>
      </View>
      <Loader isVisible={isLoading} />  

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

export default SeeAllGymScreen;
