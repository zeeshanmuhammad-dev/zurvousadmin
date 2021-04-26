import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Platform, ScrollView, ActivityIndicator } from 'react-native'
import { getAsyncData } from './assets/Constant/Util';
import Constants, { LOGINKEY } from './assets/Constant/Constants';

export const ThemeContext = React.createContext({});

export class ThemeProvider extends Component {
 
  
constructor(props) {
  super(props);
  this.state = {
    testing:"Test Context",
    check:'yes',
    recentlyAddedGym:[]
   };
 
}

 async componentDidMount(){
  //  await getAsyncData(LOGINKEY).then(res=>{
  //    alert()
  //    if(res!=null){
  //     // alert("k")
  //     // this.props.navigation.navigate('AdminAccount');
  //    }else{
  //     //  alert(res)
  //    }
      
  //   })
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{provider:this}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}