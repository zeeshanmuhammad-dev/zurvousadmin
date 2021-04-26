import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Image
} from 'react-native';
import Colors from '../../../colors';
import {CheckBox, Icon} from 'react-native-elements';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import {PostReq, axiosReq} from '../../../Api/Requester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';
 import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
//import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import VideoPlayer from 'react-native-video-controls';
const AddTutorial = ({navigation}) => {
  const [userType, setUserType] = useState(0);
  const  [name, setName] = useState('');
 const   [category, setCategory] = useState('');
  const  [courcePrice, setCourcePrice] = useState('$');
  const  [productImage, setproductImage] = useState('');
  const   [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const videoRef = React.useRef();

  function selectImage() {
    setUserType(1)
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
        setIsImageUploaded(true);
    setproductImage(response);
      }
  
  
    })

  }


  async function addTutorial() {
    if (name == '') {
      alert('Enter Tutorial name');
    } else if (category == '') {
      alert('Enter Tutorial category');
    } else {
    setLoading(true);
    console.log(name, category + courcePrice);
    let formData = new FormData();
    productImage?.map((item, i) => {
      console.log(item.path);
      formData.append('course_videos[]', {
        name: 'file.mp4',
        uri: item.path,
        type:'video',
      });
    });
    formData.append('type', '0');
    formData.append('course_name', name);
    formData.append('category', category);
    formData.append('course_price', parseInt(courcePrice.substring(1)));

    PostReq(formData, ApiRoute.addTutorial,true).then(responseJson => {
      console.log("add video done",responseJson)
      alert(JSON.parse(responseJson).message)
//navigation.navigate('AdminHomePage');
      setLoading(false)
    }).catch((err) => {
      alert(JSON.stringify(err.message))
        console.log("error add video",err)
        setLoading(false)
    })
   
    }
  }
  return (
    <ScrollView style={Styles.container}>
      <Loader isVisible={isLoading} />
      <View style={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Course Name</Text>
            <TextInput
              placeholder={''}
              textContentType={'name'}
              keyboardType={'default'}
              style={Styles.inputStyle}
              onChangeText={(text) => setName(text)}
            />
          </View>
          {userType === 1?<View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Course Price</Text>
            <TextInput
              placeholder={''}
              textContentType={'name'}
              keyboardType={'numeric'}
              style={Styles.inputStyle}
              onChangeText={(text) => setCourcePrice(text)}
              value={courcePrice}
            />
          </View>:null }
          
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Category</Text>
            <TextInput
              placeholder={'In person trainining'}
              style={Styles.inputStyle}
              onChangeText={(text) => setCategory(text)}
            />
          </View>

          <View style={Styles.inputView2}>
            <Text style={Styles.inputLabelText}>User Type</Text>
            <View style={{height: 15}} />
            <RadioButton.Group
              onValueChange={(value) => setUserType(value)}
              value={userType}>
              <View style={Styles.radioView}>
                <RadioButton
                  value={0}
                  status={userType === 0 ? 'checked' : 'unchecked'}
                  onPress={() => setUserType(0)}
                />
                <Text>Free videos</Text>
              </View>
              <View style={Styles.radioView}>
                <RadioButton
                  value={1}
                  status={userType === 1 ? 'checked' : 'unchecked'}
                  onPress={() => setUserType(1)}
                />
                <Text>Paid videos</Text>
              </View>
            </RadioButton.Group>
          </View>
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
            <Text style={Styles.inputLabelText}>Upload Video</Text>
            <View style={{height: 15}} />
            <TouchableNativeFeedback
              style={Styles.deviceuploadBtn}
              onPress={() => selectImage()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={'device-mobile'} type={'octicon'} size={20} />
                <Text>{'    '}</Text>
                <Text style={Styles.deviceuploadBtnText}>From your device</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        <Image  style={{width:'50%',height:80,}} resizeMode='contain' source={{uri:"content://media/external/video/media/140"}}/>
          <TouchableNativeFeedback
            style={Styles.buttonStyle}
            onPress={() => addTutorial()}>
            <Text style={Styles.loginText}>ADD COURSES</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
      
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_1,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  },
  innerContainer: {
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
  },
  inputFields: {
    paddingTop:15,
    width: '100%',
    bottom: 30,
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
    fontSize: 17,
    fontWeight: 'normal',
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.TOUCHABLE_BUTTON,
    height: 50,
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
    fontSize: 17,
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
    fontSize: 17,
  },
  video: {
    flex: 1,
   width:250,
   height:250,
   marginVertical:10
},
});

export default AddTutorial;
