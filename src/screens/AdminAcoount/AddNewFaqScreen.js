import React, {useState,useEffect} from 'react';
import {View, TextInput, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../../colors';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import { PostReq } from '../../../Api/Requester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';
import ImagePicker from 'react-native-image-picker';
import {CheckBox, Icon} from 'react-native-elements';
import VideoPlayer from 'react-native-video-controls';
const AddNewFaq = ({navigation}) => {
  const [faqType, setFaqType] = useState('Questions');
  const [loading,setLoading] =useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
 const [productImage, setproductImage] = useState('');
 const [isImageUploaded, setIsImageUploaded] = useState(false);
 const videoRef = React.useRef();
  useEffect(() => {
  },[]);
  function selectImage() {
    setFaqType('Videos')
    // console.log('select image')
    // ImagePicker.openPicker({
    //   multiple: true,
    //   mediaType: 'video',
    // }).then((images) => {
    //   console.log('image001', images);
    //   setIsImageUploaded(true);
    //   setproductImage(images);
    // }).catch((e)=>{
    //   console.log('image picker error ',e)
    // });
    const options = {
      title: 'Video Picker', 
      mediaType: 'video', 
      storageOptions:{
        skipBackup:true,
        path:'images'
      }
}
    ImagePicker.showImagePicker(options,(response) => {
      if(response.didCancel){
        console.log('user cancelled');
      }else if (response.error) {
        console.log('ERROR'+response.error);
  
      }else if (response.customButton) {
        console.log('user tapped'+response.customButton);
      }else {
        console.log('image ',response)
    setproductImage(response);
      }
  
  
    })

  }
  function addFeqQuestion(){
    setLoading(true)
    var video = {
      name: 'name.mp4',
      uri: productImage.uri,
      type: 'video/mp4'
  };
    let dataJson = {
        type:faqType,
        question:question,
        answer:answer,
        video:video
    }
    console.log(dataJson)
    // "key":"video","type":"file","value":["/C:/Users/My Computer/Downloads/1587116643_.
    PostReq(JSON.stringify(dataJson),ApiRoute.addFaq).then(res => {
      // alert(JSON.stringify(res))
      //if(res.status == "success"){
        alert(JSON.stringify(res.message))
      //}
      // setRecentAddedArray(res.data)
      setLoading(false)
    })
  }

  return (
    <View style={Styles.container}>
      <Loader isVisible={loading} /> 
      <ScrollView contentContainerStyle={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView2}>
            <Text style={Styles.inputLabelText}>FAQ Type</Text>
            <View style={{height: 15}} />
            <RadioButton.Group
              onValueChange={value => setFaqType(value)}
              value={faqType}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={Styles.radioView}>
                  <RadioButton value="Questions" status={ faqType === 'Questions' ? 'checked' : 'unchecked' }
                  onPress={() => setFaqType('Questions')} />
                  <Text>Questions</Text>
                </View>
                <View style={{width: 15}} />
                <View style={Styles.radioView}>
                  <RadioButton value="Videos" status={ faqType === 'Videos' ? 'checked' : 'unchecked' }
                  onPress={() => setFaqType('Videos')} />
                  <Text>Videos</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Questions</Text>
            <TextInput
              placeholder={''}
              keyboardType={'default'}
              style={Styles.inputStyle}
             // onChange={(q)=>setQuestion(q.toString())}
             //onValueChange={(q)=>setAnswer(q.toString())}
             onChangeText={text => setQuestion(text)}
            />
          </View>
          {faqType === 'Questions' ?
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Answer</Text>
            <TextInput
              placeholder={''}
              keyboardType={'default'}
              multiline={true}
              style={[
                Styles.inputStyle,
                {height: 100, textAlignVertical: 'top'},
              ]}
              //onChange={(q)=>setAnswer(q.toString())}
              onChangeText={text => setAnswer(text)}
            />
          </View>:null
} 
{productImage!==''?
<VideoPlayer
                                                            source={{ uri: Platform.OS === 'ios' ? productImage.uri : productImage.uri }}
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
                                                        />:null
}
          <View style={Styles.inputView}>
            <TouchableNativeFeedback
              style={Styles.deviceuploadBtn}
              onPress={() => selectImage()}
             >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={'device-mobile'} type={'octicon'} size={20} />
                <Text>{'    '}</Text>
                <Text style={Styles.deviceuploadBtnText}>
                  Upload Video
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <TouchableNativeFeedback
            style={Styles.buttonStyle}
            onPress={() => addFeqQuestion()}>
            <Text style={Styles.loginText}>ADD QUESTIONS</Text>
          </TouchableNativeFeedback>
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
    marginBottom:15
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

export default AddNewFaq;
