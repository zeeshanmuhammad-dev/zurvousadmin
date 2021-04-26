import React, { useState, useRef, useContext, useReducer, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, StatusBar ,ScrollView,Alert} from 'react-native';
import Colors from '../../colors';
import { CheckBox } from 'react-native-elements';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import { login, PostReq } from '../../Api/Requester';
import Loader from '../components/Common/Loader';
import { setAsyncData, getAsyncData, ValidateEmail } from '../../assets/Constant/Util';
import { LOGINKEY } from '../../assets/Constant/Constants';
import { ThemeContext } from '../../AppContext';
import ApiRoute from '../../Api/Apiroute';
import {connect} from 'react-redux';
import {setAccountInfo} from '../actions/actions'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
const Signin = ({ navigation ,setAccountInfo}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  var chek = useContext(ThemeContext)
 
  const [isLoader, setLoader] = useState(false);


  // this method work like componentWillMoint...

  useEffect(()=>{
    // console.log('First time load (it runs only once)');
    //  getAsyncData(LOGINKEY).then(res => {
    //   if (res !== null) {
    //     // this will finish the signinscreen.js screen.
    //     setAccountInfo(res)
    //     navigation.replace(
    //       res.type === 'Admin Login'
    //         ? 'AdminAccount'
    //         : res.type === 'Gym Login' ? 'GymManagerAccount' : res.type==="Employee Login"?'GymDeskEmployee':'PartenerAccount',
    //     )
    //   } else {
    //     //  alert(res)
    //   }

    // })
  },[])

//   const willMount = useRef(true);
//   if (willMount.current) {
//     console.log('First time load (it runs only once)');
//      getAsyncData(LOGINKEY).then(res => {
// //  console.log("llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",res)
// //       if (res != null) {
// //         // this will finish the signinscreen.js screen.
// //         setAccountInfo(res)
// //         navigation.replace(
// //           res.type === 'Admin Login'
// //             ? 'AdminAccount'
// //             : res.type === 'Gym Login' ? 'GymManagerAccount' : res.type==="Employee Login"?'GymDeskEmployee':'PartenerAccount',
// //         )
// //       } else {
// //         //  alert(res)
// //       }

//     })

//     // setCount(2);
//     willMount.current = false;
//   } else {
//     console.log('Repeated load');
//   }
  async function loginProcess() {
    setLoader(true)
    var bodyJson = {
      email: email,
      password: password
    }

    axios.post("https://imtekh.com/noman/zurovas_backend/api/admin-login",
        {
          email: email,
      password: password
        }, {
        headers: {
          'Accept':"application/json",
          'Content-Type': "application/json;"
        }
      }).then(async(response) => {
        console.log('password, ',password)
      console.log("login response: ", response.data)
      setAccountInfo(response.data)
          
          try {
            await AsyncStorage.setItem('UserLogedIn',response.data.id.toString())
            await AsyncStorage.setItem('UserEmail',response.data.email.toString())
            await AsyncStorage.setItem('UserName',response.data.name.toString())
            
            
           // console.log('Data successfully saved')
          } catch (e) {
          //  console.log('Failed to save the data to the storage')
          }
         // navigation.replace('AdminAccount')
         if(response.data.type =='admin'){
           
          await AsyncStorage.setItem('UserType','AdminAccount')
          navigation.replace('AdminAccount')
         }
        else if(response.data.type =='gym_manager'){
          await AsyncStorage.setItem('UserType','GymManagerAccount')
          navigation.replace('GymManagerAccount')
         }
        else if(response.data.type=="employee"){
          await AsyncStorage.setItem('UserType','GymDeskEmployee')
          navigation.replace('GymDeskEmployee')
         }
         else if(response.data.type=="partner"){
          await AsyncStorage.setItem('UserType','partner')
          navigation.replace('PartenerAccount')
         }
         else{
          Alert.alert(
            '',
           'You are unauthorized to use this app.',
            [
              {
                text: 'Ok',
                onPress: () => {
                  
                },
              },
            ],
          );
        
         }
  
        setLoader(false)
       
      }).catch((error) => {
        console.log(error,'error')
       
              alert(error.message)
            
            setLoader(false)
      })
        
    //   let data = JSON.stringify(res);
    //   if (checked == true && res.status==="200") {
    //     setAsyncData(LOGINKEY, data)
    //   }
    //   console.log('res',res)
    //   if(res.status===200||res.status==='200'){
    //     setAccountInfo(res)
    //     console.log(res,'res')
    //     try {
    //       await AsyncStorage.setItem('UserLogedIn',res.toString())
    //       await AsyncStorage.setItem('UserType',res.res.type.toString())
          
    //      // console.log('Data successfully saved')
    //     } catch (e) {
    //     //  console.log('Failed to save the data to the storage')
    //     }
    //     navigation.replace('AdminAccount')
    //   // navigation.replace(
    //   //   res.type === 'Admin Login'
    //   //     ? 'AdminAccount'
    //   //     : res.type === 'Gym Login' ? 'GymManagerAccount' : res.type==="Employee Login"?'GymDeskEmployee':'PartenerAccount',
    //   // )
    // }
    //   else{
    //     alert(res.message)
    //   }
    //   setLoader(false)
    
  }
  function resetPasswrod(){

    if(email==''){
      alert('Enter you email!')
    }else{
      if(ValidateEmail(email)){
        setLoader(true)
        let bodyJson={
          email:email
        }
        PostReq(JSON.stringify(bodyJson),ApiRoute.sendCode).then(res=>{
          setLoader(false)
          if(res.status=="error"){
            alert(res.message)
          }
          else{
        navigation.navigate('ResetPasswordMain')

          }
        })

      }else{
        alert("You have entered an invalid email address!")
      }
    }
  }

  return (
    <ScrollView style={Styles.container}>
      <Loader isVisible={isLoader} />
      <StatusBar backgroundColor={'#226ddcff'} />
      <Text style={Styles.titleText}>Sign in</Text>
      <View style={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Email Address</Text>
            <TextInput
              placeholder={'Your Email Address'}
              textContentType={'emailAddress'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              style={Styles.inputStyle}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Password</Text>
            <TextInput
              placeholder={''}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              style={Styles.inputStyle}
            />
          </View>
          <CheckBox
            title={'Remember login info'}
            checked={checked}
            uncheckedColor={Colors.COLOR_BLACK}
            checkedColor={Colors.COLOR_BLACK}
            containerStyle={Styles.checkBoxContainerStyle}
            textStyle={Styles.checkBoxTextStyle}
            onPress={() => setChecked(!checked)}
          />

          <TouchableNativeFeedback
            style={Styles.buttonStyle}
            onPress={() => loginProcess()}>
            <Text style={Styles.loginText}>LOGIN</Text>
          </TouchableNativeFeedback>

          <View style={Styles.resetPasswordView}>
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor={'rgba(0,0,0,0.2)'}
              style={Styles.resetPasswordTouchable}
              onPress={() => resetPasswrod()}>
              <Text style={Styles.resetPasswordText}>Reset Password</Text>
            </TouchableHighlight>
          </View>
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
    marginBottom:50
  },
  innerContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
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
    fontSize: 17,
  },
  inputStyle: {
    backgroundColor: Colors.TEXT_INPUT,
    height: 50,
    marginTop: 5,
    paddingLeft: 15,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
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
    //textAlignVertical: 'center',
  },
  loginText: {
    fontSize: 17,
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
});

//export default AddInfluencersExistingUsers;
const mapStateToProps =(state)=>{
  console.log(state);
  return{
      infs: state.mainReducer.infList
  };
}

const mapDipatchToProps=(dispatch)=>{
  return{
    setAccountInfo:(inf)=> dispatch(setAccountInfo(inf))
  };
}

export default connect(mapStateToProps,mapDipatchToProps)(Signin);
//export default Signin;
