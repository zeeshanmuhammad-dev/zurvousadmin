import React, {useState,useEffect} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {
  TouchableNativeFeedback,
  ScrollView
} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import Colors from '../../../colors';
import { PostReq } from '../../../Api/Requester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';
import {connect} from 'react-redux';
const AddGymLocation = ({navigation,info}) => {
  const [city, setCity] = useState('Texas');
  const [zipCode,setZipCode] = useState('')
  const [streetAddress,setStreetAddress] = useState('')
  const [phoneNUmber,setPhoneNumber] = useState('')
  const [isLoading,setLoading] = useState(false)
function addLoc(){
  if(city == ''){
    alert("Select city")
  }else if(zipCode == ''){
    alert('Enter zip code')
  }else if(streetAddress == ''){
    alert('Enter Street Address')
  }else if(phoneNUmber == ''){
    alert('Enter phone number start with +')
  }else{
    setLoading(true)
    let bodyJson={
      gym_id:info.id,
      location : city,
      zipCode:zipCode,
      streetAddress:streetAddress,
      phoneNumber:phoneNUmber
    }

    console.log("ssssrres",bodyJson)
    PostReq(JSON.stringify(bodyJson),ApiRoute.addGymLoc).then(res => {
      //console.log("sss",res)
        alert(JSON.stringify(res.message)) 
      setLoading(false)
      navigation.goBack()
    })
}
}

  return (
    // <View style={Styles.container}>
   
      <ScrollView contentContainerStyle={Styles.innerContainer}>
        <Loader isVisible={isLoading} />  
      {/* <View style={Styles.progressIndicatorBackgroundView}>
        <View style={Styles.progressIndicator} />
      </View> */}
      <Text style={Styles.titleText}>Location Detail</Text>
      <Text style={Styles.descriptionText}>Enter gym details information</Text>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>City</Text>
            {/* <TextInput placeholder={''} style={Styles.inputStyle} /> */}
            <Picker
              selectedValue={city}
              mode={'dropdown'}
              itemStyle={Styles.pickerItem}
              style={Styles.pickerStyle}
              onValueChange={(itemValue, itemIndex) => setCity(itemValue)}>
              <Picker.Item label="Texas" value="texas" />
              <Picker.Item label="New Yark" value="new-yark" />
            </Picker>
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Zip Code</Text>
            <TextInput
              placeholder={'Zip Code'}
              style={Styles.inputStyle}
              onChangeText={text => setZipCode(text)}
              keyboardType={"numeric"}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Street Address</Text>
            <TextInput
              placeholder={''}
              secureTextEntry={true}
              style={Styles.inputStyle}
              onChangeText={text => setStreetAddress(text)}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Phone Number</Text>
            <TextInput
              placeholder={'+1-123456789'}
              onChangeText={text => setPhoneNumber(text)}
              secureTextEntry={true}
              style={Styles.inputStyle}
              keyboardType={"phone-pad"}
            />
          </View>

          {/* <View style={Styles.spacer} /> */}

          <TouchableNativeFeedback
            onPress={() => addLoc()}
            style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>ADD LOCATION</Text>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    // </View>
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
  },
  pickerStyle: {
    width: '100%',
    backgroundColor: Colors.TEXT_INPUT,
    height: 50,
    paddingLeft: 15,
    marginTop: 5,
    elevation: 5,
  },
  pickerItem: {
    fontSize: 22,
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
    paddingVertical: 5,
    backgroundColor: Colors.BACKGROUND_1,
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
    marginTop: 3,
    paddingLeft: 15,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
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

const mapStateToProps =(state)=>{
  console.log(state);
  return{
      info: state.mainReducer.accoutInfo
  };
}

export default connect(mapStateToProps)(AddGymLocation);
