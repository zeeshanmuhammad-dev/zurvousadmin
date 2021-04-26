import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet,ScrollView} from 'react-native';
import Colors from '../../../colors';
import {CheckBox} from 'react-native-elements';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import { PostReq } from '../../../Api/Requester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';
import {connect} from 'react-redux';
import {addInf} from '../../actions/actions'

const AddNewInfluencers = ({navigation,add,infs}) => {
  const [checked, setChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [loading,setLoading] =useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  
  function addUser(){
    setLoading(true)
    let dataJson = {
        name:fullName,
        email,
        password
    }
    console.log("ssssrres",dataJson)
    PostReq(JSON.stringify(dataJson),ApiRoute.addInfluence).then(res => {
      //console.log("sss",res)
     // add({id:infs.length-1,full_name:fullName,email})
        alert(JSON.stringify(res.message))
      setLoading(false)
     // navigation.navigate('AdminHomePage')
    })
  }

  return (
    <ScrollView style={Styles.container}>
      <Loader isVisible={loading} /> 
      <View style={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Full Name</Text>
            <TextInput
              placeholder={''}
              textContentType={'name'}
              keyboardType={'default'}
              style={Styles.inputStyle}
              onChangeText={text => setFullName(text)}
            />
          </View>
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
              placeholder={'******'}
              secureTextEntry={true}
              style={Styles.inputStyle}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <CheckBox
            title={'Send information to user email'}
            checked={checked}
            uncheckedColor={Colors.COLOR_BLACK}
            checkedColor={Colors.COLOR_BLACK}
            containerStyle={Styles.checkBoxContainerStyle}
            textStyle={Styles.checkBoxTextStyle}
            onPress={() => setChecked(!checked)}
          />

          <TouchableNativeFeedback
            style={Styles.buttonStyle}
            onPress={() => addUser()}>
            <Text style={Styles.loginText}>ADD USER</Text>
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
    marginTop:15,
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

const mapStateToProps =(state)=>{
  console.log(state);
  return{
      infs: state.mainReducer.infList
  };
}

const mapDipatchToProps=(dispatch)=>{
  return{
      add:(inf)=> dispatch(addInf(inf))
  };
}

export default connect(mapStateToProps,mapDipatchToProps)(AddNewInfluencers);

//export default AddNewInfluencers;
