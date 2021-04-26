import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../../colors';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

const ResetPasswordConfirmation = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <View style={Styles.notificationView}>
          <Icon
            name={'check'}
            type={'entypo'}
            size={50}
            color={'#f9f9f9ff'}
            style={Styles.iconStyle}
          />
          <Text style={Styles.titleText}>Password Reset Successfully</Text>
          <Text style={Styles.descriptionText}>
            You have successfully reset your password. Please use a new password
            to login.
          </Text>
        </View>
        <TouchableNativeFeedback
          style={Styles.buttonStyle}
          onPress={() => navigation.navigate('AdminAccount')}>
          <Text style={Styles.buttonText}>STAY LOGIN</Text>
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
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 25,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    lineHeight: 30,
    marginBottom: 70,
    color: '#64676bff',
  },
  innerContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
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
  notificationView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    backgroundColor: '#3e88f8ff',
    borderRadius: 50,
    borderColor: '#f9f9f9ff',
    borderWidth: 7,
    elevation: 7,
    padding: 14,
  },
});

export default ResetPasswordConfirmation;
