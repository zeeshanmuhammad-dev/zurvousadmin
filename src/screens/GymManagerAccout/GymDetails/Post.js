import React,{useEffect,useState} from 'react';
import {View, TextInput, Text, StyleSheet,  FlatList,Image
} from 'react-native';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import Colors from '../../../../colors';
import { UserArray,PostArray } from '../../../../assets/Constant/Feed';
import { getRecentsgym, getRequest } from '../../../../Api/GetRequester';
import Loader from '../../../components/Common/Loader';
import ApiRoute from '../../../../Api/Apiroute';

const Post = ({navigation}) => {
  const [posts,setPostsArray]=useState([])
  const [isLoading,setLoading] = useState(true)
  function getPosts(){
    setLoading(true)
    getRequest(ApiRoute.getPosts).then(res => {
        console.log("ffffffffffftttttfffffffffffffff",res)
        if(!res.status){
            setPostsArray(res.data)
        }
    
      setLoading(false)
    })
  }

  useEffect(() => {
    getPosts()
},[]);

  function Item({ item }) {
    return (
      <View style={{flex:1/3, flexDirection: 'column', margin: 3}}>
        <Image source={{uri:item.postimage}} style={{ height:100,width:"100%",}}/>
      </View>
    );
  }
  return (
    <View style={{flex:1}}>  
      <Loader isVisible={isLoading} />
        <FlatList
        data={posts}
        numColumns={3}
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

export default Post;
