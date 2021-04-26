import React, { useEffect, useRef, useState,useContext,useCallback, useMemo } from 'react';
import {View, Text,FlatList} from 'react-native';
import Colors from '../../../colors';
import {Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';
import UserFeedBackRow from '../../components/FlatListRows/UserFeedBackRow';

const UserFeedback = ({navigation}) => {
  const [loading,setLoading] = useState(true)
  const [userFeedBackData,setuserFeedBackData] = useState("")
  const textRef = useRef();
  

  
  useEffect(() => {
    getUserFeedBack()
  },[]);

  function getUserFeedBack(){
    getRequest(ApiRoute.feedback).then(res => {
      setuserFeedBackData(res.data)
      setLoading(false)
    })
  }

  
  const removeItem = useCallback((postion,index) => {
    setLoading(true)
    getRequest(ApiRoute.deleteFeedBack+postion).then(res=>{
      alert(res.message)
      // recentAddedArray.splice(index,1)
      getUserFeedBack()

    })
  }, [textRef]); // Don't recreate handleSubmit like [text] would do

  return (
    <View style={Styles.container}>
      <Loader isVisible={loading}/>  
       <FlatList
            data={userFeedBackData}
            renderItem={({ item,index }) => <UserFeedBackRow index={index} item={item} callBack={removeItem}/>}
            keyExtractor={item => item.id}
          />

    
    </View>
  );
};

const Styles = StyleSheet.create({
  headerLeftView: {
    paddingLeft: 8,
  },
  headerLeftText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  listItem: {
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: Colors.VIEWS_BACKGROUND,
  },
  listItemHeader: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  listItemHeaderLeftText: {
    fontSize: 22,
  },
  listItemHeaderRightText: {
    fontSize: 15,
  },
  listContentView: {
    paddingVertical: 0,
  },
  listContent: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 30,
    //alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageView: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.TOUCHABLE_BUTTON,
  },
  listContentTextView: {
    paddingLeft: 14,
    flex: 2,
  },
  listContentTextView2: {
    flex: 2,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContentMenuIcon: {
    alignSelf: 'flex-start',
  },
  listContentText1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContentText2: {
    fontSize: 18,
  },
  listContentText3: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.6)',
  },
  listContentdateText: {
    marginTop: 5,
  },
  icon: {
    fontWeight: 'bold',
  },
  listContentLocationTextView: {
    flexDirection: 'row',
    marginTop: 0,
    alignItems: 'center',
  },
  spacer: {
    height: 10,
  },
  feedback: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  feedbackDescription: {
    fontSize: 20,
    marginVertical: 20,
    marginBottom: 40,
  },
});

export default UserFeedback;
