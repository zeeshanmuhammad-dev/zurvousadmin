import React, { useState,useEffect } from 'react';
import {View, TextInput, Text, StyleSheet,Image,TouchableOpacity,Switch} from 'react-native';
import Colors from '../../../colors';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import { ValidateEmail, setAsyncData, getAsyncData } from '../../../assets/Constant/Util';
import { ADDGYMSTEPS } from '../../../assets/Constant/Constants';
import {Picker} from '@react-native-community/picker';
import {Icon, Divider,Button} from 'react-native-elements';
const EditMyProfile = ({route}) => {
  const [fullName,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword]= useState('')
  const [confirmPass,setConfirmPass]= useState('')
  const [city, setCity] = useState('Texas');
  const [zipCode,setZipCode] = useState('')
  const [streetAddress,setStreetAddress] = useState('')
  const [phoneNUmber,setPhoneNumber] = useState('')
  const [costPerDay, setCostPerDay] = useState('');
  useEffect(() => {
    checkData()
  },[]);

  function checkData() {
    // getAsyncData(ADDGYMSTEPS.ADDGYMSTEPONE).then(res=>{
    //   // alert(res)
    //   if(res!=null){
       // let response = JSON.parse(res)
       if(route.params?.gymDetails!==undefined&&route.params?.gymDetails!==''){
        console.log(route.params?.gymDetails?.full_name)
        setFullName(route.params?.gymDetails?.full_name)
        setEmail(route.params?.gymDetails?.email)
        setPassword(route.params?.gymDetails?.password)
setCity(route.params?.gymDetails?.location[0])
        setZipCode(route.params?.gymDetails?.zipcode)
        setStreetAddress(route.params?.gymDetails?.street_address)
        setPhoneNumber(route.params?.gymDetails?.phoneno)
        setCostPerDay(route.params?.gymDetails?.cost_per_day )
       setConfirmPass(route.params?.password)
       }
       
       // navigation.navigate('AdminAddGymLocation')
        
    //   }
    // })
    
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
    //   setAsyncData(ADDGYMSTEPS.ADDGYMSTEPTWO,JSON.stringify(bodyJson)).then(res=>{
    //     navigation.navigate('AdminGymFeatures')
    //   })
    }
    
  }
  
  // function checkData() {
  //   getAsyncData(ADDGYMSTEPS.ADDGYMSTEPTWO).then(res=>{
  //     if(res!=null){
  //       let response = JSON.parse(res)
  //       setCity(response.city)
  //       setZipCode(response.zipCode)
  //       setStreetAddress(response.streetAddress)
  //       setPhoneNumber(response.phoneNumber)
  //      // navigation.navigate('AdminGymFeatures')
  //     }
  //   })
    
  // }

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
    //   setAsyncData(ADDGYMSTEPS.ADDGYMSTEPONE,JSON.stringify(bodyJson)).then(res =>{
    //     navigation.navigate('AdminAddGymLocation')
    //   })

      // 

    }
  }

  return (
            <ScrollView contentContainerStyle={Styles.innerContainer}>
    <View style={Styles.container}>
      <View style={{ paddingVertical: 20 }} >
                        <View style={Styles.circleTop}>
                            <Image
                                style={{ width: 120, height: 120 ,borderWidth:1,borderColor:'white',borderRadius:60}}
                                source={require('../../../assets/images/bachi.png')}
                            />
                            <View style={{ height: 10, position: "absolute", width: 10, bottom: 25, right: 145 }}>
                                <TouchableOpacity onPress={() => this.selectImage()}>
                                    <Image
                                        style={{ width: 30, height: 30, resizeMode: "contain" }}
                                        source={require('../../../assets/images/photo-camera.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
  <Text style={Styles.titleText}>{fullName}</Text>
      <View style={[Styles.listItemLocationTextViewInner,{flexDirection: 'row',alignItems: 'center' , justifyContent:'center'}]}>
      <Icon
                                name={'location'}
                                type={'evilicon'}
                                size={25}
                                style={Styles.icon}
                            />
      <Text style={Styles.descriptionText}>{city}</Text>
      </View>
      <Divider style={[Styles.Divider,{marginVertical:30}]} />
      <Text style={[Styles.inputLabelText,{marginBottom:20}]}>Basic Information</Text>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>GYM NAME</Text>

            <TextInput
             placeholder={'Email'} 
             style={Styles.inputStyle}
             value={email}
             onChangeText={text => setEmail(text)}
             />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>CONTACT NUMBER</Text>
            <TextInput
              placeholder={'+1 - 1234567890'}
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNUmber}
              keyboardType={'phone-pad'}
              style={Styles.inputStyle}
            />
          </View>
          {/* <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>LOCATION</Text>
            <TextInput placeholder={''} style={Styles.inputStyle} />
          </View> */}
         
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>LOCATION</Text>
            <Picker
              selectedValue={city}
              mode={'dropdown'}
              itemStyle={Styles.pickerItem}
              style={Styles.pickerStyle}
              onValueChange={(itemValue, itemIndex) => setCity(itemValue)}>
              <Picker.Item label="Texas" value="texas" />
              <Picker.Item label="New Yark" value="new-yark" />
            </Picker>
            {/**<TextInput placeholder={''} style={Styles.inputStyle} />**/}
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>ZIP CODE</Text>
            <TextInput
              placeholder={'409'}
              onChangeText={text => setZipCode(text)}
              value={zipCode}

              style={Styles.inputStyle}
              textContentType={'postalCode'}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>ADDRESS</Text>
            <TextInput
              placeholder={''}
              onChangeText={text => setStreetAddress(text)}
              value={streetAddress}

              style={Styles.inputStyle}
              textContentType={'streetAddressLine1'}
            />
          </View>
          
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>COST</Text>
            <TextInput placeholder={'$40'} style={Styles.inputStyle} value={costPerDay}
              onChangeText={text => setCostPerDay(text)} />
          </View>
          <View style={Styles.spacer} />
          <Divider style={[Styles.Divider,{marginVertical:30}]} />
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Social Connections</Text>
            <Text style={[Styles.descriptionText,{textAlign:'left'}]}>Linking Social media Account would allow you to share word to your friends and family instantly.</Text>
          </View>
          {/* <TouchableNativeFeedback
            onPress={() =>clickNext()}
            style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>LINK FACEBOOK</Text>
          </TouchableNativeFeedback> */}
          <Button  buttonStyle={{ height: 50, marginVertical:7 }} title="LINK FACEBOOK" />
          <Button buttonStyle={{ height: 50, marginVertical:7  }} title="LINK INSTAGRAM" />
          <Button  buttonStyle={{ height: 50, marginVertical:7  }} title="CONNECTED TO TWITTER" />
          {/* <TouchableNativeFeedback
            onPress={() =>clickNext()}
            style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>LINK INSTAGRAM</Text>
          </TouchableNativeFeedback> */}
          {/* <TouchableNativeFeedback
            onPress={() =>clickNext()}
            style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>CONNECTED TO TWITTER</Text>
          </TouchableNativeFeedback> */}
          <Divider style={[Styles.Divider,{marginVertical:30}]} />
        <Text style={[Styles.inputLabelText,{marginBottom:20}]}>Account</Text>
        <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>EMAIL ADDRESS</Text>
            <TextInput
              placeholder={'Your Email Address'}
              onChangeText={text => setEmail(text)}
              value={email}

              style={Styles.inputStyle}
            />
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>PASSWORD</Text>
            <TextInput
              placeholder={'******'}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              value={password}

              style={Styles.inputStyle}
            />
          </View>
          <Divider style={[Styles.Divider,{marginVertical:30}]} />
          <View style={Styles.inputView}>
              <View style={{flexDirection: 'row',alignItems: 'center' , justifyContent:'space-between'}}>
              <Text style={Styles.inputLabelText}>Allow Current Location Access</Text>
            <Switch
                                    trackColor={{ false: "#767577", true: "#b2b2b2" }}
                                   // thumbColor={vibrate ? "green" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    // onValueChange={(e) => {
                                    //     this.setState({ vibrate: e })
                                    // }}
                                    value={false}
                                />
              </View>
            
            <Text  style={[Styles.descriptionText,{textAlign:'left'}]}>This help MadWord to find best service for you.</Text>
          </View>
        
        </View>
        
    </View>
      </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    //marginTop: 10,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 17,
    //marginHorizontal: 30,
    marginTop: 0,
    lineHeight: 30,
    color: '#64676bff',
  },
  circleTop:{
    alignItems:'center'
  },
  innerContainer: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  //  justifyContent: 'center',
  //  alignItems: 'center',
   // paddingVertical: 30,
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
    marginVertical:5
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
  pickerStyle: {
    width: '100%',
    backgroundColor: Colors.TEXT_INPUT,
    height: 50,
    paddingLeft: 15,
    marginTop: 5,
    elevation: 5,
  },
  
});

export default EditMyProfile;



// const AdminAddGymLocation = ({navigation}) => {
  

  
 



  
//   return (
//     <View style={Styles.container}>
//       <View style={Styles.progressIndicatorBackgroundView}>
//         <View style={Styles.progressIndicator} />
//       </View>
//       <Text style={Styles.titleText}>Location Details</Text>
//       <Text style={Styles.descriptionText}>Enter gym details information</Text>
//       <ScrollView contentContainerStyle={Styles.innerContainer}>
//         <View style={Styles.inputFields}>
          

//           <View style={Styles.spacer} />

//           <TouchableNativeFeedback
//             onPress={() => nextScree()}
//             style={Styles.buttonStyle}>
//             <Text style={Styles.buttonText}>NEXT</Text>
//           </TouchableNativeFeedback>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const Styles = StyleSheet.create({
 
// });

// export default AdminAddGymLocation;
