import React, { Component, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';

import Dialog, { DialogContent } from 'react-native-popup-dialog';

class DialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
     
    }
}
render(){
    return(  <Dialog
        visible={this.props.Visible}
        onTouchOutside={this.props.onTouchoutside}
        onHardwareBackPress={this.props.onHardwareBackPress}
      >
        <DialogContent>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 300, height: 150, borderRadius: 15 }}>
    <Text style={{ fontWeight: 'bold', padding: 25 }}>{this.props.text}</Text>
            <TouchableOpacity onPress={this.props.onPress}
              style={{borderWidth: 2,
                borderColor: this.props.colour,
               // backgroundColor: '#4bbb00',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40%',
                height: '28%',
            
                borderRadius: 10,}}
              
            >
              <Text style={{ color:this.props.colour, fontWeight: 'bold' }}>Ok</Text>
            </TouchableOpacity>
          </View>
        </DialogContent>
      </Dialog>)
}}
export default DialogComponent;