import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, } from 'react-native';
import Colors from '../../../colors';
import { Icon, Divider, SearchBar, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { TouchableNativeFeedback, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { StackedBarChart } from 'react-native-chart-kit';
import { GymEditProfileArray } from '../../../assets/Constant/Feed';
import RowGymEditProfile from '../../components/FlatListRows/RowGymEditProfile';
import Loader from '../../components/Common/Loader';
import ApiRoute from '../../../Api/Apiroute';
import { PostReq } from '../../../Api/Requester';
import { getRecentsgym, getRequest } from '../../../Api/GetRequester';
import {connect} from 'react-redux';
const initialLayout = { width: Dimensions.get('window').width };

const GymEditProfile = ({ navigation ,info}) => {
    const [searchValue, setSearchValue] = useState('');
const [posts,setPostsArray]=useState([])
const [locs,setLocsArray]=useState([])
const [followers,setFollowersArray]=useState([])
const [followings,setFollowingsArray]=useState([])
const [isLoading,setLoading] = useState(true)
const [gymName,setGymName] = useState(true)
const [gymCost,setGymCost] = useState(true)
const [gymDec,setGymDec] = useState(true)
const [gymDetails,setGymDetails] = useState('')
    const { width } = Dimensions.get('screen');

    const [index, setIndex] = React.useState(0);

    function getPosts(){
        setLoading(true)
        getRequest(ApiRoute.getPosts).then(res => {
            console.log("ffffffffffftttttfffffffffffffff",res)
            if(!res.status){
                setPostsArray(res.data)
            }
        
          setLoading(false)
        })
      }

      function getLocs(){
        setLoading(true)
        getRequest(ApiRoute.getAllLocs+info.id).then(res => {
            console.log("ffffffffffftttttfffffffffffffff",res)
            if(!res.status){
                setLocsArray(res.data)
            }
        
          setLoading(false)
        })
      }

      function getGymDetails(){
        setLoading(true)
        getRequest(ApiRoute.gymDetail+info.id).then(res => {
            console.log("ffffffffffftttttfffffffffffffff",res)
            if(!res.status){
                setGymDetails(res.data)
                console.log('gymDetails ',gymDetails,'res.data',res.data)
                setGymName(res.data.full_name)
                setGymCost(res.data.cost_per_day)
                setGymDec(res.data.gym_detail)
            }
        
          setLoading(false)
        })
      }

      function getFollowers(){
        setLoading(true)
        getRequest(ApiRoute.getFollowers+info.id).then(res => {

        if(!res.status){
            setFollowersArray(res.data)
        }
         // setFollowersArray(res.data)
          setLoading(false)
        })
      }

      function getFollowings(){
        setLoading(true)
        getRequest(ApiRoute.getFollowings+info.id).then(res => {
            console.log("ffffffffffffffffffffffffff",res)
            if(!res.status){
                setFollowingsArray(res.data)
            }
         
          setLoading(false)
        })
      }

    useEffect(() => {
        getPosts()
        getFollowers()
        getFollowings()
        getGymDetails()
        getLocs()
        // navigation.setOptions({
        //     title: '',
        //     headerStyle: {
        //       backgroundColor: Colors.HEADER_BACKGROUND,
        //     },
        //     headerShown: true,
        //     headerLeft: () => (
        //       <View style={Styles.headerLeftView}>
        //        <View style={{height:40,width:40,borderRadius:20,backgroundColor:"#c4c4c4",}}/> 
        //         <Text style={Styles.headerLeftText}>Hunter Ballew</Text>
        //       </View>
        //     ),
        //     headerRight: () => (
        //       <View style={Styles.headerRightView}>
        //         <TouchableNativeFeedback
        //           onPress={() => navigation.navigate('AdminNotifications')}
        //           style={Styles.headerRightIconView}>
        //           <Icon
        //             name={'notifications-none'}
        //             type={'material'}
        //             size={25}
        //             color={'#ffffffff'}
        //             style={Styles.headerRightIcon}
        //           />
        //         </TouchableNativeFeedback>
        //         <TouchableNativeFeedback
        //           onPress={() => navigation.navigate('AdminInbox')}
        //           style={Styles.headerRightIconView}>
        //           <Icon
        //             name={'envelope'}
        //             type={'evilicon'}
        //             size={25}
        //             color={'#ffffffff'}
        //             style={Styles.headerRightIcon}
        //           />
        //         </TouchableNativeFeedback>
        //         <TouchableNativeFeedback onPress={() => navigation.toggleDrawer()}>
        //           <Icon
        //             name={'dots-vertical'}
        //             type={'material-community'}
        //             size={25}
        //             color={'#ffffffff'}
        //             style={Styles.headerRightIcon}
        //           />
        //         </TouchableNativeFeedback>
        //       </View>
        //     ),
        //   });
    },[]);

    return (
        <ScrollView style={Styles.container}>
              <Loader isVisible={isLoading} />
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 15, flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'gray' }} />
                    <TouchableOpacity onPress={()=>{navigation.navigate("GymDetail",{posts,followers,followings})}}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={Styles.socialIndicationTest}>{posts.length}</Text>
                        <Text >Post</Text>
                    </View>
                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate("GymDetail",{posts,followers,followings})}}>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={Styles.socialIndicationTest}>{followers.length}</Text>
                        <Text>Followers</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate("GymDetail",{posts,followers,followings})}}>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={Styles.socialIndicationTest}>{followings.length}</Text>
                        <Text>Following</Text>
                    </View>
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: 30 }}>
    <Text style={Styles.socialIndicationTest}>{gymName}</Text>
    <Text>${gymCost}</Text>
    <Text>{gymDec}</Text>
                    <Button onPress={()=>navigation.navigate('EditMyProfile',{gymDetails})} buttonStyle={{ height: 50, marginTop: 30 }} title="EDIT MY PROFILE" />
                    
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
                    <Text>Locations</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Add New</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddGymLocation')}>
                        <Icon
                            name={'add-circle-outline'}
                            type={'material'}
                            size={25}
                            color={'black'}
                            style={Styles.iconView}
                        />
                        </TouchableOpacity>
                        
                    </View>

                </View>
                <View
                    style={{
                        marginTop: 5,
                        borderBottomColor: '#c3c3c3',
                        borderBottomWidth: 1,
                    }}
                />

                <FlatList
                    data={locs}
                    renderItem={({ item }) => <RowGymEditProfile item={item} title={gymName} cost={gymCost}/>}
                    keyExtractor={item => item.id}
                />

            </View>

        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.COLOR_WHITE,
    },
    socialIndicationTest: {
        fontWeight: 'bold', fontSize: 20
    },
    iconView: {
        paddingHorizontal: 6,
        borderRadius: 50,
    },

});

const mapStateToProps =(state)=>{
    console.log(state);
    return{
        info: state.mainReducer.accoutInfo
    };
  }
  
  export default connect(mapStateToProps)(GymEditProfile);
