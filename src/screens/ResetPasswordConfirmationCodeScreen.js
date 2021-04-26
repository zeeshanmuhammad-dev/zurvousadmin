import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../colors';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import CodeInput from 'react-native-confirmation-code-input';
import { PostReq } from '../../Api/Requester';

const ResetPasswordConfirmCode = ({navigation}) => {
  const [code, setCode] = useState('');
  const codeInputRef = useRef(null);

  function confirmCode(){
    var bodyJson={
      email:"",
      code:code
    }
    if(code==''){
      alert("Enter code first")
    }else{
      PostReq(JSON.stringify(bodyJson),ApiRoute.confirmCode).then(res =>{
        alert(JSON.stringify(res))
        // navigation.navigate('ResetPasswordNew')
      })
    }
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Enter 4-Digit Recovery Pin</Text>
      <Text style={Styles.descriptionText}>
        Recovery code is sent to you via SMS no. ***8d4567. Please enter code
        here.
      </Text>
      <View style={Styles.innerContainer}>
        <View style={Styles.codeView}>
          <CodeInput
            ref={codeInputRef}
            codeLength={4}
            activeColor={'rgba(49, 180, 4, 1)'}
            inactiveColor={'rgba(49, 180, 4, 1.3)'}
            inputPosition={'full-width'}
            size={70}
            caretHidden={true}
            placeholder={'-'}
            keyboardType={'numeric'}
            onFulfill={codeText => setCode(codeText)}
            containerStyle={Styles.codeContinerStyle}
            codeInputStyle={Styles.codeInputStyle}
          />
        </View>

        <View style={Styles.resendCodeView}>
          <Text style={Styles.resendCodeTextNormal}>Not got code yet! </Text>
          <TouchableOpacity>
            <Text
              style={[Styles.resendCodeTextNormal, Styles.resendCodeTextBold]}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableNativeFeedback
          onPress={() => confirmCode()}
          style={Styles.buttonStyle}>
          <Text style={Styles.buttonText}>RESET PASSWORD</Text>
        </TouchableNativeFeedback>
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
    marginHorizontal: 60,
    textAlign: 'center',
  },
  innerContainer: {
    paddingHorizontal: 25,
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    //alignItems: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 19,
    marginHorizontal: 30,
    marginTop: 15,
    lineHeight: 30,
    color: '#64676bff',
  },
  codeView: {
    width: '100%',
    justifyContent: 'center',
    height: 100,
    alignItems: 'center',
  },
  codeContinerStyle: {
    width: '100%',
    height: '100%',
  },
  codeInputStyle: {
    borderWidth: 1.5,
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.COLOR_BLACK,
    backgroundColor: Colors.TEXT_INPUT,
    borderColor: Colors.TEXT_INPUT,
    elevation: 7,
  },
  resendCodeView: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  resendCodeTextNormal: {
    fontSize: 19,
  },
  resendCodeTextBold: {
    fontWeight: 'bold',
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
});

export default ResetPasswordConfirmCode;
