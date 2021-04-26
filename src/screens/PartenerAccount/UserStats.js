import React from 'react'
import { View ,Text} from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
 import axios from 'axios';
class UserStats extends React.PureComponent {
    constructor(props) {
        super(props);
      this.state = {
          data:[50, 10, 40, 95,50, 10, 40, 95,2,10,11,12],
          userStats:''
      };
    
     
    }
    componentDidMount(){
        this.getUserStats()
    }
    getUserStats= async()=>{
        axios.get("https://imtekh.com/noman/zurovas_backend/api/users-activities",
        {
          headers: {
            'Content-Type': "Application/json",
          }
        }).then((response) => {
         console.log('user stats ', response.data)
         let result = response.data.monthWiseYearlyUsers.map(a => a.users);
         console.log('res ',result)
         this.setState({data:result})
         this.setState({userStats:response.data})
        }).catch((error) => {
          console.log('api error get user stats')
  
        });
    }
    render() {
        const fill = 'rgb(128,128,128)'
        
 
        return (
            <View style={{flex:1,paddingTop:'10%',marginLeft:10}}>
                <Text style={{fontSize:20}}>User Stats</Text>
            <BarChart style={{ height:'40%',width:'80%',marginLeft:20 }} width={'1%'} data={this.state.data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }} spacingInner={0.5}>
                <Grid />
            </BarChart>
            <Text>{ this.state.userStats?.total_users+"  Total Registered User"}</Text>
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
            <View style={{width:'10%',height:'15%',borderRadius:15,backgroundColor:'rgb(128,128,128)'}}/>
            <Text style={{marginLeft:5}}>New Users</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
            <View style={{width:'10%',height:'15%',borderRadius:15,backgroundColor:'rgb(128,128,128)'}}/>
            <Text style={{marginLeft:5}}>Inactive Users</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
            <View style={{width:'10%',height:'15%',borderRadius:15,backgroundColor:'rgb(128,128,128)'}}/>
            <Text style={{marginLeft:5}}>Plan Subscibed</Text>
            </View>
            
            
            </View>
        )
    }
}
export default UserStats;