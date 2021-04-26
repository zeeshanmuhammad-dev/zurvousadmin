import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../colors';
import {Icon} from 'react-native-elements';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const ResetPasswordMain = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Reset Password</Text>
      <Text style={Styles.descriptionText}>
        Select which contact details should we use to reset your password
      </Text>
      <View style={Styles.innerContainer}>
        <View style={Styles.touchableContainerStyle}>
          <TouchableNativeFeedback
            style={Styles.touchableStyle}
            onPress={() => navigation.navigate('ResetPasswordConfirmCode')}>
            <Icon
              name={'email-outline'}
              type={'material-community'}
              size={90}
              color={'#2671e1ff'}
            />
            <View style={Styles.textContainerView}>
              <Text style={Styles.textStyleBold}>Via Email</Text>
              <Text style={Styles.textStyleNormal}>******@gmail.com</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={Styles.touchableContainerStyle}>
          <TouchableNativeFeedback style={Styles.touchableStyle}>
            <Icon
              name={'phonelink-ring'}
              type={'material'}
              size={90}
              color={'#2671e1ff'}
            />
            <View style={Styles.textContainerView}>
              <Text style={Styles.textStyleBold}>Via Phone</Text>
              <Text style={Styles.textStyleNormal}>******059846</Text>
            </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 19,
    marginHorizontal: 30,
    marginTop: 15,
    lineHeight: 30,
    color: '#64676bff',
  },
  touchableContainerStyle: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: Colors.TOUCHABLE_BUTTON2,
    elevation: 7,
  },
  touchableStyle: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  textContainerView: {
    height: 100,
    paddingLeft: 30,
    marginLeft: 15,
    borderLeftWidth: 1,
    borderLeftColor: Colors.VERTICLE_DIVIDER,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleBold: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3b3d3fff',
  },
  textStyleNormal: {
    fontSize: 19,
    marginTop: 5,
    color: '#a9aeb5ff',
  },
});

export default ResetPasswordMain;
