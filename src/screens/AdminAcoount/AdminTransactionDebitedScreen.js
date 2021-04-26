import React from 'react';
import {View, Image, StyleSheet,FlatList,ScrollView} from 'react-native';
import {Text, Divider} from 'react-native-elements';
import Colors from '../../../colors';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import axios from 'axios'

const AdminTransactionDebited = (props) => {
  const [transactions, setTransactions] = React.useState([]);
  React.useEffect(()=>{
   getData();
},[props.navigation])
const getData=async()=>{
  
  let user = await AsyncStorage.getItem('UserLogedIn');
  console.log(props?.info?.id ,'user')
      axios.get("https://imtekh.com/noman/zurovas_backend/api/all_transactions/"+user,
        {
          params: {
          },
  
          headers: {
            'Accept': "Application/json",
            'Content-Type': "Application/json",
          }
        }).then((response) => {
          console.log('get transactions ', typeof(response.data))
         // setTransactions(response.data.data)
          _filterTable(response.data.data)
          
        }).catch((error) => {
          console.log('api error get transactions', error)
          
  
        });

}
const _filterTable = (data) => {
  var temp = [];
//  console.log('Value: ', this.state.selectedValue);
  data.map((obj, key) => {
    if (obj.t_type ==1||obj.t_type =='1') {
      temp.push(obj);
}});
setTransactions(temp)
}
  return (
    <ScrollView contentContainerStyle={Styles.container}>
 {
      transactions?.map((value,i)=>{
        console.log('map ',value)
        return(
            <View style={Styles.contentView}>
            <View style={Styles.idDateView}>
        <Text style={Styles.idText}>{value.charge_id}</Text>
        <Text style={Styles.dateText}>{value?.date}</Text>
            </View>
            <View style={Styles.contentMainView}>
              <View style={Styles.contentMainViewImageView}>
                <Image
                  source={require('../../../assets/images/Slice_2.png')}
                  style={Styles.imageStyle}
                />
              </View>
              <View style={Styles.contentMainViewTextView}>
        <Text style={Styles.nameText}>{value.description}</Text>
                <Text style={Styles.costText}>{value.amount+' '+value.currency}</Text>
              </View>
            </View>
            <Divider style={Styles.divider} />
            <View style={Styles.contentViewList}>
              <View style={Styles.listItem}>
        <Text style={Styles.textStyle1}>name</Text>
        <Text style={Styles.textStyle1}>{value.user_name}</Text>
              </View>
     
            </View>
          </View>
    
           )
        
      })
     }
     

    
     
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    backgroundColor: Colors.BACKGROUND_1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  contentView: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#ffffffff',
    borderRadius: 5,
    elevation: 5,
  },
  idDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  idText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
  },
  contentMainView: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  contentMainViewImageView: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50 / 2,
    borderWidth: 0.5,
  },
  imageStyle: {
    width: '60%',
    height: '60%',
  },
  contentMainViewTextView: {
    paddingLeft: 15,
  },
  nameText: {
    fontSize: 16.5,
    fontWeight: 'bold',
  },
  costText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#dadadaff',
  },
  contentViewList: {
    paddingVertical: 15,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle1: {
    fontSize: 17,
  },
  textStyle2: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  spacer: {
    height: 30,
  },
  spacer2: {
    height: 15,
  },
  divider2: {
    height: 2,
    backgroundColor: '#dadadaff',
  },
});
const mapStateToProps =(state)=>{
  console.log(state);
  return{
      info: state.mainReducer.accoutInfo
  };
}

export default connect(mapStateToProps)(AdminTransactionDebited);

