import React,{useEffect,useState}  from 'react';
import {
  View, TextInput, Text, StyleSheet, FlatList, Image
} from 'react-native';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import { Icon, Divider, SearchBar, Button } from 'react-native-elements';

import Colors from '../../../../colors';
import { UserArray, PostArray, FollowersArray, FolloingArray } from '../../../../assets/Constant/Feed';
import { getRecentsgym, getRequest } from '../../../../Api/GetRequester';
import Loader from '../../../components/Common/Loader';
import ApiRoute from '../../../../Api/Apiroute';
const Following = ({ navigation }) => {
  const [isLoading,setLoading] = useState(true)
  const [followings,setFollowingsArray]=useState([])
  function getFollowings(){
    setLoading(true)
    getRequest(ApiRoute.getFollowings+1).then(res => {
        console.log("ffffffffffffffffffffffffff",res)
        if(!res.status){
            setFollowingsArray(res.data)
        }
     
      setLoading(false)
    })
  }
  useEffect(() => {
    getFollowings()
},[]);
  function Item({ item }) {
    return (
      <View style={{ flex: 1, margin: 20}}>
        {/* <Image source={item.image} style={{ height:100,width:"100%",}}/> */}
        <View style={{flex:1, flexDirection: 'row' }}>
        <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: 'black' }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,flex:1,marginHorizontal:10,alignItems:'center'}}>
          <View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
            <Text>{item.full_name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name={'map-marker-outline'}
                type={'material-community'}
                size={25}
                color={'black'}
              />
              <Text>{item.address}</Text>
            </View>
          </View>
          <Button buttonStyle={{}} titleStyle={{fontSize:10}} title="UnFollowing" />
        </View>
        </View>
        <View
  style={{
    borderBottomColor: '#c3c4c5',
    borderBottomWidth: 1,
    paddingTop:5,
  }}
/>
        

      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
<Loader isVisible={isLoading} />
      <FlatList
        data={followings}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
      {/* </ScrollView> */}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_1,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 19,
    marginHorizontal: 30,
    marginTop: 0,
    lineHeight: 30,
    color: '#64676bff',
  },
  innerContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: Colors.BACKGROUND_1,
    //flex: 1,
  },
  inputFields: {
    width: '100%',
  },
  inputView: {
    marginBottom: 20,
  },
  inputLabelText: {
    fontSize: 20,
  },
  inputStyle: {
    backgroundColor: Colors.TEXT_INPUT,
    marginTop: 3,
    paddingLeft: 15,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    elevation: 7,
  },
  spacer: {
    paddingVertical: 20,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.TOUCHABLE_BUTTON,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#ffffffff',
  },
  progressIndicatorBackgroundView: {
    backgroundColor: '#f1f1f1ff',
    width: '100%',
  },
  progressIndicator: {
    backgroundColor: '#226ddcff',
    height: 9,
    width: '33%',
  },
});

export default Following;
