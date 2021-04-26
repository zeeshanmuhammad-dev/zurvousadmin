import React, {useRef,useState,useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Icon, Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Menu, {MenuItem} from 'react-native-material-menu';
import Colors from '../../../colors';
import { getRequest } from '../../../Api/GetRequester';
import ApiRoute from '../../../Api/Apiroute';
import Loader from '../../components/Common/Loader';

const AdminGymDetail = (props) => {


  const [userDet, setUserDetail] = useState('');
  const [isVisible, setisVisible] = useState(false)

  

  useEffect(() => {
    setisVisible(true)
    getUserDetail(props.route.params.id)
  },[])

  function getUserDetail(id){
    getRequest(ApiRoute.userDetail+id).then(res => {
        setUserDetail(res.data)
      setisVisible(false)
    })
  }

  return (
    <ScrollView contentContainerStyle={Styles.container}>
        <Loader isVisible={isVisible} />
      <View style={Styles.contentView}>
        <View style={Styles.statusView}>
          
        </View>
        
        <View style={Styles.contentMainView}>
          {/* <View style={Styles.contentMainViewImageView}>
            <Image
              source={require('../../../assets/images/Slice_3.png')}
              style={Styles.imageStyle}
            />
          </View> */}
          <View style={Styles.contentMainViewTextView}>
            <Text style={Styles.nameText}>{userDet.full_name}</Text>
            <Text style={Styles.costText}>{userDet.email}</Text>
          </View>
        </View>
        
        <View style={[Styles.listItemLocationTextView,{flexDirection: 'row'}]}>
                        <View style={[Styles.listItemLocationTextViewInner,{flexDirection: 'row'}]}>
                            <Icon
                                name={'location'}
                                type={'evilicon'}
                                size={18}
                                style={Styles.icon}
                            />
                            <Text style={Styles.listItemText2}>{userDet.city}</Text>
                        </View>
                        <Text>{'    '}</Text>
                        <View style={[Styles.listItemLocationTextViewInner,{flexDirection: 'row'}]}>
                            <Icon
                                name={'dot-single'}
                                type={'entypo'}
                                size={18}
                                style={Styles.icon}
                            />
                            <Text style={Styles.listItemText2}>{userDet.street_address}</Text>
                        </View>
                        
                    </View>
        {/* <Divider style={Styles.Divider} />
        <View style={Styles.detailView}>
          <Text style={Styles.nameText}>Gym Discription</Text>
          <Text style={Styles.descriptionText}>
            {userDet.gym_detail}
          </Text>
        </View> */}
        <Divider style={Styles.Divider} />
        <View style={Styles.contentViewList}>
          <View style={Styles.listItem}>
            <Text style={Styles.textStyle1}>Started</Text>
            <Text style={Styles.textStyle1}>{userDet.datetime}</Text>
          </View>
          <View style={Styles.spacer} />
          <View style={Styles.listItem}>
            <Text style={Styles.textStyle1}>Contact</Text>
        <Text style={Styles.textStyle1}>{userDet.phone_no}</Text>
          </View>
        </View>
        {/* <Divider style={Styles.divider2} />
        <View style={Styles.spacer2} />
        <View style={Styles.listItem}>
          <Text style={Styles.textStyle2}>Status</Text>
        <Text style={Styles.textStyle2}>{userDet.status}</Text>
        </View> */}
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

export default AdminGymDetail;
