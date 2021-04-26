import React, { useState,useEffect } from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../../../colors';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import { ValidateEmail, setAsyncData, getAsyncData } from '../../../assets/Constant/Util';
import { ADDGYMSTEPS } from '../../../assets/Constant/Constants';

const AdminAddGym = ({navigation}) => {
  const [fullName,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword]= useState('')
  const [confirmPass,setConfirmPass]= useState('')

  useEffect(() => {
    //checkData()
  },[]);

  function checkData() {
    getAsyncData(ADDGYMSTEPS.ADDGYMSTEPONE).then(res=>{
      // alert(res)
      if(res!=null){
        let response = JSON.parse(res)
        setFullName(response.fullName)
        setEmail(response.email)
        setPassword(response.password)
        setConfirmPass(response.password)
        navigation.navigate('AdminAddGymLocation')
      }
    })
    
  }
  

  function clickNext() {
    if(fullName ==""){
      alert("Enter name")
    }
    else if (password !== confirmPass) {
      alert("Passwrod did not matched")

    }else if (email == "") {
      alert("Email field are empty")

    }
    else if (password == "" && confirmPass == "") {
      alert("Passwrod fields are empty")

    } else {
      if(ValidateEmail(email)){

      }else{
        alert("You have entered an invalid email address!")
      }
      let bodyJson = {
        fullName:fullName,
        email:email,
        password:password
      }
      setAsyncData(ADDGYMSTEPS.ADDGYMSTEPONE,JSON.stringify(bodyJson)).then(res =>{
        navigation.navigate('AdminAddGymLocation')
      })

      // 

    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.progressIndicatorBackgroundView}>
        <View style={Styles.progressIndicator} />
      </View>
      <Text style={Styles.titleText}>Add New Gym</Text>
      <Text style={Styles.descriptionText}>Enter gym details information</Text>
      <ScrollView contentContainerStyle={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Full Name</Text>

            <TextInput
             placeholder={'Full Name'} 
             style={Styles.inputStyle}
             value={fullName}
             onChangeText={text => setFullName(text)}
             />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Email Address</Text>
            <TextInput
              placeholder={'Your Email Address'}
              onChangeText={text => setEmail(text)}
              value={email}

              style={Styles.inputStyle}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Password</Text>
            <TextInput
              placeholder={''}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              value={password}

              style={Styles.inputStyle}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Confirm Password</Text>
            <TextInput
              placeholder={''}
              onChangeText={text => setConfirmPass(text)}
              secureTextEntry={true}
              value={confirmPass}

              style={Styles.inputStyle}
            />
          </View>

          <View style={Styles.spacer} />

          <TouchableNativeFeedback
            onPress={() =>clickNext()}
            style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>NEXT</Text>
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
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 17,
    marginHorizontal: 30,
    marginTop: 0,
    lineHeight: 30,
    color: '#64676bff',
  },
  innerContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    //flex: 1,
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
    elevation: 7,
  },
  spacer: {
    paddingVertical: 20,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.TOUCHABLE_BUTTON,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
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

export default AdminAddGym;
