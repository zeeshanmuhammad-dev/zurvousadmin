import React from 'react';
import { StatusBar , View , Text , ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {setAccountInfo} from '../actions/actions'
 const SplashScreen =(props)=>{
    React.useEffect(()=>{
        checkLoginData();
    },[props.navigation])
 const   checkLoginData=async()=>{
    
        let isLogin = await AsyncStorage.getItem('UserLogedIn');
        let user = await AsyncStorage.getItem('UserType');
        console.log('is login ',isLogin)
        if(isLogin===null||isLogin===''){
            console.log('isLogin', isLogin)
            props.navigation.replace('Signin')
         
        }
        else{
            props.setAccountInfo(isLogin) 
            props.navigation.replace(user)
           
        }
        
    }
 
        return (
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#34495e'}}>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content"/> 
                <Text style={{ color : 'white',fontSize : 18 }}>Hello Splash</Text>
                <ActivityIndicator color={'white'}/>
            </View>
        )

}
const mapStateToProps =(state)=>{
    console.log(state);
    return{
        infs: state.mainReducer.infList
    };
  }
  
  const mapDipatchToProps=(dispatch)=>{
    return{
      setAccountInfo:(inf)=> dispatch(setAccountInfo(inf))
    };
  }
  
  export default connect(mapStateToProps,mapDipatchToProps)(SplashScreen);