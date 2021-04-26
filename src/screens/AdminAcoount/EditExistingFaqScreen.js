import React, {useState, useRef,useEffect} from 'react';
import {View, TextInput, Text, StyleSheet, Image,FlatList} from 'react-native';
import Colors from '../../../colors';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import Menu, {MenuItem} from 'react-native-material-menu';
import {Icon, Divider, Card} from 'react-native-elements';
import Loader from '../../components/Common/Loader';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';
import VideoPlayer from 'react-native-video-controls';
const EditExistingFaq = ({navigation}) => {
  const [userType, setUserType] = useState('');
  const menuRef = useRef([]);
  const [faqs, setFaqs] = useState('');
  const [isVisible, setisVisible] = useState(false)
  const [Videos, setVideos] = useState([])
  const videoRef = React.useRef();
  const hideMenu =( item,i )=> {
    navigation.navigate('EditFaqScreen',{id:item.id,type:item.type,question:item.question,answer:item.answer,video:item.video});
    menuRef.current[i].hide();
  };

  const showMenu = i => {
    menuRef.current[i].show();
  };

  useEffect(() => {
    setisVisible(true)
    getFaqs()
  },[])


  const callBackFaq=((postion,index) => {
    setisVisible(true)
      getRequest(ApiRoute.deleteFaq+postion).then(res=>{
        alert(res.message)
        users.splice(index,1)
        getFaqs()
        setisVisible(false)
      })
    });
    
    const deleteFaq=(item,index,i)=>{
      callBackFaq(item.id,index+1)
    menuRef.current[i].hide();
      }

  function getFaqs(){
    getRequest(ApiRoute.faqs).then(res => {
      console.log('previous faqs ',res.data)
      const temp=[]
      res?.data?.map((item,key)=>{
        if(item.video!==''&&item.video!=='0'){
          temp.push(item)

        }
      })
      setVideos(temp)
      setFaqs(res.data)
      setisVisible(false)
    })
  }

  return (
    <View style={Styles.container}>
      <Loader isVisible={isVisible} />
      <ScrollView contentContainerStyle={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>All questions</Text>
            <FlatList
        data={faqs}
        renderItem={({ item, index }) => 
            <View
              style={{
                backgroundColor: Colors.TEXT_INPUT,
                marginTop: 15,
                padding: 15,
                elevation: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>
                  {item.question}
                </Text>
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
                    onPress={() => hideMenu(item,index)}
                    style={Styles.menuItemStyle}
                    textStyle={Styles.menuTextStyle}>
                    Edit
                  </MenuItem>
                  <Divider style={{marginHorizontal: 5}} />
                  <MenuItem
                    onPress={() => hideMenu(0)}
                    style={Styles.menuItemStyle}
                    textStyle={Styles.menuTextStyle}>
                    Delete
                  </MenuItem>
                </Menu>
              </View>
              <Text style={{marginTop: 13}}>
                {item.answer}
              </Text>
            </View>
            }
            keyExtractor={item => item.id}
          />
          </View>
  
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>All Videos</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{marginTop: 15, flexDirection: 'row'}}>
              <View style={{width: 20}} />
              {Videos?.map((value,i)=>{
               return(
                <Card containerStyle={{padding: 0, margin: 0}}>
                <View style={Styles.user}>
                
<VideoPlayer
                                                            source={{ uri: Platform.OS === 'ios' ? value.uri : value?.uri }}
                                                            ref={videoRef}
                                                            navigator={navigation}
                                                            style={Styles.video}
                                                            rate={1.0}
                                                            //   repeat
                                                            disableBack
                                                            disableVolume
                                                            volume={1.0}
                                                            muted={false}
                                                            paused={false}
                                                        // disablePlayPause
                                                        />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingVertical: 10,
                    }}>
                    <Text
                      style={{fontWeight: 'bold', fontSize: 14, marginLeft: 5}}>
                      {value.question}
                    </Text>
                    <Menu
                      ref={r => (menuRef.current[2] = r)}
                      button={
                        <Icon
                          name={'dots-vertical'}
                          type={'material-community'}
                          size={15}
                          // style={{}}
                          onPress={() => showMenu(2)}
                        />
                      }
                      style={Styles.menuStyle}>
                      <MenuItem
                        onPress={() => hideMenu(2)}
                        style={Styles.menuItemStyle}
                        textStyle={Styles.menuTextStyle}>
                        Edit
                      </MenuItem>
                      <Divider style={{marginHorizontal: 5}} />
                      <MenuItem
                        onPress={() => hideMenu(2)}
                        style={Styles.menuItemStyle}
                        textStyle={Styles.menuTextStyle}>
                        Delete
                      </MenuItem>
                    </Menu>
                  </View>
                </View>
              </Card>
               )
              })

              }
 
              <View style={{width: 20}} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_1,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  },
  innerContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
    //justifyContent: 'flex-end',
    alignItems: 'center',
    //flex: 1,
  },
  inputFields: {
    width: '100%',
    //bottom: 30,
  },
  inputView: {
    marginBottom: 20,
  },
  inputView2: {
    marginBottom: 20,
  },
  inputLabelText: {
    fontSize: 16,
  },
  inputStyle: {
    backgroundColor: Colors.TEXT_INPUT,
    height: 50,
    marginTop: 5,
    paddingLeft: 15,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: '#dce9f6ff',
    //fontWeight: 'bold',
  },
  checkBoxContainerStyle: {
    backgroundColor: '#f2f7fcff',
    elevation: 0,
    borderWidth: 0,
    paddingLeft: 0,
    marginLeft: 0,
    marginTop: -10,
    marginBottom: 30,
  },
  checkBoxTextStyle: {
    fontSize: 19,
    fontWeight: 'normal',
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.TOUCHABLE_BUTTON,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    //textAlignVertical: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#ffffffff',
  },
  resetPasswordView: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPasswordTouchable: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 50,
  },
  resetPasswordText: {
    fontSize: 19,
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceuploadBtn: {
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dee2e7ff',
  },
  deviceuploadBtnText: {
    fontSize: 18,
  },
 video: {
    flex: 1,
   width:250,
   height:250,
   marginVertical:10
},

});

export default EditExistingFaq;
