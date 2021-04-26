import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Animated, Platform, TextInput, Alert, BackHandler,LayoutAnimation, } from 'react-native';
import { connect } from "react-redux";
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
class DynamicTextInput extends Component {
    constructor() {
        super();
        this.state = { 
            ViewArray: [],
            sealcodes: [],
            Disable_Button: false,
            barcodevalue:'',
            arraybarcodevalue: '',
            input: true,

        }

        this.animatedValue = new Animated.Value(0);

        this.A = 0;

     

    }



    async componentDidMount() {
//await AsyncStorage.getItem('accessToken').then((value) => this.setState({ bearerToken: value }))
        
       // this.props.onRef(this)
        this.Add_New_View_Function()
    }

    componentWillUnmount() {
      //  this.props.onRef(undefined);
    }


    Add_New_View_Function = () => {
        this.animatedValue.setValue(0);
        let New_Added_View_Value = ''
       // console.log('this.viewArray', this.state.ViewArray)
        this.setState({ Disable_Button: true, ViewArray: [...this.state.ViewArray, New_Added_View_Value] }, () => {
            Animated.timing(
                this.animatedValue,
                {
                    toValue:1,
                    duration: 400,
                    useNativeDriver: true
                }
            ).start(() => {
               // this.state.ViewArray[this.A] = "" 
              //  console.log("test1: ", this.state.ViewArray)
                
                this.A = this.A + 1;

                this.setState({ Disable_Button: false });
            });
        });
    }



    ArrayPush = async (data, index) => {
      //  console.log(' yes !!string');
        let a = this.state.ViewArray.slice(); //creates the clone of the state
        a[index] = data.toString();
        this.setState({ ViewArray: a },()=>this.props.SetGymArray(this.state.ViewArray));
       // console.log(this.state.ViewArray);

    }

 
    deleteSealCode=(index)=>{
      //  console.log(index,'index')
        const newArray = [...this.state.ViewArray];
        newArray.splice(index,1);
    // console.log('new array',newArray)
        this.setState(() => {
          return {
            ViewArray: newArray
          }
        }, () => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          this.props.SetGymArray(this.state.ViewArray)
        });
      }





    render() {
        const AnimationValue = this.animatedValue.interpolate(
            {
                inputRange: [0, 1],

                outputRange: [-1000, 0]
            });
        // console.log(this.state.ViewArray);

        let Render_Animated_View = this.state.ViewArray.map((item, key) => {
            // {console.log(this.state.ViewArray);}
            // console.log(item)


            if ((key) == this.A) {
                
                return null;
            }

            else {
               // this.Arrayrefresh('',key)
                return (

                    <View
                        key={key} >

                        <View style={styles.inputview}>

                        {/* <View style={styles.delete}>
                        <TouchableOpacity style={styles.touchabledelete} onPress={() => this.deleteSealCode(key)}>
                            <Text style={{ fontWeight: 'bold', color: 'white',fontSize:25,fontWeight:'bold' }}>-</Text>
                        </TouchableOpacity>
                    </View> */}
                            <TextInput style={styles.output}
                                onChangeText={value => this.ArrayPush(value, key)}
                                placeholder={'Add new feature..'}
                                value={item}
                               
                            />
 <AntDesign
                         name='close'
                         size={26}
                         color={'black'}
                         onPress={()=>this.deleteSealCode(key)}
                         />
                        </View>
                       
                    </View>

                );
            }
        });





        return (
            <ScrollView
                ref={ref => { this.scrollView = ref }}
                onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
                keyboardShouldPersistTaps="handle"
            >
                <View style={styles.MainContainer}>
                    <ScrollView>

                        <View style={{ flex: 1, padding: 2 }}>
                            {
                                Render_Animated_View
                            }
                        </View>

                    </ScrollView>
                    <TouchableOpacity 
           // onPress={() => addFeature(feature)}
           onPress={() => this.Add_New_View_Function()}
            style={[styles.buttonStyle, styles.buttonStyle2]}>
            <Text style={styles.buttonText2}>Add New Feature</Text>
          </TouchableOpacity>

                    {/* <View style={styles.plus}>
                        <TouchableOpacity style={styles.touchableadd} onPress={() => this.Add_New_View_Function()}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>+</Text>
                        </TouchableOpacity>
                    </View> */}



                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            width:'100%',
            height:'100%',
            justifyContent: 'center',
            paddingTop: (Platform.OS == 'ios') ? 20 : 0
        },

        Animated_View_Style:
        {

            backgroundColor: '#FF9800',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5
        },

        View_Inside_Text:
        {
            color: '#fff',
            fontSize: 24
        },

        TouchableOpacityStyle: {


            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',

        },

        FloatingButtonStyle: {
            resizeMode: 'contain',
            width: 50,
            height: 50,
        },
        inputview: {
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            width:'100%',
            elevation:3,
            backgroundColor:'#ffffff',
            marginTop:7
        },
      
        output: {
            backgroundColor:'#ffffff',
            width:'80%',
            height:60,
            marginTop: 5,
            paddingLeft: 15,
            justifyContent: 'center',
            textAlignVertical: 'center',
            fontSize: 17,
          //  elevation:3,


        },delete:{
            // paddingRight: 80,

            // alignItems: 'flex-end',
            // justifyContent: 'center',


            // flex: 1,

        },
        touchabledelete:{
            alignItems: 'center',
            justifyContent: 'center',
            width: 35,
            height: 35,
            backgroundColor: '#ff0000',
            borderRadius: 5,
            marginRight:10

        },
        buttonStyle: {
            width: '100%',
            backgroundColor:'#226ddcff',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
           // marginTop: -20,
          },
          buttonStyle2: {
            backgroundColor: '#dee2e7ff',
            marginTop:17,
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

    });

export default DynamicTextInput;
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
