import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet,TouchableOpacity,LayoutAnimation,Animated} from 'react-native';
import Colors from '../../../colors';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';
import { getAsyncData } from '../../../assets/Constant/Util';
import { ADDGYMSTEPS } from '../../../assets/Constant/Constants';
import {
  PostReq
} from '../../../Api/Requester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';
import {Picker} from '@react-native-community/picker';
import DynamicTextInput from '../../components/DynamicTextIputRender'
import {connect} from 'react-redux';
import {addGymm} from '../../actions/actions'

const AdminGymFeatures = ({ navigation,addGymm ,gyms}) => {
  const [checked, setChecked] = useState(false);
  const [gymDetail, setGymDetail] = useState('');
  const [features, setFeatures] = useState([]);
  const [costPerDay, setCostPerDay] = useState('$');
  const [ViewArray, setViewArray] = useState([]);
const [loading, setLoading] = useState(false)
const setFeaturesValue =(array)=>{
  console.log(' setFeatures .',array)
  setFeatures(array)

}
  function addGym() {
    if (gymDetail == "") {
      alert("Enter gym detail")
    } else if (costPerDay == "") {
      alert("Enter cost per day")
    } else {
      
      setLoading(true)
      getAsyncData(ADDGYMSTEPS.ADDGYMSTEPONE).then(gymUserInfo => {
        getAsyncData(ADDGYMSTEPS.ADDGYMSTEPTWO).then(gymLocation => {
          // let gymUserInfo = {
          //   fullName:fullName,
          //   email:email,
          //   password:password
          // }
          var gymUser = JSON.parse(gymUserInfo);
          //  let gymLocation={
          //   city : city,
          //   zipCode:zipCode,
          //   streetAddress:streetAddress,
          //   phoneNumber:phoneNUmber
          // }
          var gymLoc = JSON.parse(gymLocation);

          let bodyJsonId = {
            id:gyms.length-1,
            full_name:gymUser.fullName,
            email: gymUser.email,
            password: gymUser.password,
            full_name1: gymLoc.city,
            zipcode: gymLoc.zipCode,
            street_address: gymLoc.streetAddress,
            phoneno: gymLoc.phoneNumber,
            gym_detail:gymDetail,
            cost_per_day:costPerDay
          }

          let bodyJson = {
            full_name:gymUser.fullName,
            email: gymUser.email,
            password: gymUser.password,
            full_name1: gymLoc.city,
            zipcode: gymLoc.zipCode,
            street_address: gymLoc.streetAddress,
            phoneno: gymLoc.phoneNumber,
            gym_detail:gymDetail,
            cost_per_day:costPerDay,
           // features:features, 
            isDetailForward:checked
          }
 console.log('body json ',bodyJson)          
          PostReq(JSON.stringify(bodyJson), ApiRoute.addGym).then(res => {
            //if (res.status == "success") {
              console.log("messssg::",res.message)
              addGymm(bodyJsonId)
              alert(JSON.stringify('Gym Successfully added'))
                //}
                // setRecentAddedArray(res.data)

                setLoading(false)
                navigation.navigate('AdminHomePage')
        }).catch((e) => {setLoading(false)
          alert(JSON.stringify(e.message))})
      })
    })

    //  navigation.navigate('AdminAddGym')
  }
}


  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.progressIndicatorBackgroundView}>
        <View style={Styles.progressIndicator} />
      </View>
      < Loader isVisible = {
        loading
      }
      />  
      <Text style={Styles.titleText}>Features</Text>
      <Text style={Styles.descriptionText}>Enter gym details information</Text>
      <ScrollView contentContainerStyle={Styles.innerContainer}>
        <View style={Styles.inputFields}>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Gym details</Text>  
            <TextInput
              placeholder={''}
              style={[Styles.inputStyle, Styles.detailInput]}
              textContentType={'none'}
              multiline={true}
              value={gymDetail}
              onChangeText={text => setGymDetail(text)}
            />
          </View>
          {/* <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Cost per day</Text>
            <TextInput placeholder={'Feature'} style={Styles.inputStyle} value={feature}
              onChangeText={text => c(text)} />
          </View> */}
         
         <Text style={Styles.inputLabelText}>Gym Features</Text> 
          <DynamicTextInput SetGymArray={(array)=>setFeaturesValue(array)}/>
         
          <View style={Styles.tagsView}>
          {features?.map((value,index)=>{
            return(
               value!=''?
                <View style={Styles.tagStyle} key={index}>
                <Text style={Styles.tagText}>{value}</Text>
               </View>:null
              
            
            )
          })}

            {/* {features[1]?<View style={Styles.tagStyle}>
             <Text style={Styles.tagText}>{features[1]}</Text>
            </View>:null}

            {features[2]?<View style={Styles.tagStyle}>
             <Text style={Styles.tagText}>{features[2]}</Text>
            </View>:null} */}
          </View>
          <View style={Styles.inputView}>
            <Text style={Styles.inputLabelText}>Cost per day</Text>
            <TextInput placeholder={'Enter Cost'} style={Styles.inputStyle} keyboardType={'numeric'} value={costPerDay}
              onChangeText={text => setCostPerDay(text)} />
          </View>
          <CheckBox
            title={'Send users details to email'}
            checked={checked}
            uncheckedColor={Colors.COLOR_BLACK}
            checkedColor={Colors.COLOR_BLACK}
            containerStyle={Styles.checkBoxContainerStyle}
            textStyle={Styles.checkBoxTextStyle}
            onPress={() => setChecked(!checked)}
            size={20}
          />

          <View style={Styles.spacer} />

          <TouchableNativeFeedback
            onPress={() => addGym()}
            style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>Add Gym</Text>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
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
  detailInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerStyle: {
    width: '100%',
    backgroundColor: Colors.TEXT_INPUT,
    height: 50,
    paddingLeft: 15,
    marginTop: 5,
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
    marginTop: -20,
  },
  buttonStyle2: {
    backgroundColor: '#dee2e7ff',
    marginTop: 0,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#ffffffff',
  },
  buttonText2: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#64676bff',
  },
  progressIndicatorBackgroundView: {
    backgroundColor: '#f1f1f1ff',
    width: '100%',
  },
  progressIndicator: {
    backgroundColor: '#226ddcff',
    height: 9,
    width: '100%',
  },
  tagsView: {
    marginTop: 25,
    marginBottom: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagStyle: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#dbdbdbff',
    borderRadius: 50,
    marginRight: 10,
    marginTop: 10,
  },
  tagText: {
    fontSize: 17,
  },
  checkBoxContainerStyle: {
    backgroundColor: Colors.BACKGROUND_1,
    elevation: 0,
    borderWidth: 0,
    paddingLeft: 0,
    marginLeft: 0,
    marginTop: -10,
  },
  checkBoxTextStyle: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

const mapStateToProps =(state)=>{
  console.log(state);
  return{
      gyms: state.mainReducer.gymList
  };
}

const mapDipatchToProps=(dispatch)=>{
  return{
    addGymm:(inf)=> dispatch(addGymm(inf))
  };
}

export default connect(mapStateToProps,mapDipatchToProps)(AdminGymFeatures);

//export default AdminGymFeatures;
