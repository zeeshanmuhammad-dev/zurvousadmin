import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../../colors';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const ResetPassword = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Reset Password</Text>
      <View style={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Password</Text>
            <TextInput
              placeholder={'******'}
              secureTextEntry={true}
              style={Styles.inputStyle}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Confirm Password</Text>
            <TextInput
              placeholder={'******'}
              secureTextEntry={true}
              style={Styles.inputStyle}
            />
          </View>

          <View style={Styles.spacer} />

          <TouchableNativeFeedback
            onPress={() => navigation.navigate('ResetPasswordConfirmation')}
            style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>SET AS NEW PASSWORD</Text>
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
    marginTop: 50,
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
});

export default ResetPassword;
