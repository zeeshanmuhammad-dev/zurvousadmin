import React,{useRef,useState,useEffect} from 'react';
import {View, Image, StyleSheet,Alert} from 'react-native';
import {Text, Icon, Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Menu, {MenuItem} from 'react-native-material-menu';
import Colors from '../../../colors';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import axios from 'axios'
const AdminOrderDetail = (props) => {
  const menuRef = useRef([]);
  const [isLoading,setLoading] = useState(true)
  const [order,setOrderDet]=useState({})
  const hideMenu = i => {
    menuRef.current[i].hide();
  };

  const showMenu = i => {
    console.log('item ',order)
    if(order.order_status=='Pending'){
    menuRef.current[i].show();
    }
  };

  useEffect(() => {
    
    setOrderDet(props.route.params.order)
  },[])

  function getiInfDet(id){
    
  }
  const completeOrder=()=>{

//     Route::get('change-product-order/{id}','ProductOrderController@changeorder');
// Route::get('change-video-order/{id}','VideoOrderController@changeorder');


axios.get("https://imtekh.com/noman/zurovas_backend/api/change-product-order/"+order.id+'/'+1,
  {
    headers: {
      'Accept': "Application/json",
      'Content-Type': "Application/json",
    }
  }).then((response) => {
    console.log('get orderlist ',response)
    Alert.alert(
      'Success',
     'Order Completed Success',
      [
        {
          text: 'Ok',
          onPress: () => {
            setLoading(false)
          },
        },
      ],
    );
    
    
    
  }).catch((error) => {
    Alert.alert(
      'Failed',
     'Order completion  Failed',
      [
        {
          text: 'Ok',
          onPress: () => {
            setLoading(false)
          },
        },
      ],
    );
    

  
    

  });

  }
  const cancelOrder=()=>{

    //     Route::get('change-product-order/{id}','ProductOrderController@changeorder');
    // Route::get('change-video-order/{id}','VideoOrderController@changeorder');
    
    
    axios.get("https://imtekh.com/noman/zurovas_backend/api/change-product-order/"+order.id+'/'+2,
      {
        params:{},
        headers: {
          'Accept': "Application/json",
          'Content-Type': "Application/json",
        }
      }).then((response) => {
        Alert.alert(
          'Success',
         'Order Cancelled Success',
          [
            {
              text: 'Ok',
              onPress: () => {
                setLoading(false)
              },
            },
          ],
        );
        
        
      }).catch((error) => {
        Alert.alert(
          'Failed',
         'Order Cancelled Failed',
          [
            {
              text: 'Ok',
              onPress: () => {
                setLoading(false)
              },
            },
          ],
        );
        
    
      });
    
      }
  

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.contentView}>
        <View style={Styles.statusView}>
          <Menu
            ref={r => (menuRef.current[0] = r)}
            button={
              <Icon
                name={'dots-vertical'}
                type={'material-community'}
                size={25}
                style={Styles.listItemMenuIcon}
                onPress={() => showMenu(0)}
              />
            }
            style={Styles.menuStyle}>
            <MenuItem
              onPress={() => {hideMenu(0);completeOrder();}}
              style={Styles.menuItemStyle}
              textStyle={Styles.menuTextStyle}>
                {'Complete'}
              {/* {order.order_status} */}
            </MenuItem>
            <Divider style={Styles.menuDividerStyle} />
            <MenuItem
              onPress={() => {hideMenu(0);cancelOrder();}}
              style={Styles.menuItemStyle}
              textStyle={Styles.menuTextStyle}>
              Cancel
            </MenuItem>
          </Menu>
        </View>
        <View style={Styles.contentMainView}>
          <View style={Styles.contentMainViewImageView}>
            <Image
              source={{uri:order.product_image}}
              style={Styles.imageStyle}
            />
          </View>
          <View style={Styles.contentMainViewTextView}>
          <Text style={Styles.nameText}>{order.product_name}</Text>
            <Text style={Styles.costText}>${order.product_price} USD</Text>
            <Text style={Styles.viewDetailText}>View Details</Text>
          </View>
        </View>
        <Divider style={Styles.Divider} />
        <View style={Styles.detailView}>
          <Text style={Styles.nameText}>{order.address}</Text>
          <Text style={Styles.descriptionText}>
           {order.product_description}
          </Text>
        </View>
        <Divider style={Styles.Divider} />
        <View style={Styles.contentViewList}>
          <View style={Styles.listItem}>
            <Text style={Styles.textStyle1}>Customer</Text>
          <Text style={Styles.textStyle1}>{order.user_full_name}</Text>
          </View>
          <View style={Styles.spacer} />
          <View style={Styles.listItem}>
            <Text style={Styles.textStyle1}>Type</Text>
          <Text style={Styles.textStyle1}>{order.product_type}</Text>
          </View>
        </View>
        <Divider style={Styles.divider2} />
        <View style={Styles.spacer2} />
        <View style={Styles.listItem}>
          <Text style={Styles.textStyle2}>Status</Text>
          <Text style={Styles.textStyle2}>{order.order_status}</Text>
        </View>
      </View>

      <View style={Styles.spacer2} />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 0,
    alignItems: 'center',
    marginBottom: 20,
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
    marginTop: 2,
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
  menuStyle: {
    width: 200,
    height: 160,
    //marginRight: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  menuItemStyle: {
    paddingVertical: 10,
  },
  menuTextStyle: {
    fontSize: 18,
  },
  menuDividerStyle: {marginHorizontal: 14},
  detailView: {
    paddingVertical: 20,
  },
  descriptionText: {
    marginTop: 15,
  },
});
const mapStateToProps =(state)=>{
  console.log(state);
  return{
      info: state.mainReducer.accoutInfo
  };
}
export default connect(mapStateToProps)(AdminOrderDetail);

