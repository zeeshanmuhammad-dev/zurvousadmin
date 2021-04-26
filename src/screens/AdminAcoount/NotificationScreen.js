import React, {useEffect, useRef,useState}  from 'react';
import {View, Text} from 'react-native';
import Colors from '../../../colors';
import {Divider} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {ScrollView,Image,FlatList} from 'react-native';
import { getRecentsgym, getRequest } from '../../../Api/GetRequester';
import Loader from '../../components/Common/Loader';
import ApiRoute from '../../../Api/Apiroute';

const AdminNotifications = ({navigation}) => {
  const [isLoading,setLoading] = useState(true)
  const [recentAddedArray, setRecentAddedArray] = useState([])

  function getNotifications(){
    setLoading(true)
    getRequest(ApiRoute.allNotifications+1).then(res => {
      concole.log("tyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyygdf",res)
      if(!res.status){
        setRecentAddedArray(res.data)
    }
      setLoading(false)
    })
  }

  useEffect(() => {
    getNotifications()
  },[]);


  return (
    <ScrollView
      contentContainerStyle={Styles.container}
      showsVerticalScrollIndicator={false}>
         <Loader isVisible={isLoading} />  
      <View style={Styles.listView}>
        <View style={Styles.listItemView}>
          {recentAddedArray.map((item, index) =>
          <View>
          <View style={Styles.listItem}>
            {/* <View style={Styles.imageView}>
              <Text style={Styles.imgViewText}>A</Text>
            </View> */}
            <Image
                 style={Styles.imageView}
                source={{uri:item.postimage}}
            />
            <View style={Styles.listItemTextView}>
              <View style={Styles.listItemTextView_t}>
                <Text style={Styles.listItemText1}>{item.post_title}</Text>
          <Text style={Styles.listItemdateText}>{item.time}</Text>
              </View>
              <View style={Styles.listItemDescriptionTextView}>
                <Text style={Styles.listItemText3}>
                  {item.message}
                </Text>
              </View>
            </View>
          </View>

          <Divider style={Styles.dividerStyle} />
          </View>
          )}
          {/* <View style={Styles.listItem}>
            <View style={Styles.imageView}>
              <Text style={Styles.imgViewText}>A</Text>
            </View>
            <View style={Styles.listItemTextView}>
              <View style={Styles.listItemTextView_t}>
                <Text style={Styles.listItemText1}>Headline here</Text>
                <Text style={Styles.listItemdateText}>01/01/2020</Text>
              </View>
              <View style={Styles.listItemDescriptionTextView}>
                <Text style={Styles.listItemText3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </View>
            </View>
          </View>

          <Divider style={Styles.dividerStyle} />

          <View style={Styles.listItem}>
            <View style={Styles.imageView}>
              <Text style={Styles.imgViewText}>A</Text>
            </View>
            <View style={Styles.listItemTextView}>
              <View style={Styles.listItemTextView_t}>
                <Text style={Styles.listItemText1}>Headline here</Text>
                <Text style={Styles.listItemdateText}>01/01/2020</Text>
              </View>
              <View style={Styles.listItemDescriptionTextView}>
                <Text style={Styles.listItemText3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </View>
            </View>
          </View>

          <Divider style={Styles.dividerStyle} />

          <View style={Styles.listItem}>
            <View style={Styles.imageView}>
              <Text style={Styles.imgViewText}>A</Text>
            </View>
            <View style={Styles.listItemTextView}>
              <View style={Styles.listItemTextView_t}>
                <Text style={Styles.listItemText1}>Headline here</Text>
                <Text style={Styles.listItemdateText}>01/01/2020</Text>
              </View>
              <View style={Styles.listItemDescriptionTextView}>
                <Text style={Styles.listItemText3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </View>
            </View>
          </View>

          <Divider style={Styles.dividerStyle} />

          <View style={Styles.listItem}>
            <View style={Styles.imageView}>
              <Text style={Styles.imgViewText}>A</Text>
            </View>
            <View style={Styles.listItemTextView}>
              <View style={Styles.listItemTextView_t}>
                <Text style={Styles.listItemText1}>Headline here</Text>
                <Text style={Styles.listItemdateText}>01/01/2020</Text>
              </View>
              <View style={Styles.listItemDescriptionTextView}>
                <Text style={Styles.listItemText3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </View>
            </View>
          </View> */}
        </View>
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
    //flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },
  listView: {
    width: '100%',
    backgroundColor: Colors.VIEWS_BACKGROUND,
  },
  listViewHeader: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingHorizontal: 8,
  },
  listViewHeaderLeftText: {
    fontSize: 22,
  },
  listViewHeaderRightText: {
    fontSize: 16,
  },
  listItemView: {
    paddingVertical: 0,
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 30,
    //alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  imageView: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.TOUCHABLE_BUTTON,
  },
  listItemTextView: {
    width: '90%',
    paddingLeft: 10,
    flex: 2,
  },
  listItemTextView_t: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemTextView2: {
    flex: 2,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemMenuIcon: {
    alignSelf: 'flex-start',
  },
  listItemText1: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  listItemText2: {
    fontSize: 18,
  },
  listItemText3: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.6)',
  },
  listItemdateText: {
    marginTop: 5,
    fontSize: 15,
  },
  icon: {
    fontWeight: 'bold',
  },
  listItemDescriptionTextView: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },
  dividerStyle: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  imgViewText: {
    fontSize: 30,
    color: Colors.COLOR_WHITE,
  },
});

export default AdminNotifications;
