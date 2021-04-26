import React, {useEffect, useRef,useState} from 'react';
import {View, Text, Dimensions, DatePickerAndroid, DatePickerIOS,TextInput,Button,Alert} from 'react-native';
import { Icon, Divider, SearchBar} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';
import {StackedBarChart} from 'react-native-chart-kit';
import { TabView, SceneMap } from 'react-native-tab-view';
import Colors from '../../../../colors';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { CreditCardInput } from "react-native-credit-card-input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import axios from 'axios'
import Loader from '../../../components/Common/Loader';
const initialLayout = { width: Dimensions.get('window').width };

const AddPayment = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const {width} = Dimensions.get('screen');
  
  const [index, setIndex] = React.useState(0);

  const [dataValid, setdataValid] = useState(false);
  const [data, setdata] = useState('');
 
 
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Add Payment',
      headerStyle: {
        backgroundColor: Colors.HEADER_BACKGROUND,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // fontWeight: 'bold',
      },
      headerShown: true,
    });
  });
  const addPayment = async()=>{
    if(dataValid==true){
      let user = await AsyncStorage.getItem('UserLogedIn');
      const values=  {
        method:'visa',
        card_number:data.number,
        expire_date:data.expiry,
        card_holder_number:data.name,
        cvv_code:data.cvc,
        gym_id:user
      }
      const formData = new FormData();
formData.append('data', JSON.stringify(values));
      axios.post("https://imtekh.com/noman/zurovas_backend/api/add_payment_method_manager",
      formData, {
        headers: {
          'Content-Type': "application/json;"
        }
      }).then(async(response) => {
      console.log("payment response: ",response )
      Alert.alert(
        'Payment Successful',
        'Payment Added Successfully.',
        [
          {
            text: 'Ok',
            onPress: () => {
              
            },
          },
        ],
      );
    
       
       
      }).catch((error) => {
        console.log("error in payment: ",error)
          Alert.alert(
            'Payment Error',
            'Please Provide Valid Credentials.',
            [
              {
                text: 'Ok',
                onPress: () => {
                  
                },
              },
            ],
          );
        });

    }else{
      Alert.alert(
        'Payment Error',
       'Please Provide Valid Credentials.',
        [
          {
            text: 'Ok',
            onPress: () => {
              
            },
          },
        ],
      );
    
    }
  }

  setDateAndroid = async () => {
    try {
        const {
            action, year, month, day,
        } = await DatePickerAndroid.open({
            date: new Date(),
            minDate: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({ androidDate: `${day}/${month + 1}/${year}` });
        }
    } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
    }
};
const _onChange = (formData) => {
  if(formData.status.valid==true){
    console.log(formData.status,'formData.status')
    setdataValid(true)
    setdata(formData.status.values)
  }
  
  console.log('data ',formData)}
 const   _onFocus = (field) => console.log("focusing", field);
  const  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => console.log(useLiteCreditCardInput);
  return (
    <ScrollView contentContainerStyle={s.container}>
    <KeyboardAwareScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                        <View style={s.container}>
                            <CreditCardInput
                                autoFocus
                                requiresName
                                requiresCVC
                                cardScale={1.25}
                                labelStyle={s.label}
                                inputStyle={s.input}
                                validColor={"black"}
                                invalidColor={"red"}
                                placeholderColor={"darkgray"}
                                allowScroll={true}
                                onFocus={_onFocus}
                                onChange={_onChange} />
                                
                        </View>
                        <View
                            style={{
                                justifyContent: 'center', alignItems: 'center', marginTop: 20
                            }}>
                          
                            <View style={{ marginVertical: 10 }} />
                        </View>
                    </KeyboardAwareScrollView>
            <View style={{paddingHorizontal:'15%'}}>
          <TouchableNativeFeedback
            style={Styles.buttonStyle}
            onPress={() => addPayment()}>
            <Text style={Styles.loginText}>ADD</Text>
          </TouchableNativeFeedback>
          </View>
       
    </ScrollView> 
 );
};

