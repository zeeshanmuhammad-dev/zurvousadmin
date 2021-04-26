import React from 'react';
import {View, LogBox} from 'react-native';
import Colors from '../../../colors';
import {StyleSheet,Text} from 'react-native';
import {ScrollView} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import Svg,{ Circle,Text as SvgText } from 'react-native-svg';
import axios from 'axios'
LogBox.ignoreLogs(['Warning: ...']);
const FinancialReport = (props) => {
 const [report, setreport] = React.useState('');
 const [Total, setTotal] = React.useState(0);

 
  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7,
    );
React.useEffect(()=>{
getReport()
},[props.navigation])
const getReport=async()=>{
  let user = await AsyncStorage.getItem('UserLogedIn');
  console.log(props?.info?.id ,'user')
      axios.get("https://imtekh.com/noman/zurovas_backend/api/financial-report",
        {
          params: {
          },
  
          headers: {
            'Accept': "Application/json",
            'Content-Type': "Application/json",
          }
        }).then((response) => {
          console.log('get transactions ', typeof(response.data),response.data)
          setreport(response.data)
          
        }).catch((error) => {
          console.log('api error get transactions', error)
          
  
        });

}


  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={Styles.innerContainer}>
        <Text style={Styles.headerText}>Annual Financial Report</Text>
        <View>
          <Text  >Weekly</Text>
          <Text >{report?.weekly} </Text> 
          </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:15}}>
          <View>
          <Text  >Monthly </Text>
          <Text >{report?.monthly} </Text> 
          </View>
        <View style={Styles.Chart}/>
        <View>
          <Text >Annual </Text>
          <Text >{report?.yearly} </Text> 
          </View>
        </View>
        <View>
          <Text  >Day </Text>
          <Text >{report?.today} </Text> 
          </View>
          <Text style={Styles.headerText}>{'Total Revenue = '+report?.totalRevenue}</Text>
      </View>
 
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  headerLeftView: {
    paddingLeft: 8,
  },
  headerLeftText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 25,
    backgroundColor: Colors.COLOR_WHITE,
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft:15
  },
  Chart:{
    height:150,
    width:150,
    borderRadius:60,
    borderLeftColor:'#b8d5cd',
    borderRightColor:'#8abaae',
    borderTopColor:'#5ca08e',
    borderBottomColor:'#2e856e',
    borderWidth:40

  }
});

export default FinancialReport;
