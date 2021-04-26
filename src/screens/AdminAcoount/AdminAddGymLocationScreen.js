import React, {useState,useEffect} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../../../colors';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import { setAsyncData, getAsyncData } from '../../../assets/Constant/Util';
import { ADDGYMSTEPS } from '../../../assets/Constant/Constants';

const AdminAddGymLocation = ({navigation}) => {
  const [city, setCity] = useState('');
  const [zipCode,setZipCode] = useState('')
  const [streetAddress,setStreetAddress] = useState('')
  const [phoneNUmber,setPhoneNumber] = useState('')

  
  useEffect(() => {
   // checkData()
  },[]);

  function checkData() {
    getAsyncData(ADDGYMSTEPS.ADDGYMSTEPTWO).then(res=>{
      if(res!=null){
        let response = JSON.parse(res)
        setCity(response.city)
        setZipCode(response.zipCode)
        setStreetAddress(response.streetAddress)
        setPhoneNumber(response.phoneNumber)
        navigation.navigate('AdminGymFeatures')
      }
    })
    
  }

  function nextScree() {
    if(city == ''){
      alert("Select city")
    }else if(zipCode == ''){
      alert('Enter zip code')
    }else if(streetAddress == ''){
      alert('Enter Street Address')
    }else if(phoneNUmber == ''){
      alert('Enter phone number start with +')
    }else{
      let bodyJson={
        city : city,
        zipCode:zipCode,
        streetAddress:streetAddress,
        phoneNumber:phoneNUmber
      }
      setAsyncData(ADDGYMSTEPS.ADDGYMSTEPTWO,JSON.stringify(bodyJson)).then(res=>{
        navigation.navigate('AdminGymFeatures')
      })
    }
    
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.progressIndicatorBackgroundView}>
        <View style={Styles.progressIndicator} />
      </View>
      <Text style={Styles.titleText}>Location Details</Text>
      <Text style={Styles.descriptionText}>Enter gym details information</Text>
      <ScrollView contentContainerStyle={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Select City</Text>
            <TextInput
              placeholder={''}
              onChangeText={(itemValue) => setCity(itemValue)}
              value={city}
              style={Styles.inputStyle}
              textContentType={'location'}
            />
            {/* <Picker
              selectedValue={city}
              mode={'dropdown'}
              itemStyle={Styles.pickerItem}
              style={Styles.pickerStyle}
              onValueChange={(itemValue, itemIndex) => setCity(itemValue)}>
              <Picker.Item label="Texas" value="texas" />
              <Picker.Item label="New Yark" value="new-yark" />
            </Picker> */}
            {/**<TextInput placeholder={''} style={Styles.inputStyle} />**/}
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Zip Code</Text>
            <TextInput
              placeholder={''}
              onChangeText={text => setZipCode(text)}
              value={zipCode}
              keyboardType={'numeric'}
              style={Styles.inputStyle}
              textContentType={'postalCode'}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Street Address</Text>
            <TextInput
              placeholder={''}
              onChangeText={text => setStreetAddress(text)}
              value={streetAddress}

              style={Styles.inputStyle}
              textContentType={'streetAddressLine1'}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Phone number</Text>
            <TextInput
              placeholder={''}
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNUmber}
              keyboardType={'phone-pad'}
              style={Styles.inputStyle}
            />
          </View>

          <View style={Styles.spacer} />

          <TouchableNativeFeedback
            onPress={() => nextScree()}
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
    paddingVertical: 30,
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
    elevation: 5,
  },
  pickerStyle: {
    width: '100%',
    backgroundColor: Colors.TEXT_INPUT,
    height: 60,
    paddingLeft: 15,
    marginTop: 5,
    elevation: 5,
  },
  pickerItem: {
    fontSize: 18,
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
    width: '66%',
  },
});

export default AdminAddGymLocation;