const s = StyleSheet.create({
  container: {
      backgroundColor: "#F5F5F5",
      marginTop: 20,
      // alignItems:'center'
  },
  label: {
      color: "black",
      fontSize: 12,
  },
  input: {
    flexDirection:'column',
      fontSize: 16,
      color: "black",
  },
});
const styles = StyleSheet.create({
  headerTitle: {
      fontSize: 22,
      color: 'black',
      fontWeight: 'bold'
  },

  circle: {
      width: 80,
      height: 80,
      borderRadius: 100 / 2,
      backgroundColor: '#EEEEEE',
  },
  elevatedView: {
      marginTop: 5,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: 'white',
      marginRight: 25,
      shadowOpacity: 0.5,
      elevation: 2,
      overflow: 'hidden',
      shadowColor: '#ffffff',
      shadowColor: '#000',
      shadowRadius: 2,
      borderRadius: 10
  },
  categoryHeaderStyle: {
      fontSize: 12,
      color: 'gray',
      marginLeft: 30,
      marginTop: 30
  },
  selected: {

  },

});
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding:10
  },
  // titleText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   //alignSelf: 'center',
  //  // marginTop: 15,
  //   marginHorizontal:10,
  //   backgroundColor:'red'
  // },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 15,
    //paddingTop: 20,
    //justifyContent: 'flex-end',
    //alignItems: 'center',
    //flex: 1,
  },
  inputFields: {
    width: '100%',
    //bottom: 30,
  },
  inputView: {
    marginBottom: 20,
  },
  inputView2: {
    marginBottom: 20,
  },
  inputLabelText: {
    fontSize: 16,
  },
  inputStyle: {
    backgroundColor: Colors.TEXT_INPUT,
    height: 50,
    marginTop: 5,
    paddingLeft: 15,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
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
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceuploadBtn: {
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dee2e7ff',
  },
  deviceuploadBtnText: {
    fontSize: 17,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'left',
    marginVertical:10
    //marginTop: 10,
  },
  headerLeftView: {
    paddingLeft: 8,
    flexDirection:'row',
    alignItems:"center"
  },
  headerLeftText: {
    fontSize: 17,
    marginLeft:5,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
    paddingRight: 8,
  },
  headerRightIconView: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 50,
  },
  headerRightIcon: {
    borderRadius: 50,
  },
});

// const Styles = StyleSheet.create({
//   headerLeftView: {
//     paddingLeft: 8,
//     flexDirection:'row',
//     alignItems:"center"
//   },
//   headerLeftText: {
//     fontSize: 20,
//     marginLeft:5,
//     fontWeight: 'bold',
//     color: '#ffffffff',
//   },
//   headerRightView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     margin: 0,
//     paddingRight: 8,
//   },
//   headerRightIconView: {
//     paddingHorizontal: 6,
//     paddingVertical: 6,
//     borderRadius: 50,
//   },
//   headerRightIcon: {
//     borderRadius: 50,
//   },
//   innerContainer: {
//     paddingHorizontal: 15,
//   //  justifyContent: 'center',
//   //  alignItems: 'center',
//    // paddingVertical: 30,
//     //flex: 1,
//   },
//   container: {
//     width: '100%',
//     flex: 1,
//     paddingHorizontal: 15,
//     backgroundColor: Colors.COLOR_WHITE,
//   },
//   listView: {
//     width: '100%',
//     paddingHorizontal: 8,
//     backgroundColor: Colors.VIEWS_BACKGROUND,
//   },
//   listViewHeader: {
//     paddingTop: 25,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingBottom: 15,
//   },
//   listViewHeaderLeftText: {
//     fontSize: 22,
//   },
//   listViewHeaderRightText: {
//     fontSize: 16,
//   },
//   listItemView: {
//     paddingVertical: 20,
//   },
//   listItem: {
//     width: '100%',
//     flexDirection: 'row',
//     marginBottom: 30,
//     //alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   imageView: {
//     width: 40,
//     height: 40,
//     borderRadius: 50,
//     backgroundColor: Colors.TOUCHABLE_BUTTON,
//   },
//   listItemTextView: {
//     paddingLeft: 10,
//     flex: 2,
//   },
//   listItemTextView2: {
//     flex: 2,
//   },
//   searchbarView: {
//   },
//   titleView: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   listItemMenuIcon: {
//     alignSelf: 'flex-start',
//   },
//   listItemText1: {
//     fontSize: 18,
//   },
//   listItemText2: {
//     fontSize: 16,
//   },
//   listItemText3: {
//     fontSize: 18,
//     color: 'rgba(0,0,0,0.6)',
//   },
//   listItemdateText: {
//     marginTop: 5,
//   },
//   icon: {
//     fontWeight: 'bold',
//   },
//   listItemLocationTextView: {
//     flexDirection: 'row',
//     marginTop: 3,
//     alignItems: 'center',
//   },
//   spacer: {
//     height: 10,
//   },
//   menuStyle: {
//     width: 200,
//     height: 200,
//     //marginRight: 15,
//     paddingVertical: 20,
//     borderRadius: 10,
//   },
//   menuItemStyle: {
//     paddingVertical: 10,
//   },
//   menuTextStyle: {
//     fontSize: 18,
//   },
//   menuDividerStyle: {marginHorizontal: 14},
//   button: {
//     position: 'absolute',
//     top: 20,
//     padding: 10,
//   },
//   caption: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     alignItems: 'center',
//   },
//   fcontainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   searchbarContainer: {
//     backgroundColor: Colors.BACKGROUND_1,
//     borderWidth: 0,
//     borderTopColor: Colors.BACKGROUND_1,
//     padding: 0,
//     borderTopWidth: 0,
//     borderBottomColor: Colors.BACKGROUND_1,
//   },
//   searchbarView: {
//   },
//   searchbarInput: {
//     backgroundColor: Colors.TEXT_INPUT,
//     elevation: 4,
//   },
//   searchbarTextInput: {
//     fontSize: 14,
//   },
// });

export default AddPayment;
