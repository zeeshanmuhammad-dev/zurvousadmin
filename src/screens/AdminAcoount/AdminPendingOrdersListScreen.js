import React, {useRef,useState,useEffect}  from 'react';
import {View, Image, StyleSheet,FlatList} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../../colors';
import { getRecentsgym, getRequest } from '../../../Api/GetRequester';
import Loader from '../../components/Common/Loader';
import ApiRoute from '../../../Api/Apiroute';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native';
const AdminAllOrdersList = (props) => {
  const [isLoading,setLoading] = useState(true)
  const [orders,setOrdersArray]=useState([])

  useEffect(() => {
    getOrders()
},[props.navigation]);

  const  getOrders=()=>{

    console.log('get orderlist function called ')
    setLoading(true)
    console.log(props?.info?.id ,'user get credits')
    axios.get("https://imtekh.com/noman/zurovas_backend/api/video_all_status_order",
      {
        params: {
        },

        headers: {
          'Accept': "Application/json",
          'Content-Type': "Application/json",
        }
      }).then((response) => {
        console.log('get orderlist ', typeof(response.data.products_orders),response.data.products_orders)
       _filterTable(response.data.products_orders,'Pending')
        
        
      }).catch((error) => {
        console.log('api error get transactions', error)
        setLoading(false)
        

      });
  }
 const _filterTable = (data, value) => {
  
    var temp = [];
  //  console.log('Value: ', this.state.selectedValue);
    data.map((obj, key) => {
      if (obj.order_status == value) {
        temp.push(obj);
}});
setOrdersArray(temp)
console.log('temp in processing ',temp)
setLoading(false)
  }


 

function Item({ item }) {
  return (
    <View>
      <TouchableOpacity
        style={Styles.contentView}
        onPress={() => props.navigation.navigate('AdminOrderDetail',{order: item})}>
        <View style={Styles.statusView}>
          <Icon name={'spinner-2'} type={'evilicon'} size={15} />
  <Text style={Styles.statusText}>{item.order_status}</Text>
        </View>
        <View style={Styles.contentMainView}>
          <View style={Styles.contentMainViewImageView}>
            <Image
              source={{uri:item.product_image}}
              style={Styles.imageStyle}
            />
          </View>
          <View style={Styles.contentMainViewTextView}>
  <Text style={Styles.nameText}>{item.product_type}</Text>
            <Text style={Styles.costText}>${item.product_price} USD</Text>
            <Text style={Styles.viewDetailText}>View Details</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.spacer2} />
</View>
    );
  }
  
  return (
    <View style={Styles.container}>
      <Loader isVisible={isLoading} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
      {/* </ScrollView> */}
    </View>
  //   <ScrollView contentContainerStyle={Styles.container}>
  //     <TouchableOpacity
  //       style={Styles.contentView}
  //       onPress={() => navigation.navigate('AdminOrderDetail')}>
  //       <View style={Styles.statusView}>
  //         <Icon name={'spinner-2'} type={'evilicon'} size={15} />
  //         <Text style={Styles.statusText}>PANDING</Text>
  //       </View>
  //       <View style={Styles.contentMainView}>
  //         <View style={Styles.contentMainViewImageView}>
  //           <Image
  //             source={require('../../../assets/images/Slice_3.png')}
  //             style={Styles.imageStyle}
  //           />
  //         </View>
  //         <View style={Styles.contentMainViewTextView}>
  //           <Text style={Styles.nameText}>24 HOUR FITNESS</Text>
  //           <Text style={Styles.costText}>$50.00 USD</Text>
  //           <Text style={Styles.viewDetailText}>View Details</Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>

  //     <View style={Styles.spacer2} />

  //     <TouchableOpacity style={Styles.contentView}>
  //       <View style={Styles.statusView}>
  //         <Icon name={'check'} type={'antdesign'} size={15} />
  //         <Text style={Styles.statusText}>COMPLETED</Text>
  //       </View>
  //       <View style={Styles.contentMainView}>
  //         <View style={Styles.contentMainViewImageView}>
  //           <Image
  //             source={require('../../../assets/images/Slice_3.png')}
  //             style={Styles.imageStyle}
  //           />
  //         </View>
  //         <View style={Styles.contentMainViewTextView}>
  //           <Text style={Styles.nameText}>24 HOUR FITNESS</Text>
  //           <Text style={Styles.costText}>$50.00 USD</Text>
  //           <Text style={Styles.viewDetailText}>View Details</Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>

  //     <View style={Styles.spacer2} />

  //     <TouchableOpacity style={Styles.contentView}>
  //       <View style={Styles.statusView}>
  //         <Icon name={'spinner-2'} type={'evilicon'} size={15} />
  //         <Text style={Styles.statusText}>PANDING</Text>
  //       </View>
  //       <View style={Styles.contentMainView}>
  //         <View style={Styles.contentMainViewImageView}>
  //           <Image
  //             source={require('../../../assets/images/Slice_3.png')}
  //             style={Styles.imageStyle}
  //           />
  //         </View>
  //         <View style={Styles.contentMainViewTextView}>
  //           <Text style={Styles.nameText}>24 HOUR FITNESS</Text>
  //           <Text style={Styles.costText}>$50.00 USD</Text>
  //           <Text style={Styles.viewDetailText}>View Details</Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>

  //     <View style={Styles.spacer2} />

  //     <TouchableOpacity style={Styles.contentView}>
  //       <View style={Styles.statusView}>
  //         <Icon name={'spinner-2'} type={'evilicon'} size={15} />
  //         <Text style={Styles.statusText}>PANDING</Text>
  //       </View>
  //       <View style={Styles.contentMainView}>
  //         <View style={Styles.contentMainViewImageView}>
  //           <Image
  //             source={require('../../../assets/images/Slice_3.png')}
  //             style={Styles.imageStyle}
  //           />
  //         </View>
  //         <View style={Styles.contentMainViewTextView}>
  //           <Text style={Styles.nameText}>24 HOUR FITNESS</Text>
  //           <Text style={Styles.costText}>$50.00 USD</Text>
  //           <Text style={Styles.viewDetailText}>View Details</Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>

  //     <View style={Styles.spacer2} />
  //   </ScrollView>
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
  statusView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  idText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 12,
  },
  contentMainView: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    //marginBottom: 30,
  },
  contentMainViewImageView: {
    width: 75,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    borderWidth: 0.3,
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
    fontSize: 14,
    //fontWeight: 'bold',
  },
  viewDetailText: {
    fontSize: 15.5,
    marginTop: 15,
    //fontWeight: 'bold',
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
    height: 10,
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
export default connect(mapStateToProps)(AdminAllOrdersList);


