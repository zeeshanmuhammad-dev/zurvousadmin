import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Colors from '../../../../colors';
import { CrediteArray } from '../../../../assets/Constant/Feed';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import Loader from '../../../components/Common/Loader';
const Credites = (props) => {
  const [checked, setChecked] = useState(false);
  const [transactions, setTransactions] = React.useState([]);
  const [isLoading,setLoading] = useState(true)
  React.useEffect(()=>{
   getData();
},[props.navigation])
const getData=async()=>{
  
  let user = await AsyncStorage.getItem('UserLogedIn');

      axios.get("https://imtekh.com/noman/zurovas_backend/api/all_transactions_gym/"+user,
        {
          params: {
          },
  
          headers: {
            'Accept': "Application/json",
            'Content-Type': "Application/json",
          }
        }).then((response) => {
          console.log('get transactions gym manager', response.data.length)
         if(response.data.length !==undefined){
          _filterTable(response.data,0)
         }else{
          setLoading(false)
         }
        //  
          
        }).catch((error) => {
          console.log('api error get transactions', error)
          setLoading(false)
  
        });

}
const _filterTable = (data, value) => {
  var temp = [];
  data?.map((obj, key) => {
    if (obj?.t_type == value) {
      temp.push(obj);
}});
setTransactions(temp)
setLoading(false)
}

  function RowCredit({ item }) {
    return (
      <Card >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>{item.charge_id}</Text>
          <Text style={{ color: '#c3c4c4' }}>{item.updated_at}</Text>
        </View>
        <Text style={{ fontSize:15,fontWeight:'bold',marginTop:10 }}>{item.description}</Text>

        <View
          style={{
            marginTop: 25,
            borderBottomColor: '#c3c4c5',
            borderBottomWidth: 1,
          }}
        />
        <View style={{ justifyContent: 'space-between', flex: 1, flexDirection: 'row' ,marginTop:10}}>
          <Text style={{}}>Total amount</Text>
          <Text style={{}}>{item.amount}</Text>
        </View>
      </View>
    </Card>
    )

  }

  return (
    <View style={Styles.container}>
      <Loader isVisible={isLoading} />
      <FlatList
        data={transactions}
        renderItem={({ item }) => <RowCredit item={item} />}
        keyExtractor={item => item.id}
      />


    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_1,
    padding:2
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
  inputFields: {
    width: '100%',
  },
  inputView: {
    marginBottom: 20,
  },
  inputLabelText: {
    fontSize: 20,
  },
  inputStyle: {
    backgroundColor: Colors.TEXT_INPUT,
    height: 60,
    marginTop: 5,
    paddingLeft: 15,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 19,
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
    fontSize: 19,
    fontWeight: 'normal',
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.TOUCHABLE_BUTTON,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    //textAlignVertical: 'center',
  },
  loginText: {
    fontSize: 20,
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
    fontSize: 19,
  },
});

export default Credites;
