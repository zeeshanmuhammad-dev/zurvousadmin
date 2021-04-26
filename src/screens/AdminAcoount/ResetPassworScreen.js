import React, {useState,useEffect} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../../../colors';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import { getAsyncData } from '../../../assets/Constant/Util';
import { LOGINKEY } from '../../../assets/Constant/Constants';
import { PostReq } from '../../../Api/Requester';
import ApiRoute from '../../../Api/Apiroute';

const AdminResetPassword = ({navigation}) => {
  
  const [userType, setUserType] = useState('');
  const [loading,setLoading] =useState(false)
  const [password,setPassword] = useState('');

  function updatePasswrod(){
    // setLoading(true)
  
    // "key":"video","type":"file","value":["/C:/Users/My Computer/Downloads/1587116643_.
    getAsyncData(LOGINKEY).then(res=>{
      let response = JSON.parse(res)
      // alert(response.email)
      let dataJson = {
        email:response.email,
        password:password
    }
      PostReq(JSON.stringify(dataJson),ApiRoute.updatePassword).then(res => {
      if(res.status == "success"){
        alert(JSON.stringify(res.message))
      }
      // setRecentAddedArray(res.data)
      setLoading(false)
    })
    })
    // navigation.navigate('AdminAccount')
 
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Old Password</Text>
            <TextInput
              placeholder={'******'}
              secureTextEntry={true}
              style={Styles.inputStyle}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>New Password</Text>
            <TextInput
              placeholder={'******'}
              secureTextEntry={true}
              style={Styles.inputStyle}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Confirmed Password</Text>
            <TextInput
              placeholder={'******'}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={Styles.inputStyle}
            />
          </View>

          <View style={Styles.spacer} />

          <TouchableNativeFeedback
            style={Styles.buttonStyle}
            onPress={() =>updatePasswrod()}>
            <Text style={Styles.loginText}>RESET PASSWORD</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
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
    paddingVertical: 25,
    //justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
    height: 60,
    marginTop: 5,
    paddingLeft: 15,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 19,
    elevation: 5,
    //fontWeight: 'bold',
  },
  checkBoxContainerStyle: {
    backgroundColor: Colors.COLOR_WHITE,
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
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    //textAlignVertical: 'center',
  },
  loginText: {
    fontSize: 20,
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
  spacer: {
    height: 30,
  },
});

export default AdminResetPassword;
